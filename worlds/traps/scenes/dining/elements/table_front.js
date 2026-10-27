// The table's near side: the white cloth hanging nearly to the floor in heavy folds, its hem embroidered, the turned
// walnut legs' feet showing under it.
const W = 1.9;
g.fillStyle = '#3a271d';
for (const x of [-1.7, 1.7]) {
  g.beginPath();
  g.ellipse(x, -0.06, 0.05, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#efe8da';
g.beginPath();
g.moveTo(-W, -0.79);
g.lineTo(W, -0.79);
g.lineTo(W, -0.2);
for (let x = W; x > -W; x -= 0.23) g.quadraticCurveTo(x - 0.115, -0.15, x - 0.23, -0.2);
g.closePath();
g.fill();
g.strokeStyle = '#d6cbb5';
g.lineWidth = 0.014;
g.beginPath();
for (let x = -W + 0.12; x < W; x += 0.23) {
  g.moveTo(x, -0.75);
  g.quadraticCurveTo(x + 0.025, -0.45, x + 0.005, -0.2);
}
g.stroke();
g.strokeStyle = '#cdbf9e';
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(-W, -0.27);
g.lineTo(W, -0.27);
g.moveTo(-W, -0.3);
g.lineTo(W, -0.3);
g.stroke();
