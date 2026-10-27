// The bed's long side toward us: the sheet hanging over the walnut side rail and, over the foot half, the
// eiderdown's checked edge hanging lower; the turned legs at the ends, a little dark under it.
const W = 1.0;
g.fillStyle = '#3a2e26';
g.fillRect(-W + 0.06, -0.14, W * 2 - 0.12, 0.14);
g.fillStyle = '#4a3226';
g.fillRect(-W, -0.4, W * 2, 0.16);
for (const x of [-W, W - 0.07]) {
  g.fillRect(x, -0.4, 0.07, 0.4);
  g.beginPath();
  g.ellipse(x + 0.035, -0.08, 0.045, 0.025, 0, 0, Math.PI * 2);
  g.fill();
}
// the sheet hanging over the rail, the eiderdown's edge over the foot half
g.fillStyle = '#e6e0d4';
g.beginPath();
g.moveTo(-W + 0.07, -0.53);
g.lineTo(0.08, -0.53);
g.lineTo(0.08, -0.2);
for (let x = 0.08; x > -W + 0.07; x -= 0.18) g.quadraticCurveTo(x - 0.09, -0.16, x - 0.18, -0.21);
g.closePath();
g.fill();
g.fillStyle = '#b4413c';
g.beginPath();
g.moveTo(0.08, -0.56);
g.lineTo(W - 0.07, -0.56);
g.lineTo(W - 0.07, -0.16);
for (let x = W - 0.07; x > 0.08; x -= 0.15) g.quadraticCurveTo(x - 0.075, -0.11, x - 0.15, -0.17);
g.closePath();
g.fill();
g.fillStyle = '#e9ddd0';
for (let x = 0.12; x < W - 0.12; x += 0.14) {
  for (const y of [-0.5, -0.36]) g.fillRect(x + (y < -0.4 ? 0 : 0.07), y, 0.07, 0.07);
}
