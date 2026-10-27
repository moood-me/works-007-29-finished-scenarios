// The street front, from its foot (metres, across from the start's line of sight; the shop's window and door cut
// through it): the shop between two houses — its front painted a deep slate-green with ivory mouldings, a plain
// fascia with a small gilt sun on it, the stall riser under the window; above it three storeys of cream stucco with
// tall sash windows; to the left an ochre house with a green door, to the right a stone house with a shop whose
// blind is still down so early.
const SLATE = '#56686b';
const SLATE_D = '#46575a';
const IVORY = '#eee5d2';
const holes = c => {
  c.rect(-2.7, -2.6, 4.0, 2.15);
  c.rect(1.7, -2.4, 0.9, 2.42);
};
g.save();
g.beginPath();
g.rect(-10, -12.4, 20, 12.45);
holes(g);
g.clip('evenodd');
// the houses above and either side: stucco, ochre plaster, stone
g.fillStyle = '#e8dbc3';
g.fillRect(-3.4, -12.4, 6.7, 12.45);
g.fillStyle = '#dcc49c';
g.fillRect(-10, -11.2, 6.6, 11.25);
g.fillStyle = '#cfc7b8';
g.fillRect(3.3, -10.6, 6.7, 10.65);
// joints between the houses
g.fillStyle = '#bfae92';
g.fillRect(-3.45, -12.4, 0.1, 12.45);
g.fillRect(3.25, -12.4, 0.1, 12.45);
// string courses and cornices
g.fillStyle = '#f2e9d8';
for (const y of [-3.75, -7.0, -10.1]) g.fillRect(-3.35, y, 6.6, 0.16);
g.fillRect(-3.6, -12.4, 7.1, 0.3);
g.fillStyle = '#e6d2ae';
g.fillRect(-10, -11.2, 6.55, 0.24);
g.fillStyle = '#ddd6c9';
g.fillRect(3.35, -10.6, 6.65, 0.26);
// sash windows: dark glass in ivory frames, a sill under each
const sash = (x, y, w, h) => {
  g.fillStyle = '#f3ecdf';
  g.fillRect(x - 0.08, y - 0.08, w + 0.16, h + 0.16);
  g.fillStyle = '#7a8a93';
  g.fillRect(x, y, w, h);
  g.fillStyle = '#93a3ab';
  g.fillRect(x, y, w, h * 0.12);
  g.fillStyle = '#f3ecdf';
  g.fillRect(x, y + h / 2 - 0.03, w, 0.06);
  g.fillRect(x + w / 2 - 0.025, y, 0.05, h);
  g.fillStyle = '#e0d5c2';
  g.fillRect(x - 0.14, y + h + 0.08, w + 0.28, 0.1);
};
for (const y of [-6.4, -9.5]) for (const x of [-2.6, -0.5, 1.6]) sash(x, y, 0.9, 1.75);
for (const y of [-6.1, -9.2]) for (const x of [-8.6, -6.6, -4.7]) sash(x, y, 0.85, 1.6);
for (const y of [-6.2, -9.1]) for (const x of [4.0, 6.1, 8.1]) sash(x, y, 0.9, 1.6);
// the ochre house: its green door, a step, a fanlight; a small window beside it
g.fillStyle = '#efe2c6';
g.fillRect(-5.75, -2.65, 1.3, 2.67);
g.fillStyle = '#3f5a4a';
g.fillRect(-5.6, -2.3, 1.0, 2.32);
g.fillStyle = '#4b6957';
g.fillRect(-5.5, -2.2, 0.36, 0.95);
g.fillRect(-5.06, -2.2, 0.36, 0.95);
g.fillRect(-5.5, -1.1, 0.36, 0.95);
g.fillRect(-5.06, -1.1, 0.36, 0.95);
g.fillStyle = '#c9a85a';
g.beginPath();
g.arc(-4.78, -1.15, 0.035, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8c9aa1';
g.fillRect(-5.6, -2.6, 1.0, 0.24);
sash(-8.4, -2.4, 1.1, 1.5);
// the stone house's shop: a dark frame, its blind down, a step
g.fillStyle = '#4a4f57';
g.fillRect(4.1, -3.05, 4.6, 3.07);
g.fillStyle = '#8b8577';
g.fillRect(4.3, -2.7, 4.2, 2.1);
g.fillStyle = '#9a9485';
for (let y = -2.66; y < -0.6; y += 0.14) g.fillRect(4.3, y, 4.2, 0.07);
g.fillStyle = '#3c4148';
g.fillRect(4.1, -0.6, 4.6, 0.62);
g.fillStyle = '#5d636b';
g.fillRect(4.1, -3.05, 4.6, 0.3);
// the shop front: pilasters, fascia, the stall riser, the post between window and door
g.fillStyle = SLATE;
g.fillRect(-3.15, -3.45, 6.3, 3.47);
g.fillStyle = SLATE_D;
g.fillRect(-3.15, -3.45, 6.3, 0.08);
g.fillRect(-3.15, -0.06, 6.3, 0.08);
// the fascia: a board with an ivory moulding round it, a small gilt sun in its middle
g.fillStyle = IVORY;
g.fillRect(-2.95, -3.3, 5.9, 0.05);
g.fillRect(-2.95, -2.82, 5.9, 0.05);
g.fillRect(-2.95, -3.3, 0.05, 0.53);
g.fillRect(2.9, -3.3, 0.05, 0.53);
g.fillStyle = '#d6b25f';
g.beginPath();
g.arc(-0.7, -3.04, 0.11, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#d6b25f';
g.lineWidth = 0.025;
g.beginPath();
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2;
  g.moveTo(-0.7 + Math.cos(a) * 0.15, -3.04 + Math.sin(a) * 0.15);
  g.lineTo(-0.7 + Math.cos(a) * 0.21, -3.04 + Math.sin(a) * 0.21);
}
g.stroke();
// pilasters' ivory edges and capitals
g.fillStyle = IVORY;
g.fillRect(-3.15, -2.78, 0.07, 2.78);
g.fillRect(3.08, -2.78, 0.07, 2.78);
g.fillRect(-3.2, -2.8, 0.42, 0.08);
g.fillRect(2.78, -2.8, 0.42, 0.08);
// the stall riser: two sunk panels with ivory beads
g.strokeStyle = IVORY;
g.lineWidth = 0.025;
g.strokeRect(-2.6, -0.38, 1.9, 0.28);
g.strokeRect(-0.6, -0.38, 1.8, 0.28);
g.fillStyle = '#e3d8c3';
g.fillRect(-2.78, -0.47, 4.16, 0.05);
// the door's transom and the threshold
g.fillStyle = '#c8c3b4';
g.fillRect(1.7, -2.62, 0.9, 0.18);
g.fillStyle = '#bdb3a0';
g.fillRect(1.62, -0.04, 1.06, 0.06);
g.restore();
e.at(-0.7, -3.04, 'sign');
