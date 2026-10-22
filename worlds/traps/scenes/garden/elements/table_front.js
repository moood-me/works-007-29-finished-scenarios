// The table's near side: the cloth hanging over its edge in soft folds, the scalloped hem, and below it the table's
// legs on the gravel.
g.fillStyle = '#5a4535';
for (const x of [-1.12, 1.12]) g.fillRect(x - 0.04, -0.5, 0.08, 0.5);
g.fillStyle = '#efe9dc';
g.beginPath();
g.moveTo(-1.3, -0.79);
g.lineTo(1.3, -0.79);
g.lineTo(1.3, -0.47);
for (let x = 1.3; x >= -1.3; x -= 0.1) g.quadraticCurveTo(x - 0.05, -0.43, x - 0.1, -0.47);
g.closePath();
g.fill();
g.strokeStyle = '#d8cfbe';
g.lineWidth = 0.012;
g.beginPath();
for (let x = -1.15; x < 1.2; x += 0.23) {
  g.moveTo(x, -0.77);
  g.quadraticCurveTo(x + 0.02, -0.62, x - 0.01, -0.48);
}
g.stroke();
g.strokeStyle = '#c8bca6';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-1.3, -0.52);
g.lineTo(1.3, -0.52);
g.stroke();
