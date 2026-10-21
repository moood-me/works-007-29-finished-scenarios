// A great beech at the left edge, a step farther than the people: its trunk — the smooth grey-green bark of a beech,
// washed unevenly, mossed at the foot, its roots spreading into the lawn, the shade side hatched with the pen, the
// bark's dark "eyes" and fine vertical lines drawn — and one low bough reaching in at the top-left corner with a few
// clumps of leaves (the crown itself is above the frame). The trunk stands; the bough sways in the wind about the fork.
// In 4:3 only the bough's tip is seen; the title's middle is left clear
const L = e.kit.brush, px = L.px(e), r = L.rand(89);
const trunk = new Path2D();
trunk.moveTo(-0.95, 0.3);
trunk.bezierCurveTo(-0.62, 0.05, -0.5, -0.3, -0.5, -1.0);
trunk.bezierCurveTo(-0.46, -3.0, -0.44, -5.5, -0.32, -8.5);
trunk.lineTo(0.34, -8.5);
trunk.bezierCurveTo(0.42, -5.5, 0.48, -3.0, 0.52, -1.0);
trunk.bezierCurveTo(0.54, -0.3, 0.7, 0.05, 1.05, 0.3);
trunk.closePath();
L.wash(g, trunk, '#aaa898', [-0.95, -8.5, 1.05, 0.3], r, 9, 0.03);
// (the bark's tones: grey-green patches, warmer where the sun falls, moss green at the foot on the shaded side)
g.save();
g.clip(trunk);
for (let i = 0; i < 14; i++) {
  const x = -0.45 + 0.9 * r(), y = -0.4 - 7.6 * r(), rad = 0.2 + 0.35 * r(), gr = g.createRadialGradient(x, y, 0, x, y, rad);
  const c = r() < 0.5 ? '150,156,140' : '196,190,172';
  gr.addColorStop(0, `rgba(${c},0.55)`);
  gr.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = gr;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}
const moss = g.createLinearGradient(0, 0.3, 0, -1.4);
moss.addColorStop(0, 'rgba(120,140,88,0.75)');
moss.addColorStop(1, 'rgba(120,140,88,0)');
g.fillStyle = moss;
g.fillRect(0.0, -1.4, 1.1, 1.7);
g.restore();
// the shade side (away from the sun, on the right) hatched in fine slanted strokes
const shadeSide = new Path2D();
shadeSide.moveTo(0.12, -8.5);
shadeSide.lineTo(0.34, -8.5);
shadeSide.bezierCurveTo(0.42, -5.5, 0.48, -3.0, 0.52, -1.0);
shadeSide.bezierCurveTo(0.54, -0.3, 0.7, 0.05, 1.05, 0.3);
shadeSide.lineTo(0.3, 0.3);
shadeSide.bezierCurveTo(0.26, -3, 0.2, -6, 0.12, -8.5);
shadeSide.closePath();
L.hatch(g, shadeSide, [0, -8.5, 1.1, 0.3], 0.045, 1.2, 1.1 * px, 0.45);
// the bark drawn: fine vertical lines, the dark horizontal "eyes" of a beech, the roots' creases
const bark = new Path2D();
for (let i = 0; i < 16; i++) {
  const x = -0.38 + 0.76 * r(), y = -0.5 - 7.2 * r(), l = 0.4 + 0.8 * r();
  bark.moveTo(x, y);
  bark.quadraticCurveTo(x + 0.02, y - l * 0.5, x + 0.01, y - l);
}
L.pen(g, bark, 1.0 * px, 0.4);
const eyes = new Path2D();
for (let i = 0; i < 9; i++) {
  const x = -0.3 + 0.6 * r(), y = -0.8 - 6.5 * r(), w = 0.06 + 0.08 * r();
  eyes.moveTo(x - w, y);
  eyes.quadraticCurveTo(x, y + 0.03, x + w, y - 0.01);
}
L.pen(g, eyes, 1.6 * px, 0.7);
const roots = new Path2D();
roots.moveTo(-0.55, -0.6); roots.quadraticCurveTo(-0.6, -0.1, -0.85, 0.22);
roots.moveTo(0.1, -0.5); roots.quadraticCurveTo(0.12, -0.05, 0.05, 0.28);
roots.moveTo(0.5, -0.7); roots.quadraticCurveTo(0.6, -0.1, 0.9, 0.25);
L.pen(g, roots, 1.3 * px, 0.6);
L.pen(g, trunk, 2.2 * px, 0.85);
e.layer('bough', { wind: { strength: 0.16, gust: 0.4, scale: 5 }, pivot: [0.2, -3.4] }, g2 => {
  const bough = new Path2D();
  bough.moveTo(0.2, -3.4);
  bough.bezierCurveTo(1.0, -3.7, 1.8, -3.8, 2.7, -3.75);
  bough.moveTo(1.4, -3.75);
  bough.quadraticCurveTo(1.7, -4.3, 2.0, -4.8);
  g2.strokeStyle = '#a19e8f';
  g2.lineCap = 'round';
  g2.lineWidth = 0.12;
  g2.stroke(bough);
  L.pen(g2, bough, 1.5 * px, 0.5);
  L.foliage(g2, [[1.2, -3.95, 0.45], [2.0, -3.95, 0.5], [2.75, -3.8, 0.38], [1.7, -4.7, 0.6], [0.6, -4.6, 0.7], [0.0, -5.6, 1.1], [1.4, -5.9, 1.0]],
    ['#5c7752', '#77935f', '#9cb47d'], r, 0.06, 1.6 * px);
});
