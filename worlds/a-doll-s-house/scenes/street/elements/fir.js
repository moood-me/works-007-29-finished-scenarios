// The Christmas tree the porter has carried to the door: a young spruce, its branches tied in with twine for the
// carrying, a dusting of snow on them, leaning a little on its cut trunk; `grip` — where his hand holds it. Metres,
// the foot of the trunk at the pavement.
const DARK = '#2a4632';
const GREEN = '#36583c';
g.save();
g.rotate(-0.12);
g.fillStyle = '#5a4030';
g.fillRect(-0.04, -0.45, 0.08, 0.45);
// tiers of boughs, the lower wider, drawn in and tied
const tiers = [[-0.35, 0.36], [-0.8, 0.32], [-1.22, 0.27], [-1.6, 0.21], [-1.95, 0.14]];
for (const [y, w] of tiers) {
  g.fillStyle = DARK;
  g.beginPath();
  g.moveTo(-w, y);
  g.quadraticCurveTo(-w * 0.55, y - 0.2, 0, y - 0.62);
  g.quadraticCurveTo(w * 0.55, y - 0.2, w, y);
  g.quadraticCurveTo(0, y - 0.08, -w, y);
  g.fill();
  g.fillStyle = GREEN;
  g.beginPath();
  g.moveTo(-w * 0.7, y - 0.06);
  g.quadraticCurveTo(-w * 0.3, y - 0.24, 0, y - 0.55);
  g.quadraticCurveTo(w * 0.1, y - 0.24, w * 0.15, y - 0.08);
  g.closePath();
  g.fill();
  // snow on the bough's upper edge
  g.strokeStyle = 'rgba(240,244,248,0.85)';
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(-w * 0.8, y - 0.06);
  g.quadraticCurveTo(-w * 0.45, y - 0.22, -w * 0.05, y - 0.5);
  g.stroke();
}
g.fillStyle = DARK;
g.beginPath();
g.moveTo(-0.05, -2.3);
g.lineTo(0, -2.55);
g.lineTo(0.05, -2.3);
g.fill();
// the twine round it, wound down
g.strokeStyle = '#c9b48a';
g.lineWidth = 0.018;
for (const y of [-0.55, -1.05, -1.5, -1.9]) {
  g.beginPath();
  g.moveTo(-0.3 * (2.6 + y) / 2.2, y + 0.05);
  g.lineTo(0.3 * (2.6 + y) / 2.2, y - 0.05);
  g.stroke();
}
g.restore();
e.at(-0.12, -1.0, 'grip');
