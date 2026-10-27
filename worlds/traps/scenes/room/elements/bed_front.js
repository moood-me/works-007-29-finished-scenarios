// The bed's long side toward us: the sheet and the eiderdown's checked edge hanging over a walnut side rail, its turned
// legs at the ends, darkness under it.
const W = 1.0;
g.fillStyle = '#2e2620';
g.fillRect(-W + 0.06, -0.24, W * 2 - 0.12, 0.24);
g.fillStyle = '#4a3226';
g.fillRect(-W, -0.4, W * 2, 0.16);
g.fillStyle = '#5e4232';
g.fillRect(-W, -0.4, W * 2, 0.03);
for (const x of [-W, W - 0.07]) {
  g.fillStyle = '#4a3226';
  g.fillRect(x, -0.4, 0.07, 0.4);
  g.beginPath();
  g.ellipse(x + 0.035, -0.12, 0.045, 0.025, 0, 0, Math.PI * 2);
  g.fill();
}
// the sheet hanging over the rail, the eiderdown's edge over the foot half
g.fillStyle = '#e6e0d4';
g.beginPath();
g.moveTo(-W, -0.53);
g.lineTo(0.08, -0.53);
g.lineTo(0.08, -0.36);
for (let x = 0.08; x > -W; x -= 0.18) g.quadraticCurveTo(x - 0.09, -0.32, x - 0.18, -0.37);
g.closePath();
g.fill();
g.fillStyle = '#b4413c';
g.beginPath();
g.moveTo(0.08, -0.56);
g.lineTo(W, -0.56);
g.lineTo(W, -0.3);
for (let x = W; x > 0.08; x -= 0.15) g.quadraticCurveTo(x - 0.075, -0.25, x - 0.15, -0.31);
g.closePath();
g.fill();
g.fillStyle = '#e9ddd0';
for (let x = 0.12; x < W - 0.05; x += 0.14) g.fillRect(x, -0.5, 0.07, 0.07);
