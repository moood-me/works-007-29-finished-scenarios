// «Grandmother's Room» — what its paintings share, in the world's look (the embankment's): a wash of colour and a fine
// sepia ink line round every shape, all in daylight colours (the scene's light is the engine's: notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// (the same hand as the embankment's lib.js — keep the two alike)
// The lithograph's hand, shared by every painting: a watercolour wash is never even — the pigment settles in soft
// blotches, darker and lighter, and pools a little at the foot of a wash; the shade is drawn as hatching, fine
// parallel strokes of the sepia ink. `wash` lays such blotches over a rectangle (x, y its top-left, w × h; `rgb` the
// colour's three numbers; about one blotch to `per` square metres, each up to `size` across; `pooled` — how dark the
// pigment gathers at its foot), `hatch` strokes a
// rectangle with lines `step` apart, leaning right, `alpha` strong. Both kept inside their rectangle (a clip).
function wash(g, x, y, w, h, rgb, seed, per = 10, size = 3, pooled = 0.16) {
  const n = Math.max(4, Math.round((w * h) / per)), [r, gr, b] = rgb;
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  for (let i = 0; i < n; i++) {
    const cx = x + w * hash(i, seed * 13 + 1), cy = y + h * hash(i, seed * 13 + 2);
    const rx = size * (0.3 + 0.7 * hash(i, seed * 13 + 3)), ry = rx * (0.45 + 0.5 * hash(i, seed * 13 + 4));
    const dark = hash(i, seed * 13 + 5) > 0.42, a = 0.05 + 0.08 * hash(i, seed * 13 + 6);
    const k = dark ? 0.78 : 1.14, c = `${Math.min(255, Math.round(r * k))},${Math.min(255, Math.round(gr * k))},${Math.min(255, Math.round(b * k))}`;
    g.save();
    g.translate(cx, cy);
    g.scale(rx, ry);
    const blot = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    blot.addColorStop(0, `rgba(${c},${a})`);
    blot.addColorStop(0.7, `rgba(${c},${a * 0.85})`);
    blot.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = blot;
    g.fillRect(-1, -1, 2, 2);
    g.restore();
  }
  // (the pigment pooled at the wash's foot)
  const dk = `${Math.round(r * 0.7)},${Math.round(gr * 0.7)},${Math.round(b * 0.7)}`;
  const pool = g.createLinearGradient(0, y + h * 0.8, 0, y + h);
  pool.addColorStop(0, `rgba(${dk},0)`);
  pool.addColorStop(1, `rgba(${dk},${pooled})`);
  g.fillStyle = pool;
  g.fillRect(x, y + h * 0.8, w, h * 0.2);
  g.restore();
}
function hatch(g, x, y, w, h, step, alpha, line) {
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  g.beginPath();
  for (let t = x - h; t < x + w; t += step) {
    g.moveTo(t, y + h);
    g.lineTo(t + h, y);
  }
  g.strokeStyle = `rgba(74,63,58,${alpha})`;
  g.lineWidth = line;
  g.stroke();
  g.restore();
}
// (a colour '#rrggbb' as its three numbers)
const rgbOf = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));

// Old wallpaper on a wall x0…x1 (metres), from the ceiling at -top down to the floor at 0: a warm cream ground,
// paler stripes, small four-petalled flowers with two leaves between them (one path each), a frieze under the ceiling, a brown skirting
function wallpaper(g, x0, x1, top, seed) {
  const w = x1 - x0;
  g.fillStyle = '#dcc9ad';
  g.fillRect(x0, -top, w, top);
  // (the wash uneven, as the paper took it: small blotches, a room's scale)
  wash(g, x0, -top, w, top, [220, 201, 173], seed, 0.5, 0.75, 0.1);
  g.fillStyle = 'rgba(250,242,226,0.45)';
  for (let x = x0 + 0.04; x < x1; x += 0.34) g.fillRect(x, -top, 0.1, top);
  g.beginPath();
  let row = 0;
  for (let y = -top + 0.42; y < -0.25; y += 0.24, row++) {
    for (let x = x0 + 0.26; x < x1; x += 0.34) {
      const jx = (hash(row * 97 + Math.round(x * 10), seed) - 0.5) * 0.02;
      for (const [dx, dy] of [[0, -0.016], [0.015, 0], [0, 0.016], [-0.015, 0]]) {
        g.moveTo(x + jx + dx + 0.011, y + dy);
        g.arc(x + jx + dx, y + dy, 0.011, 0, Math.PI * 2);
      }
    }
  }
  g.fillStyle = 'rgba(160,104,96,0.5)';
  g.fill();
  g.beginPath();
  row = 0;
  for (let y = -top + 0.42; y < -0.25; y += 0.24, row++) {
    for (let x = x0 + 0.26; x < x1; x += 0.34) {
      g.moveTo(x - 0.02, y + 0.05);
      g.quadraticCurveTo(x - 0.03, y + 0.02, x - 0.01, y + 0.02);
      g.moveTo(x + 0.02, y + 0.05);
      g.quadraticCurveTo(x + 0.03, y + 0.02, x + 0.01, y + 0.02);
    }
  }
  g.strokeStyle = 'rgba(112,128,96,0.6)';
  g.lineWidth = 0.012;
  g.stroke();
  // the frieze and the skirting; the ink's hatching in the shade under the frieze and over the skirting
  g.fillStyle = '#c7ad8c';
  g.fillRect(x0, -top, w, 0.16);
  g.fillStyle = '#7d5d45';
  g.fillRect(x0, -0.14, w, 0.14);
  hatch(g, x0, -top + 0.16, w, 0.1, 0.03, 0.22, 0.004);
  hatch(g, x0, -0.3, w, 0.16, 0.03, 0.16, 0.004);
  g.beginPath();
  g.moveTo(x0, -top + 0.16);
  g.lineTo(x1, -top + 0.16);
  g.moveTo(x0, -0.14);
  g.lineTo(x1, -0.14);
  g.strokeStyle = INK;
  g.lineWidth = 0.01;
  g.stroke();
}

// A cut through a painting (an opening in a wall): what is painted there is taken away
function cut(g, x, y, w, h) {
  g.save();
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = '#000';
  g.fillRect(x, y, w, h);
  g.restore();
}

// A rectangle filled and outlined in ink
function box(g, x, y, w, h, fill, line = 0.01) {
  g.fillStyle = fill;
  g.fillRect(x, y, w, h);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(x, y, w, h);
}

return { INK, wash, hatch, rgbOf, wallpaper, cut, box };
