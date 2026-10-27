// The floor from above: broad pine boards running from the window wall toward us, waxed, a little worn.
const W = 3.4;
const D = 2.6;
g.fillStyle = '#9a7650';
g.fillRect(-W, -D, W * 2, D * 2);
g.strokeStyle = '#7d5c3c';
g.lineWidth = 0.008;
g.beginPath();
for (let x = -W; x <= W; x += 0.19) {
  g.moveTo(x, -D);
  g.lineTo(x, D);
}
g.stroke();
g.beginPath();
for (let x = -W; x < W; x += 0.19) {
  const y = -D + e.rnd() * D * 2;
  g.moveTo(x, y);
  g.lineTo(x + 0.19, y);
}
g.stroke();
