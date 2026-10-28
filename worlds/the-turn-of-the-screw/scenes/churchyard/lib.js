// What the church and the churchyard share (metres: x across, y up negative; rnd — the painting's own seeded random).
// The church's walls: coursed rubble of a warm grey limestone, the stone mended in other tones over centuries, damp
// dark at the foot; dressed quoins at the corners.
function rubble(g, rnd, x0, x1, top) {
  g.fillStyle = '#9d9684';
  g.fillRect(x0, top, x1 - x0, 0.3 - top);
  for (let y = -0.32, row = 0; y > top; y -= 0.32, row++) {
    let x = x0 + (row % 2) * 0.25;
    while (x < x1) {
      const w = 0.35 + rnd() * 0.45;
      const t = rnd();
      if (t < 0.45) {
        g.fillStyle = t < 0.2 ? 'rgba(150,140,120,0.55)' : 'rgba(178,170,150,0.5)';
        g.fillRect(x + 0.02, y + 0.02, Math.min(w, x1 - x) - 0.04, 0.28);
      }
      x += w;
    }
  }
  g.strokeStyle = 'rgba(84,78,64,0.3)';
  g.lineWidth = 0.025;
  g.beginPath();
  for (let y = -0.32; y > top; y -= 0.32) {
    g.moveTo(x0, y);
    g.lineTo(x1, y);
  }
  g.stroke();
  // lichen: pale gold and grey-green blots, more near the foot
  for (let i = 0; i < 60; i++) {
    const x = x0 + rnd() * (x1 - x0);
    const y = top * Math.pow(rnd(), 1.6);
    g.fillStyle = rnd() < 0.5 ? 'rgba(196,182,110,0.45)' : 'rgba(150,158,120,0.4)';
    g.beginPath();
    g.ellipse(x, y, 0.1 + rnd() * 0.25, 0.06 + rnd() * 0.12, 0, 0, Math.PI * 2);
    g.fill();
  }
  const damp = g.createLinearGradient(0, -1.1, 0, 0.3);
  damp.addColorStop(0, 'rgba(70,72,58,0)');
  damp.addColorStop(1, 'rgba(70,72,58,0.45)');
  g.fillStyle = damp;
  g.fillRect(x0, -1.1, x1 - x0, 1.4);
}
// quoins up a corner at x (side −1: the blocks run left of it, +1 right), long and short in turn
function quoins(g, x, side, top) {
  g.fillStyle = '#b6af9b';
  for (let y = 0, k = 0; y > top + 0.05; y -= 0.38, k++) {
    const w = k % 2 ? 0.32 : 0.55;
    g.fillRect(side < 0 ? x - w : x, y - 0.36, w, 0.36);
  }
}
// a pointed window of two lights under a hood mould: its dressed stone, the dark leaded glass, the mullion and the
// Y of its tracery (x its middle, bottom its sill, w its width, h to the arch's point)
function window2(g, x, bottom, w, h) {
  const arch = (half, b, top) => {
    g.beginPath();
    g.moveTo(x - half, b);
    g.lineTo(x - half, top + half * 1.1);
    g.quadraticCurveTo(x - half, top + half * 0.15, x, top);
    g.quadraticCurveTo(x + half, top + half * 0.15, x + half, top + half * 1.1);
    g.lineTo(x + half, b);
    g.closePath();
  };
  const top = bottom - h;
  g.fillStyle = '#7d766a';
  arch(w / 2 + 0.2, bottom + 0.06, top - 0.24);
  g.fill();
  g.fillStyle = '#c6bfaa';
  arch(w / 2 + 0.12, bottom + 0.05, top - 0.13);
  g.fill();
  g.fillStyle = '#2e3236';
  arch(w / 2, bottom, top);
  g.fill();
  // the leading: a lattice of small diamond quarries, faint
  g.save();
  arch(w / 2, bottom, top);
  g.clip();
  g.strokeStyle = 'rgba(120,130,136,0.35)';
  g.lineWidth = 0.012;
  g.beginPath();
  for (let d = -h - w; d < h + w; d += 0.16) {
    g.moveTo(x - w, bottom + d - w);
    g.lineTo(x + w, bottom + d + w);
    g.moveTo(x - w, bottom + d + w);
    g.lineTo(x + w, bottom + d - w);
  }
  g.stroke();
  g.restore();
  g.strokeStyle = '#c6bfaa';
  g.lineWidth = 0.09;
  g.lineCap = 'butt';
  g.beginPath();
  g.moveTo(x, bottom);
  g.lineTo(x, top + w * 0.55);
  g.quadraticCurveTo(x - w * 0.12, top + w * 0.25, x - w * 0.42, top + w * 0.22);
  g.moveTo(x, top + w * 0.55);
  g.quadraticCurveTo(x + w * 0.12, top + w * 0.25, x + w * 0.42, top + w * 0.22);
  g.stroke();
  g.fillStyle = '#b7af99';
  g.fillRect(x - w / 2 - 0.16, bottom, w + 0.32, 0.1);
}
// old stone slates seen from above (a roof's plane: x across, y toward its eaves), in courses that narrow toward the
// ridge, lichen and moss on them; x0..x1, y0 the ridge, y1 the eaves
function slates(g, rnd, x0, x1, y0, y1) {
  g.fillStyle = '#7d7468';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  let y = y1;
  let row = 0;
  while (y > y0) {
    const hgt = 0.16 + 0.16 * ((y - y0) / (y1 - y0));
    let x = x0 + (row % 2) * 0.15;
    while (x < x1) {
      const w = 0.25 + rnd() * 0.3;
      const t = rnd();
      g.fillStyle = t < 0.3 ? '#71685d' : t < 0.6 ? '#857b6e' : t < 0.8 ? '#8d8476' : '#786f63';
      g.fillRect(x + 0.015, y - hgt + 0.015, Math.min(w, x1 - x) - 0.03, hgt - 0.02);
      x += w;
    }
    g.fillStyle = 'rgba(52,46,40,0.4)';
    g.fillRect(x0, y - 0.025, x1 - x0, 0.025);
    y -= hgt;
    row++;
  }
  for (let i = 0; i < 240; i++) {
    const x = x0 + rnd() * (x1 - x0);
    const yy = y0 + rnd() * (y1 - y0);
    const t = rnd();
    g.fillStyle = t < 0.45 ? 'rgba(196,178,96,0.55)' : t < 0.75 ? 'rgba(104,112,62,0.55)' : 'rgba(176,176,160,0.45)';
    g.beginPath();
    g.ellipse(x, yy, 0.05 + rnd() * 0.18, 0.04 + rnd() * 0.1, rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#6a6258';
  g.fillRect(x0, y0, x1 - x0, 0.12);
}
// an old headstone's face and lichen over the outline already filled (path: its outline): weathered, lettered once,
// the letters now faint lines; the light edge of its thickness on the right
function weathered(g, rnd, path, w, h) {
  g.save();
  path();
  g.clip();
  for (let i = 0; i < 26; i++) {
    const t = rnd();
    g.fillStyle = t < 0.45 ? 'rgba(196,182,104,0.55)' : t < 0.7 ? 'rgba(112,118,84,0.45)' : 'rgba(70,68,60,0.3)';
    g.beginPath();
    g.ellipse(-w / 2 + rnd() * w, -rnd() * h, 0.02 + rnd() * 0.08, 0.015 + rnd() * 0.05, rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = 'rgba(64,60,52,0.35)';
  g.lineWidth = 0.012;
  g.beginPath();
  for (let k = 0; k < 6; k++) {
    const y = -h * 0.72 + k * 0.075;
    const half = w * (k < 2 ? 0.32 : 0.26) * (0.7 + rnd() * 0.3);
    g.moveTo(-half, y);
    g.lineTo(half, y);
  }
  g.stroke();
  const shade = g.createLinearGradient(0, -h, 0, 0);
  shade.addColorStop(0, 'rgba(60,60,52,0)');
  shade.addColorStop(1, 'rgba(60,60,52,0.35)');
  g.fillStyle = shade;
  g.fillRect(-w, -h, 2 * w, h);
  g.restore();
}
// a crown of leaf — a solid mass in the palette's darkest tone, its clumps over it back to front, each shaded below,
// its body, the light on its top (metres: x across, y up negative; the crown an oval round cx, cy). Palettes: [mass,
// [shade, body, lit] low, mid, high].
const PALETTES = {
  lime: ['#7a6a2a', [['#6e5f27', '#8a7630', '#a08a38'], ['#86722e', '#a88f3a', '#c4a746'], ['#9a8434', '#c2a544', '#dcc058']]],
  elm: ['#6c5a2c', [['#5e4e27', '#776330', '#8c763a'], ['#74602e', '#937a3a', '#ad9246'], ['#866f33', '#a98d42', '#c4a752']]],
  yew: ['#24301f', [['#1f2a1b', '#283622', '#31422a'], ['#25321f', '#2f3f27', '#3a4d2f'], ['#2b3a24', '#36482c', '#435834']]],
};
function crown(c, rnd, kind, cx, cy, rx, ry, n, size) {
  const [mass, tones] = PALETTES[kind];
  c.fillStyle = mass;
  c.beginPath();
  c.ellipse(cx, cy, rx * 0.94, ry * 0.94, 0, 0, Math.PI * 2);
  c.fill();
  for (let i = 0; i < 22; i++) {
    const a = (i / 22) * Math.PI * 2 + rnd() * 0.2;
    c.beginPath();
    c.arc(cx + Math.cos(a) * rx * 0.92, cy + Math.sin(a) * ry * 0.92, size * (1.6 + rnd()), 0, Math.PI * 2);
    c.fill();
  }
  const clumps = [];
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd());
    clumps.push([cx + Math.cos(a) * r * rx, cy + Math.sin(a) * r * ry, size * (0.7 + rnd() * 0.7), rnd(), r]);
  }
  clumps.sort((p, q) => q[4] - p[4] || p[1] - q[1]);
  for (const [x, y, w, t] of clumps) {
    const up = Math.max(0, Math.min(1, (cy + ry - y) / (2 * ry)));
    const [shade, body, lit] = tones[Math.min(2, Math.floor(up * 2.2 + t * 0.8))];
    c.fillStyle = shade;
    c.beginPath();
    c.ellipse(x + 0.05 * w, y + w * 0.35, w * 1.05, w * 0.8, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = body;
    c.beginPath();
    c.ellipse(x, y, w, w * 0.78, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = lit;
    c.beginPath();
    c.ellipse(x - w * 0.1, y - w * 0.3, w * 0.62, w * 0.42, 0, 0, Math.PI * 2);
    c.fill();
  }
}
// the rooks over the elms: where each is painted [x, y] (metres from the flock's middle), how wide it wheels (m), how
// fast (radians a second; − the other way round), its phase
const ROOKS = [
  [-6, -1.5, 4.5, 0.32, 0],
  [3, -3.5, 3.8, -0.36, 1.9],
  [8, -0.8, 5, 0.28, 3.4],
  [-1, -5, 3.2, -0.4, 4.6],
  [5, 2, 4.2, 0.3, 2.5],
];
return { rubble, quoins, window2, slates, weathered, crown, ROOKS };
