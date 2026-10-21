// The Hunter's three-legged stool (its round seat 0.45 m up), his game bag hung on its leg.
g.fillStyle = '#5a3a24';
for (const [x0, x1] of [[-0.14, -0.2], [0.14, 0.2], [0.0, 0.0]]) {
  g.beginPath();
  g.moveTo(x0 - 0.025, -0.42);
  g.lineTo(x0 + 0.025, -0.42);
  g.lineTo(x1 + 0.025, 0);
  g.lineTo(x1 - 0.025, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = '#7a5232';
g.beginPath();
g.ellipse(0, -0.44, 0.2, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.2, -0.46, 0.4, 0.03);
// the game bag: leather, a strap, a net with a fringe
g.fillStyle = '#7a5a34';
g.beginPath();
g.moveTo(0.16, -0.32);
g.lineTo(0.34, -0.3);
g.quadraticCurveTo(0.36, -0.12, 0.27, -0.06);
g.lineTo(0.18, -0.08);
g.closePath();
g.fill();
g.strokeStyle = '#4a3420';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.16, -0.32);
g.lineTo(0.1, -0.42);
g.stroke();
g.strokeStyle = '#c4a46a';
g.lineWidth = 0.004;
for (let i = 0; i < 6; i++) {
  g.beginPath();
  g.moveTo(0.19 + i * 0.025, -0.08);
  g.lineTo(0.19 + i * 0.025, -0.02);
  g.stroke();
}
