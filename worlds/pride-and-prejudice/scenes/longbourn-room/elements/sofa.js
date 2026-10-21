// A Regency sofa against the far wall, at the left: a long low back, scrolled arms, a striped cream-and-sage cover,
// a cushion at either end, a mahogany rail and short turned legs (x across from its middle, y up negative)
const L = e.kit.brush, px = L.px(e), r = L.rand(137);
const MAHOGANY = '#7b4b33', COVER = '#e7dfc6';
const body = new Path2D();
body.moveTo(-1.05, -0.2);
body.lineTo(-1.05, -0.62);
body.bezierCurveTo(-1.08, -0.78, -0.9, -0.82, -0.86, -0.7);
body.lineTo(-0.82, -0.9);
body.quadraticCurveTo(0, -0.96, 0.82, -0.9);
body.lineTo(0.86, -0.7);
body.bezierCurveTo(0.9, -0.82, 1.08, -0.78, 1.05, -0.62);
body.lineTo(1.05, -0.2);
body.closePath();
L.wash(g, body, COVER, [-1.08, -0.96, 1.08, -0.2], r, 4);
g.save();
g.clip(body);
const stripes = new Path2D();
for (let x = -1.0; x < 1.05; x += 0.1) stripes.rect(x, -1, 0.035, 0.8);
g.fillStyle = 'rgba(132,152,114,0.4)';
g.fill(stripes);
g.restore();
// the seat's front, a shade deeper, and the cushions
const seat = new Path2D();
seat.rect(-0.86, -0.46, 1.72, 0.12);
L.wash(g, seat, '#ddd3b6', [-0.86, -0.46, 0.86, -0.34], r, 1);
const cushions = new Path2D();
cushions.ellipse(-0.66, -0.6, 0.16, 0.13, -0.2, 0, Math.PI * 2);
cushions.moveTo(0.82, -0.6);
cushions.ellipse(0.66, -0.6, 0.16, 0.13, 0.2, 0, Math.PI * 2);
L.wash(g, cushions, '#94a681', [-0.82, -0.73, 0.82, -0.47], r, 2);
const rail = new Path2D();
rail.rect(-1.05, -0.22, 2.1, 0.06);
g.fillStyle = MAHOGANY;
g.fill(rail);
const legs = new Path2D();
for (const x of [-0.98, -0.3, 0.3, 0.98]) {
  legs.moveTo(x - 0.035, -0.16);
  legs.lineTo(x - 0.02, 0);
  legs.lineTo(x + 0.02, 0);
  legs.lineTo(x + 0.035, -0.16);
  legs.closePath();
}
g.fill(legs);
L.pen(g, body, 1.5 * px, 0.85);
L.pen(g, seat, 1.1 * px, 0.6);
L.pen(g, cushions, 1.1 * px, 0.6);
L.pen(g, legs, 1.0 * px, 0.7);
