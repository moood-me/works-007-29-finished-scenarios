// On the table's far corner: a steel thermos of coffee and a stack of paper cups (metres from its foot).
g.fillStyle = '#7d858c';
g.beginPath();
g.roundRect(-0.06, -0.32, 0.12, 0.32, 0.02);
g.fill();
g.fillStyle = '#2c2e30';
g.fillRect(-0.05, -0.37, 0.1, 0.06);
g.fillStyle = 'rgba(255,255,255,0.25)';
g.fillRect(-0.035, -0.3, 0.015, 0.27);
g.fillStyle = '#ece9e1';
g.beginPath();
g.moveTo(0.1, 0);
g.lineTo(0.22, 0);
g.lineTo(0.235, -0.2);
g.lineTo(0.085, -0.2);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(0,0,0,0.12)';
g.lineWidth = 0.004;
for (let y = -0.17; y < 0; y += 0.03) {
  g.beginPath();
  g.moveTo(0.09, y);
  g.lineTo(0.23, y);
  g.stroke();
}
