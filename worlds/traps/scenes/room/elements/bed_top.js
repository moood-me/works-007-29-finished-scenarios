// The bed from above: a white sheet over the mattress, the pillow at its head (the left), the red-checked eiderdown
// thrown back toward its foot, the sheet creased at the front edge where Traps has sat down on it.
const W = 1.0;
const D = 0.45;
g.fillStyle = '#ece6da';
g.fillRect(-W, -D, W * 2, D * 2);
// the pillow
g.fillStyle = '#f6f2ea';
g.beginPath();
g.roundRect(-W + 0.06, -D + 0.07, 0.42, D * 2 - 0.14, 0.08);
g.fill();
g.strokeStyle = '#d8d0c0';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-W + 0.27, -D + 0.12);
g.quadraticCurveTo(-W + 0.22, 0, -W + 0.27, D - 0.12);
g.stroke();
// the eiderdown thrown back over the foot half, its checks and its fat roll
g.save();
g.beginPath();
g.moveTo(0.05, -D);
g.quadraticCurveTo(-0.08, 0, 0.1, D);
g.lineTo(W, D);
g.lineTo(W, -D);
g.closePath();
g.clip();
g.fillStyle = '#b4413c';
g.fillRect(-0.2, -D, W + 0.2, D * 2);
g.fillStyle = '#e9ddd0';
for (let x = -0.2; x < W; x += 0.14) {
  for (let y = -D; y < D; y += 0.14) {
    if ((Math.round(x / 0.14) + Math.round(y / 0.14)) % 2) g.fillRect(x, y, 0.07, 0.07);
  }
}
g.restore();
g.strokeStyle = '#8e2f2c';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(0.05, -D);
g.quadraticCurveTo(-0.08, 0, 0.1, D);
g.stroke();
// the creases where he sits
g.strokeStyle = '#d4ccbc';
g.lineWidth = 0.008;
g.beginPath();
for (const [x, a] of [[-0.45, -0.5], [-0.3, -0.2], [-0.12, 0.3], [0.0, 0.6]]) {
  g.moveTo(x, D);
  g.lineTo(x + Math.sin(a) * 0.25, D - 0.3);
}
g.stroke();
