// A plain three-legged stool (two of them, copies): a round seat seen edge on, splayed legs, a rung.
g.fillStyle = '#7a5e44';
g.fillRect(-0.19, -0.5, 0.38, 0.05);
g.fillStyle = '#6a513b';
g.fillRect(-0.18, -0.455, 0.36, 0.02);
g.fillStyle = '#6a513b';
for (const [a, b] of [[-0.13, -0.19], [0.13, 0.19], [-0.01, 0.0]]) {
  g.beginPath();
  g.moveTo(a - 0.02, -0.45);
  g.lineTo(a + 0.02, -0.45);
  g.lineTo(b + 0.017, 0);
  g.lineTo(b - 0.017, 0);
  g.closePath();
  g.fill();
}
g.fillRect(-0.16, -0.19, 0.32, 0.02);
