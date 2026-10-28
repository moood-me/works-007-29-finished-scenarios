// The chair's front: the seat's edge, two turned front legs, a rung between them.
const wood = '#6e4c33';
g.fillStyle = '#86603f';
g.fillRect(-0.31, -0.45, 0.62, 0.05);
g.fillStyle = wood;
for (const x of [-0.29, 0.25]) {
  g.fillRect(x, -0.42, 0.04, 0.42);
  g.beginPath();
  g.ellipse(x + 0.02, -0.28, 0.03, 0.04, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillRect(-0.28, -0.16, 0.56, 0.025);
