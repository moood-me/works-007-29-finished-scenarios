// «The Mezzanine» — what its paintings share, in the world's look (the embankment's): a wash of colour and a fine
// sepia ink line round every shape, all in daylight colours (the scene's light is the engine's: notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// (the same hand as the embankment's and Grandmother's lib.js — keep them alike)
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

// Old wallpaper of the attic, faded blue with a small white trellis, on a rectangle x0…x1, -top…0
function paper(g, x0, x1, top, seed) {
  const w = x1 - x0;
  g.fillStyle = '#b9c3c6';
  g.fillRect(x0, -top, w, top);
  wash(g, x0, -top, w, top, [185, 195, 198], seed, 0.4, 0.7, 0.12);
  g.beginPath();
  for (let x = x0 + 0.1; x < x1; x += 0.2) { g.moveTo(x, -top); g.lineTo(x, 0); }
  for (let y = -top + 0.1; y < 0; y += 0.2) { g.moveTo(x0, y); g.lineTo(x1, y); }
  g.strokeStyle = 'rgba(244,244,236,0.35)';
  g.lineWidth = 0.008;
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

// Where each can be in the mezzanine (the keys <id>_spot; script.js lays them out): `at` [across, distance], the turn,
// what they do (a looped motion), the seat (`on`) for a seated one
const STAND = { motion: 'stand', loop: true }, SEATED = { motion: 'seated', loop: true };
const SPOTS = {
  dreamer: {
    table: { at: [-1.2, 2.75], turn: 115, does: SEATED, on: [-1.2, 2.75, 0.45] },
    stand: { at: [-0.9, 2.2], turn: 150, does: STAND },
  },
  nastya: {
    table: { at: [0.05, 2.75], turn: 235, does: SEATED, on: [0.05, 2.75, 0.45] },
    window: { at: [0.75, 3.75], turn: 150, does: STAND },
    hatch: { at: [1.15, 1.45], turn: 210, does: STAND },
  },
};

return { INK, wash, hatch, rgbOf, paper, cut, box, SPOTS };
