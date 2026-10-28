// Two brass candlesticks on the mantel shelf, white candles in them (their flames: `mantel_flames`), a pair of china
// figures between (x along the wall away from the viewer, from the chimneypiece's middle; y up negative)
const L = e.kit.brush, px = L.px(e);
const sticks = new Path2D(), candles = new Path2D();
for (const x of [-0.6, 0.6]) {
  sticks.moveTo(x - 0.06, 0);
  sticks.lineTo(x - 0.02, -0.06);
  sticks.lineTo(x - 0.015, -0.2);
  sticks.lineTo(x - 0.04, -0.22);
  sticks.lineTo(x + 0.04, -0.22);
  sticks.lineTo(x + 0.015, -0.2);
  sticks.lineTo(x + 0.02, -0.06);
  sticks.lineTo(x + 0.06, 0);
  sticks.closePath();
  candles.rect(x - 0.013, -0.38, 0.026, 0.16);
}
g.fillStyle = '#c9a457';
g.fill(sticks);
g.fillStyle = '#f6f0de';
g.fill(candles);
L.pen(g, sticks, 1.0 * px, 0.75);
L.pen(g, candles, 0.9 * px, 0.6);
const figures = new Path2D();
for (const x of [-0.15, 0.15]) {
  figures.moveTo(x + 0.05, -0.08);
  figures.ellipse(x, -0.08, 0.05, 0.08, 0, 0, Math.PI * 2);
  figures.moveTo(x + 0.025, -0.19);
  figures.arc(x, -0.19, 0.025, 0, Math.PI * 2);
}
g.fillStyle = '#eef0ec';
g.fill(figures);
L.pen(g, figures, 0.9 * px, 0.55);
