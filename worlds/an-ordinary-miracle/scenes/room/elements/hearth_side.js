// The stove's right side, facing into the room (from its front at x −0.5 back to the wall at 0.5): whitewash with
// the painted band, a stove bench's edge low along it; above the stove's top, the chimney stack's side (it is
// narrower: its side stands 0.3 m further left — `stack_side`).
const L = e.lib;
g.fillStyle = '#e6dcc8';
g.fillRect(-0.5, -1.6, 1.0, 1.6);
L.dabs(g, 121, -0.5, -1.6, 1.0, 1.6, ['#f2ead9', '#d2c6b0'], 50, 0.08, 0.6, 0.6);
g.fillStyle = '#b9ad98';
g.fillRect(-0.5, -0.16, 1.0, 0.16);
g.fillStyle = '#d9cfb9';
g.fillRect(-0.5, -1.49, 1.0, 0.18);
for (let x = -0.47; x < 0.5; x += 0.2) {
  g.fillStyle = '#3f62a8';
  g.beginPath();
  g.arc(x, -1.4, 0.03, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#b5342e';
  g.beginPath();
  g.arc(x + 0.1, -1.37, 0.016, 0, Math.PI * 2);
  g.fill();
}
