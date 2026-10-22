// What the parlour's paintings share: its walls (a warm gold paper with a small darker sprig, a frieze under the
// cornice, a dark green panelled dado, a rail and a skirting), its panelled cream doors, and where the tree's candles
// stand (the tree paints their sticks, tree_candles their flames). Metres, y down, from the foot of a wall.
const PAPER = '#c9b07a';
const SPRIG = 'rgba(150,118,70,0.5)';
const DADO = '#3f5547';
const PANEL = '#4b6454';
const RAIL = '#5c4632';
// a sprig: a bud and two leaves under it ([dx, dy, rx, ry, angle])
const SPRIG_LEAVES = [[0, 0, 0.022, 0.04, 0], [-0.03, 0.035, 0.018, 0.012, 0.6], [0.03, 0.035, 0.018, 0.012, -0.6]];

// a wall x0…x1 wide and `top` metres high (3: the parlour's; its foot at 0)
function wall(g, e, x0, x1, top = 3) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = PAPER;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  // the paper's pattern: a small sprig in a half-drop, faint stripes between
  g.fillStyle = 'rgba(184,158,104,0.45)';
  for (let x = Math.floor(x0 / 0.24) * 0.24; x < x1; x += 0.24) g.fillRect(x + 0.11, -top, 0.02, top - 0.95);
  g.fillStyle = SPRIG;
  for (let i = 0, x = Math.floor(x0 / 0.24) * 0.24; x < x1 + 0.24; x += 0.24, i++) {
    for (let y = -top + 0.3 + (i % 2) * 0.16; y < -1.05; y += 0.32) {
      for (const [dx, dy, rx, ry, a] of SPRIG_LEAVES) {
        g.beginPath();
        g.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        g.fill();
      }
    }
  }
  // the cornice and the frieze under it
  g.fillStyle = '#e8dfcb';
  g.fillRect(x0, -top - 0.02, w, 0.12);
  g.fillStyle = '#d4c8ae';
  g.fillRect(x0, -top + 0.1, w, 0.03);
  g.fillStyle = '#8f7247';
  g.fillRect(x0, -top + 0.13, w, 0.16);
  g.fillStyle = 'rgba(214,190,130,0.55)';
  for (let x = Math.floor(x0 / 0.16) * 0.16; x < x1; x += 0.16) {
    g.beginPath();
    g.arc(x, -top + 0.21, 0.035, 0, Math.PI * 2);
    g.fill();
  }
  // the dado: dark green panels under a wooden rail, the skirting
  g.fillStyle = DADO;
  g.fillRect(x0, -0.95, w, 0.95);
  g.strokeStyle = PANEL;
  g.lineWidth = 0.025;
  for (let x = Math.floor(x0 / 0.7) * 0.7; x < x1; x += 0.7) g.strokeRect(x + 0.08, -0.8, 0.54, 0.6);
  g.fillStyle = RAIL;
  g.fillRect(x0, -0.98, w, 0.06);
  g.fillStyle = '#7a5f45';
  g.fillRect(x0, -0.98, w, 0.015);
  g.fillStyle = '#33281f';
  g.fillRect(x0, -0.14, w, 0.16);
  g.restore();
}

// a panelled door, its middle at x, w wide and h high, painted cream; a brass knob on the side `knob` (−1 left, 1 right)
function door(g, x, w, h, knob) {
  g.fillStyle = '#d9cdb5';
  g.fillRect(x - w / 2 - 0.08, -h - 0.08, w + 0.16, h + 0.08);
  g.fillStyle = '#ebe3d2';
  g.fillRect(x - w / 2, -h, w, h);
  g.strokeStyle = '#cfc2a6';
  g.lineWidth = 0.02;
  const pw = w / 2 - 0.12;
  for (const side of [-1, 1]) {
    const px = x + side * (w / 4) - pw / 2;
    g.strokeRect(px, -h + 0.12, pw, h * 0.42);
    g.strokeRect(px, -h * 0.48 + 0.04, pw, h * 0.42);
  }
  g.fillStyle = '#b8924a';
  g.beginPath();
  g.arc(x + knob * (w / 2 - 0.08), -1.0, 0.03, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#6d5a3a';
  g.fillRect(x + knob * (w / 2 - 0.08) - 0.008, -0.94, 0.016, 0.04);
}

// the tree's candles: where each stands on the tree's painting (its foot at 0, metres)
const candles = [
  [-0.12, -2.0], [0.16, -1.82], [-0.3, -1.62], [0.32, -1.45], [-0.05, -1.4], [-0.45, -1.15],
  [0.2, -1.08], [0.52, -0.92], [-0.22, -0.86], [-0.6, -0.68], [0.05, -0.62], [0.42, -0.55],
];

return { wall, door, candles };
