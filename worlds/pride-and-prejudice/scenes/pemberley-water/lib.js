// The brushes the scene's paintings share: a light watercolour wash with a fine sepia pen line (Hugh Thomson's
// drawings for the novel). Everything is painted once, in daylight colours; the light is the engine's.
const hex = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
// a colour a shade lighter (k > 1: toward white) or darker (k < 1), with an alpha
const tone = (c, k, a = 1) => {
  const f = v => Math.round(Math.max(0, Math.min(255, k >= 1 ? v + (255 - v) * (k - 1) : v * k)));
  const [r, g, b] = hex(c);
  return `rgba(${f(r)},${f(g)},${f(b)},${a})`;
};
// a steady random sequence from a seed: the same every painting
const rand = seed => {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
};
// the metres one screen pixel covers at an element's distance (the frame's height is its distance; 1080 px)
const px = e => Math.max(0.0015, e.spot.distance / 1080);
// the pen: a thin sepia line
const INK = '#4a3a2c';
const pen = (g, path, width, alpha = 0.6) => {
  g.strokeStyle = tone(INK, 1, alpha);
  g.lineWidth = width;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.stroke(path);
};
// a wash: the path filled with its colour; the pigment blooming a little lighter and darker in it (soft round patches,
// each the path filled again with a radial gradient — so they stay inside it); its edge pooled a shade darker
const wash = (g, path, color, box, r, blooms = 4, edge = 0) => {
  g.fillStyle = color;
  g.fill(path);
  const [x0, y0, x1, y1] = box, size = Math.max(x1 - x0, y1 - y0);
  for (let i = 0; i < blooms; i++) {
    const x = x0 + (x1 - x0) * r(), y = y0 + (y1 - y0) * r(), rad = size * (0.12 + 0.3 * r()), k = r() < 0.5 ? 0.9 : 1.1;
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, tone(color, k, 0.5));
    gr.addColorStop(1, tone(color, k, 0));
    g.fillStyle = gr;
    g.fill(path);
  }
  if (edge > 0) {
    g.strokeStyle = tone(color, 0.84, 0.6);
    g.lineWidth = edge;
    g.lineJoin = 'round';
    g.stroke(path);
  }
};
// foliage: round clumps of small leaf dabs about the centres [x, y, radius] — a solid dark underlayer, then the greens
// from the shade (lower) to the light (higher), each a single path
const foliage = (g, centres, greens, r, dab) => {
  const under = new Path2D();
  for (const [cx, cy, cr] of centres) {
    under.moveTo(cx + cr * 0.85, cy + cr * 0.1);
    under.ellipse(cx, cy + cr * 0.1, cr * 0.85, cr * 0.72, 0, 0, Math.PI * 2);
  }
  g.fillStyle = greens[0];
  g.fill(under);
  for (let t = 0; t < greens.length; t++) {
    const p = new Path2D(), lift = (1 - t) * 0.2, spread = 1 - 0.18 * t;
    for (const [cx, cy, cr] of centres) {
      const n = Math.round(8 + (cr / dab) * 2.5);
      for (let i = 0; i < n; i++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * cr * spread, s = dab * (0.6 + 0.6 * r());
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.8 + lift * cr - (t === greens.length - 1 ? 0.15 * cr : 0);
        p.moveTo(x + s, y);
        p.ellipse(x, y, s, s * 0.7, r() * Math.PI, 0, Math.PI * 2);
      }
    }
    g.fillStyle = greens[t];
    g.fill(p);
  }
};
// a line of land against the sky from x0 to x1: its top at top(x), closed down to `base`
const ridge = (x0, x1, base, step, top) => {
  const p = new Path2D();
  p.moveTo(x0, base);
  for (let x = x0; x <= x1 + step * 0.5; x += step) p.lineTo(x, top(x));
  p.lineTo(x1, base);
  p.closePath();
  return p;
};
// the top line of a ridge alone, for the pen
const ridgeLine = (x0, x1, step, top) => {
  const p = new Path2D();
  p.moveTo(x0, top(x0));
  for (let x = x0 + step; x <= x1 + step * 0.5; x += step) p.lineTo(x, top(x));
  return p;
};
// a soft cloud in the sky (stage heights): a grey-lilac underside, white puffs over it, edges melting into the blue
const cloud = (g, x, y, w, r) => {
  const puff = (cx, cy, rad, rgb, a) => {
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, rad);
    gr.addColorStop(0, `rgba(${rgb},${a})`);
    gr.addColorStop(0.55, `rgba(${rgb},${a * 0.8})`);
    gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr;
    g.fillRect(cx - rad, cy - rad, rad * 2, rad * 2);
  };
  const n = 5 + Math.floor(r() * 4);
  for (let i = 0; i < n; i++) puff(x + (r() - 0.5) * w, y + w * 0.06 + r() * w * 0.04, w * (0.12 + 0.08 * r()), '206,206,214', 0.45);
  for (let i = 0; i < n + 2; i++) {
    const u = (i + 0.5) / (n + 2) - 0.5;
    puff(x + u * w * 0.9 + (r() - 0.5) * w * 0.1, y - (0.25 - u * u) * w * 0.35 + r() * w * 0.03, w * (0.1 + 0.1 * r()), '253,251,246', 0.9);
  }
};
return { tone, rand, px, pen, wash, foliage, ridge, ridgeLine, cloud };
