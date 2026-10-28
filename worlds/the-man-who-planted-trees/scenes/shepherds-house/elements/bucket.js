// A wooden pail by the door, heaped with acorns soaking for tomorrow
g.fillStyle = "#7a5a3c";
g.beginPath();
g.moveTo(-0.2, -0.36);
g.lineTo(0.2, -0.36);
g.lineTo(0.16, 0);
g.lineTo(-0.16, 0);
g.closePath();
g.fill();
g.fillStyle = "#5a4130";
g.fillRect(-0.2, -0.3, 0.4, 0.035);
g.fillRect(-0.18, -0.09, 0.36, 0.035);
g.fillStyle = "#8a5a2c";
for (let i = 0; i < 9; i++) {
  g.beginPath();
  g.ellipse(-0.15 + i * 0.037, -0.38 - Math.sin(i * 0.4) * 0.03, 0.025, 0.02, 0, 0, Math.PI * 2);
  g.fill();
}
