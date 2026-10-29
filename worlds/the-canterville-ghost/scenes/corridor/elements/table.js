// The little oak table beside the armour, from before (0.75 m high): a top with a moulded edge, a drawer, turned legs.
// When `bottle` is "table" the bottle of oil Mr Otis left stands on it (point `top`).
g.fillStyle = '#3a2618';
for (const x of [-0.26, 0.22]) g.fillRect(x, -0.62, 0.04, 0.62);
g.fillStyle = '#4a3222';
for (const x of [-0.24, 0.24]) {
  g.beginPath();
  g.ellipse(x, -0.3, 0.035, 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#4e3524';
g.fillRect(-0.3, -0.74, 0.6, 0.13);
g.strokeStyle = '#2e1f15';
g.lineWidth = 0.012;
g.strokeRect(-0.16, -0.72, 0.32, 0.09);
g.fillStyle = '#8a6a34';
g.beginPath();
g.arc(0, -0.675, 0.012, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5d4029';
g.fillRect(-0.33, -0.77, 0.66, 0.04);
if (e.state.bottle === 'table') {
  g.fillStyle = '#5c3414';
  g.fillRect(0.06, -0.97, 0.07, 0.2);
  g.fillRect(0.08, -1.04, 0.03, 0.08);
  g.fillStyle = '#d8cc9e';
  g.fillRect(0.06, -0.92, 0.07, 0.07);
  g.fillStyle = '#9e7a4c';
  g.fillRect(0.078, -1.07, 0.034, 0.03);
}
e.at(0.05, -0.8, 'top');
