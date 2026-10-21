// The world's brushes: a light watercolour wash and a fine sepia pen, as Hugh Thomson drew the novel — shared by every
// scene so that the places and the people (whose pen line is the cast's, in the same ink) are of one hand. Everything is
// painted once, in daylight colours; the light is the engine's. brush.md says what each brush is and how to call it.
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
// the metres one screen pixel of a 1080-px frame covers at an element's distance (the frame is about as tall as the
// distance)
const px = e => Math.max(0.0012, e.spot.distance / 1080);
// the ink: a warm sepia, the same as the cast's line
const INK = '#3d2c1f';
// the pen: a line `width` wide (metres; a few screen pixels: n * px(e)), and a second, finer stroke a hair beside it —
// the slightly doubled line of a hand-held nib
const pen = (g, path, width, alpha = 0.8) => {
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.strokeStyle = tone(INK, 1, alpha);
  g.lineWidth = width;
  g.stroke(path);
  g.save();
  g.translate(width * 0.7, width * 0.45);
  g.strokeStyle = tone(INK, 1, alpha * 0.35);
  g.lineWidth = width * 0.55;
  g.stroke(path);
  g.restore();
};
// hatching: parallel pen strokes `step` apart at `angle` (radians from the level, up to the right) over the box
// [x0, y0, x1, y1], only inside `clip` — the shade side of a trunk, the shadow under an arch or an eave
const hatch = (g, clip, box, step, angle, width, alpha = 0.55) => {
  const [x0, y0, x1, y1] = box, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, half = Math.hypot(x1 - x0, y1 - y0) / 2;
  const c = Math.cos(angle), s = Math.sin(angle), p = new Path2D();
  for (let d = -half; d <= half; d += step) {
    p.moveTo(cx - c * half - s * d, cy + s * half - c * d);
    p.lineTo(cx + c * half - s * d, cy - s * half - c * d);
  }
  g.save();
  g.clip(clip);
  g.lineCap = 'round';
  g.strokeStyle = tone(INK, 1, alpha);
  g.lineWidth = width;
  g.stroke(p);
  g.restore();
};
// a wash: the path filled with its colour; the pigment blooming lighter and darker in it (soft round patches, each the
// path filled again with a radial gradient — so they stay inside it); its edge pooled a shade darker, as watercolour
// dries (edge: the pooled rim's width, metres)
const wash = (g, path, color, box, r, blooms = 4, edge = 0) => {
  g.fillStyle = color;
  g.fill(path);
  const [x0, y0, x1, y1] = box, size = Math.max(x1 - x0, y1 - y0);
  for (let i = 0; i < blooms; i++) {
    const x = x0 + (x1 - x0) * r(), y = y0 + (y1 - y0) * r(), rad = size * (0.1 + 0.28 * r()), k = r() < 0.5 ? 0.86 : 1.14;
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, tone(color, k, 0.6));
    gr.addColorStop(0.7, tone(color, k, 0.3));
    gr.addColorStop(1, tone(color, k, 0));
    g.fillStyle = gr;
    g.fill(path);
  }
  if (edge > 0) {
    g.save();
    g.clip(path);
    g.strokeStyle = tone(color, 0.8, 0.7);
    g.lineWidth = edge * 2;
    g.lineJoin = 'round';
    g.stroke(path);
    g.restore();
  }
};
// a scalloped outline round a clump of leaves (centre, radius): the pen going round it in small bumps, its lower side
// left open (light falls on the top; the shade below is the wash's)
const scallops = (p, cx, cy, cr, r) => {
  const n = 11, a0 = Math.PI * 0.95, a1 = Math.PI * 2.05;
  p.moveTo(cx + Math.cos(a0) * cr, cy + Math.sin(a0) * cr * 0.85);
  for (let i = 1; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n, rr = cr * (0.94 + 0.1 * r()), am = a - (a1 - a0) / n / 2, bulge = cr * (1.12 + 0.08 * r());
    p.quadraticCurveTo(cx + Math.cos(am) * bulge, cy + Math.sin(am) * bulge * 0.85, cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.85);
  }
};
// foliage: round clumps of small leaf dabs about the centres [x, y, radius] — a solid dark underlayer, then the greens
// from the shade (lower) to the light (higher), each a single path; with ink (a pen width, metres) the pen goes round
// the clumps' tops and hatches their shaded undersides
const foliage = (g, centres, greens, r, dab, ink = 0) => {
  const under = new Path2D();
  for (const [cx, cy, cr] of centres) {
    under.moveTo(cx + cr * 0.6, cy + cr * 0.12);
    under.ellipse(cx, cy + cr * 0.12, cr * 0.6, cr * 0.5, 0, 0, Math.PI * 2);
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
  if (!(ink > 0)) return;
  const line = new Path2D();
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [cx, cy, cr] of centres) {
    scallops(line, cx, cy, cr, r);
    x0 = Math.min(x0, cx - cr); y0 = Math.min(y0, cy - cr); x1 = Math.max(x1, cx + cr); y1 = Math.max(y1, cy + cr);
  }
  pen(g, line, ink, 0.6);
  // (the shade under the clumps: hatched, only in their lower halves)
  const shade = new Path2D();
  for (const [cx, cy, cr] of centres) {
    shade.moveTo(cx + cr * 0.7, cy + cr * 0.25);
    shade.ellipse(cx, cy + cr * 0.25, cr * 0.7, cr * 0.42, 0, 0, Math.PI);
  }
  hatch(g, shade, [x0, y0, x1, y1], ink * 4.5, 0.9, ink * 0.7, 0.4);
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
  for (let i = 0; i < n; i++) puff(x + (r() - 0.5) * w, y + w * 0.06 + r() * w * 0.04, w * (0.12 + 0.08 * r()), '200,198,210', 0.5);
  for (let i = 0; i < n + 2; i++) {
    const u = (i + 0.5) / (n + 2) - 0.5;
    puff(x + u * w * 0.9 + (r() - 0.5) * w * 0.1, y - (0.25 - u * u) * w * 0.35 + r() * w * 0.03, w * (0.1 + 0.1 * r()), '253,251,246', 0.92);
  }
};
// grass: short pen strokes leaning a little, in clusters about the points [x, y] (a plane's metres; `len` long)
const grass = (g, spots, len, r, width, alpha = 0.45) => {
  const p = new Path2D();
  for (const [x, y, n] of spots) {
    for (let i = 0; i < n; i++) {
      const sx = x + (r() - 0.5) * len * 6, sy = y + (r() - 0.5) * len * 3, l = len * (0.6 + 0.8 * r()), lean = (r() - 0.5) * 0.6;
      p.moveTo(sx, sy);
      p.lineTo(sx + lean * l, sy - l);
    }
  }
  g.lineCap = 'round';
  g.strokeStyle = tone(INK, 1, alpha);
  g.lineWidth = width;
  g.stroke(p);
};
return { INK, hex, tone, rand, px, pen, hatch, wash, foliage, ridge, ridgeLine, cloud, grass };
