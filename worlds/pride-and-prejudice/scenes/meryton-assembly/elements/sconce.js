// A girandole on a pilaster (x along the wall, y up negative from the foot of its backplate at 2.0 m): an oval gilt
// backplate with a small looking-glass in it, two S-curved arms out to the candle cups, two candles (lib: SCONCE).
// Its flames are `sconce_flames`, its light the scene's `sconce_0` … `sconce_6`. A copy on each pilaster that has one
const L = e.kit.brush, W = e.lib, px = L.px(e), r = L.rand(257);
const GILT = '#c9a75e';
const plate = new Path2D();
plate.ellipse(0, -0.3, 0.13, 0.3, 0, 0, Math.PI * 2);
L.wash(g, plate, GILT, [-0.13, -0.6, 0.13, 0], r, 2);
const glass = new Path2D();
glass.ellipse(0, -0.3, 0.08, 0.22, 0, 0, Math.PI * 2);
const gl = g.createLinearGradient(-0.08, -0.5, 0.08, -0.1);
gl.addColorStop(0, '#dfe3dc');
gl.addColorStop(1, '#b9bfb4');
g.fillStyle = gl;
g.fill(glass);
L.pen(g, plate, 1.0 * px, 0.7);
L.pen(g, glass, 0.8 * px, 0.5);
const arms = new Path2D(), cups = new Path2D(), sticks = new Path2D();
for (const [x, y] of W.SCONCE) {
  const s = Math.sign(x);
  arms.moveTo(s * 0.08, -0.12);
  arms.bezierCurveTo(s * 0.2, -0.02, s * 0.3, -0.12, x, y + 0.04);
  cups.moveTo(x + 0.05, y);
  cups.ellipse(x, y, 0.05, 0.02, 0, 0, Math.PI * 2);
  sticks.rect(x - 0.016, y - W.CANDLE, 0.032, W.CANDLE);
}
g.strokeStyle = GILT;
g.lineCap = 'round';
g.lineWidth = 0.025;
g.stroke(arms);
L.pen(g, arms, 0.6 * px, 0.45);
g.fillStyle = '#f4efe2';
g.fill(sticks);
L.pen(g, sticks, 0.7 * px, 0.5);
g.fillStyle = GILT;
g.fill(cups);
L.pen(g, cups, 0.7 * px, 0.5);
