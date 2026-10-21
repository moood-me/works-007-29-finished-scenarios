// A great beech at the left, near: its grey trunk at the frame's edge and a low bough reaching in over the top of the
// picture, its leaves in three greens. The trunk stands; the bough and the crown sway in the wind about the fork
const L = e.kit.brush, px = L.px(e), r = L.rand(89);
const trunk = new Path2D();
trunk.moveTo(-0.62, 0.25);
trunk.bezierCurveTo(-0.5, -2.5, -0.55, -5, -0.32, -8.5);
trunk.lineTo(0.34, -8.5);
trunk.bezierCurveTo(0.42, -5, 0.5, -2.5, 0.7, 0.25);
trunk.closePath();
L.wash(g, trunk, '#9a9283', [-0.7, -8.5, 0.7, 0.25], r, 3, 0.02);
const bark = new Path2D();
for (let i = 0; i < 9; i++) {
  const x = -0.4 + 0.8 * r(), y = -0.3 - 7 * r();
  bark.moveTo(x, y);
  bark.quadraticCurveTo(x + 0.05, y - 0.3, x + 0.02, y - 0.6);
}
L.pen(g, bark, 1.9 * px, 0.65);
L.pen(g, trunk, 2.28 * px, 0.85);
e.layer('crown', { wind: { strength: 0.18, gust: 0.4, scale: 6 }, pivot: [0.1, -4.6] }, g2 => {
  const boughs = new Path2D();
  boughs.moveTo(0.1, -4.6);
  boughs.bezierCurveTo(1.2, -4.9, 2.2, -4.1, 3.3, -3.6);
  boughs.moveTo(0, -6.2);
  boughs.bezierCurveTo(1.2, -6.8, 2.4, -6.6, 3.4, -6.1);
  boughs.moveTo(-0.1, -7.5);
  boughs.bezierCurveTo(-1, -8.4, -1.6, -9, -2.2, -9.4);
  g2.strokeStyle = '#8c8577';
  g2.lineCap = 'round';
  g2.lineWidth = 0.16;
  g2.stroke(boughs);
  L.pen(g2, boughs, 1.8 * px, 0.45);
  L.foliage(g2, [[1.1, -4.8, 0.7], [1.9, -4.4, 0.75], [2.7, -4.0, 0.6], [3.3, -3.65, 0.4],
    [0.6, -6.5, 1.4], [2.0, -6.2, 1.2], [3.2, -6.0, 0.9], [-0.8, -7.0, 1.4], [0.2, -8.6, 1.7], [2.4, -7.7, 1.3], [-1.8, -9.0, 1.4], [1.2, -9.8, 1.3]],
    ['#5c7752', '#77935f', '#9cb47d'], r, 0.06, 1.8 * px);
});
