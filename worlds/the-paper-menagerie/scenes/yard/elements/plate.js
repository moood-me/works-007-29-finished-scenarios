// The plate of buns left on the bottom step (`plate_step`: 1.3): the white plate, five steamed buns.
if (!e.state.plate_step) return;
g.fillStyle = '#f4f2ec';
g.beginPath();
g.ellipse(0, -0.012, 0.13, 0.022, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f2e8d4';
for (const [x, y] of [[-0.06, -0.035], [0, -0.04], [0.06, -0.035], [-0.03, -0.065], [0.03, -0.065]]) {
  g.beginPath();
  g.ellipse(x, y, 0.034, 0.026, 0, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.05, 'plate');
