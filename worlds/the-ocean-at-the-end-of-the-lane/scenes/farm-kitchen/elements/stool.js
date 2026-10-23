// The tall wooden stool the boy is sat on by the table: a round seat on four splayed legs, a rung between them.
g.fillStyle = '#7a5a3c';
for (const [a, b] of [[-0.12, -0.19], [0.12, 0.19], [-0.05, -0.08], [0.05, 0.08]]) {
  g.beginPath();
  g.moveTo(a - 0.02, -0.6);
  g.lineTo(a + 0.02, -0.6);
  g.lineTo(b + 0.02, 0);
  g.lineTo(b - 0.02, 0);
  g.closePath();
  g.fill();
}
g.fillRect(-0.16, -0.24, 0.32, 0.025);
g.fillStyle = '#8f6c4a';
g.beginPath();
g.ellipse(0, -0.61, 0.17, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.17, -0.61, 0.34, 0.03);
