// What the lake's trees share: a crown of autumn leaf — a solid mass in the palette's darkest tone, its clumps over it
// back to front, each shaded below, its body, the light on its top; the crown's lower part in its own shade (metres:
// x across, y up negative; the crown an oval round cx, cy). Palettes: [mass, [shade, body, lit] low, mid, high].
const PALETTES = {
  oak: ['#6a4426', [['#5a3a22', '#74492a', '#8a5a33'], ['#6c4528', '#8c5a30', '#a8703c'], ['#7e532d', '#a26a36', '#c08546']]],
  birch: ['#8c6a22', [['#7a5c22', '#9a7428', '#b48a30'], ['#94722a', '#b88e34', '#d4a841'], ['#a8842f', '#cfa23d', '#e6bf55']]],
  willow: ['#6f6a2e', [['#615c2a', '#7a7434', '#918a3e'], ['#76702f', '#938b3a', '#ada347'], ['#88812f', '#aaa042', '#c6bb55']]],
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
// a reed: a stalk bending as it rises, a long leaf or two off it, a plume of seed at its top (a reed's own palette:
// straw, and the green still low in it); x0 its foot, h its height
function reed(c, rnd, x0, h, plume) {
  const lean = (rnd() - 0.5) * 0.25 * h;
  c.strokeStyle = rnd() < 0.5 ? '#b49a62' : '#9d8d58';
  c.lineWidth = 0.012 + 0.006 * h;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(x0, 0);
  c.quadraticCurveTo(x0 + lean * 0.2, -h * 0.6, x0 + lean, -h);
  c.stroke();
  for (let k = 0; k < 2; k++) {
    const y = -h * (0.15 + rnd() * 0.4);
    const side = rnd() < 0.5 ? -1 : 1;
    const len = h * (0.25 + rnd() * 0.25);
    c.fillStyle = rnd() < 0.5 ? '#a99556' : '#8f8a4c';
    c.beginPath();
    c.moveTo(x0 + lean * (-y / h) * 0.6, y);
    c.quadraticCurveTo(x0 + side * len * 0.5, y - len * 0.5, x0 + side * len * 0.8, y - len * 0.2);
    c.quadraticCurveTo(x0 + side * len * 0.45, y - len * 0.3, x0 + lean * (-y / h) * 0.6, y + 0.03);
    c.fill();
  }
  if (plume) {
    c.fillStyle = rnd() < 0.5 ? '#8a6c4c' : '#9c7f5a';
    c.beginPath();
    c.ellipse(x0 + lean * 1.05, -h - 0.08 * h, 0.035 * h, 0.1 * h, lean * 0.3, 0, Math.PI * 2);
    c.fill();
  }
}
return { crown, reed };
