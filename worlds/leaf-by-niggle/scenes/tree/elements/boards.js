// The bundle of boards Parish brought ("they gave us them, for the house"), lying on the grass (1.9 m long, seen
// side on, about its middle): grey-green planks stacked, their ends a little uneven, tied twice with twine.
const planks = [[-0.92, 0.88, -0.1, '#9a9a84'], [-0.88, 0.94, -0.19, '#8e917c'], [-0.95, 0.9, -0.28, '#a3a28a']];
for (const [x0, x1, y, c] of planks) {
  g.fillStyle = c;
  g.fillRect(x0, y, x1 - x0, 0.09);
  g.fillStyle = 'rgba(60,58,48,0.35)';
  g.fillRect(x0, y + 0.08, x1 - x0, 0.012);
  // the grain
  g.strokeStyle = 'rgba(80,80,66,0.25)';
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(x0 + 0.05, y + 0.035);
  g.bezierCurveTo(x0 + 0.6, y + 0.025, x1 - 0.6, y + 0.055, x1 - 0.05, y + 0.04);
  g.stroke();
}
// the ends, cut
g.fillStyle = '#b8b39a';
for (const [x0, , y] of planks) g.fillRect(x0, y, 0.03, 0.09);
// the twine round them
g.strokeStyle = '#8c7650';
g.lineWidth = 0.014;
for (const x of [-0.5, 0.48]) {
  g.beginPath();
  g.moveTo(x, -0.3);
  g.lineTo(x + 0.02, 0);
  g.stroke();
}
