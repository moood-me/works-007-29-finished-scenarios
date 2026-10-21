// The floor seen from above (x across from its middle at across 0.2; y toward the viewer, its middle 3.4 m off: the
// far wall at y −2.6, the near edge at y 2.7): pale oak boards running away from the eye, the pen between them, and a
// worn rug under the sitting group — cream with a sage border
const L = e.kit.brush, px = L.px(e), r = L.rand(131);
const all = new Path2D();
all.rect(-3, -2.7, 6, 5.4);
L.wash(g, all, '#d1b78e', [-3, -2.7, 3, 2.7], r, 8);
const seams = new Path2D();
for (let x = -3; x <= 3; x += 0.17) {
  seams.moveTo(x, -2.7); seams.lineTo(x, 2.7);
  const cut = -2.7 + 5.4 * r();
  seams.moveTo(x, cut); seams.lineTo(x + 0.17, cut);
}
L.pen(g, seams, 1.0 * px, 0.35);
// the rug: under the three sisters and the frame (across −2.2…1.2, 3.0…5.2 m off)
const rug = new Path2D();
rug.rect(-2.4, -1.8, 3.4, 2.2);
L.wash(g, rug, '#ebe1c8', [-2.4, -1.8, 1, 0.4], r, 4);
const border = new Path2D();
border.rect(-2.4, -1.8, 3.4, 2.2);
border.rect(-2.22, -1.64, 3.04, 1.88);
g.fillStyle = '#93a47e';
g.fill(border, 'evenodd');
const medallion = new Path2D();
medallion.ellipse(-0.7, -0.7, 0.8, 0.55, 0, 0, Math.PI * 2);
L.wash(g, medallion, '#d9cfae', [-1.5, -1.25, 0.1, -0.15], r, 2);
const pattern = new Path2D();
for (let k = 0; k < 12; k++) {
  const a = (k / 12) * Math.PI * 2;
  pattern.moveTo(-0.7 + Math.cos(a) * 0.25, -0.7 + Math.sin(a) * 0.18);
  pattern.lineTo(-0.7 + Math.cos(a) * 0.62, -0.7 + Math.sin(a) * 0.42);
}
L.pen(g, pattern, 1.0 * px, 0.35);
L.pen(g, medallion, 1.1 * px, 0.5);
L.pen(g, border, 1.2 * px, 0.6);
