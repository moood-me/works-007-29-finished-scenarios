// A round-headed sash window of the right wall (its middle at x 0, y up negative; the opening 1.5 m wide from the sill
// at 0.9 m to the arch's top at 4.6 m): a cream frame of slender bars — the sashes and the fanlight's radiating bars —,
// a sill; and the curtains: a swag of pale gold damask over it, its tails falling either side to the floor, gathered
// by a tasselled cord. A copy at each window
const L = e.kit.brush, px = L.px(e), r = L.rand(241);
// the frame: the bars, the meeting rails, the fanlight
const bars = new Path2D();
for (const x of [-0.25, 0.25]) bars.rect(x - 0.018, -3.85, 0.036, 2.95);
for (const y of [-1.85, -2.85, -3.85]) bars.rect(-0.75, y - 0.02, 1.5, 0.04);
for (let k = 1; k < 4; k++) {
  const a = Math.PI + (k / 4) * Math.PI, c = Math.cos(a), s = Math.sin(a);
  bars.moveTo(c * 0.2 - s * 0.015, -3.85 + s * 0.2 + c * 0.015);
  bars.lineTo(c * 0.75 - s * 0.015, -3.85 + s * 0.75 + c * 0.015);
  bars.lineTo(c * 0.75 + s * 0.015, -3.85 + s * 0.75 - c * 0.015);
  bars.lineTo(c * 0.2 + s * 0.015, -3.85 + s * 0.2 - c * 0.015);
  bars.closePath();
}
const hub = new Path2D();
hub.moveTo(0.22, -3.85);
hub.arc(0, -3.85, 0.22, 0, Math.PI, true);
hub.lineTo(-0.18, -3.85);
hub.arc(0, -3.85, 0.18, Math.PI, 0, false);
hub.closePath();
g.fillStyle = '#f1ebdc';
g.fill(bars);
g.fill(hub);
L.pen(g, bars, 0.8 * px, 0.45);
L.pen(g, hub, 0.8 * px, 0.45);
const sill = new Path2D();
sill.rect(-0.9, -0.92, 1.8, 0.07);
L.wash(g, sill, '#e9e1cc', [-0.9, -0.92, 0.9, -0.85], r, 1);
L.pen(g, sill, 1.3 * px, 0.75);
// the curtains' tails: long folds from the swag's ends to the floor, gathered at the sill by a cord
const silk = '#d8c596';
for (const s of [-1, 1]) {
  const tail = new Path2D();
  tail.moveTo(s * 0.62, -4.9);
  tail.bezierCurveTo(s * 0.78, -3.4, s * 0.66, -1.6, s * 0.8, -1.3);
  tail.bezierCurveTo(s * 0.72, -0.8, s * 0.86, -0.3, s * 0.82, 0);
  tail.lineTo(s * 1.15, 0);
  tail.bezierCurveTo(s * 1.12, -0.6, s * 1.02, -1.0, s * 1.02, -1.3);
  tail.bezierCurveTo(s * 1.14, -2.4, s * 1.12, -3.8, s * 1.12, -4.9);
  tail.closePath();
  L.wash(g, tail, silk, [-1.15, -4.9, 1.15, 0], r, 3);
  const folds = new Path2D();
  for (const f of [0.12, 0.22, 0.3]) {
    folds.moveTo(s * (0.66 + f), -4.6);
    folds.bezierCurveTo(s * (0.72 + f * 0.9), -3.2, s * (0.7 + f * 0.8), -1.8, s * (0.84 + f * 0.6), -1.32);
    folds.moveTo(s * (0.84 + f * 0.6), -1.25);
    folds.lineTo(s * (0.84 + f), -0.05);
  }
  L.pen(g, folds, 0.9 * px, 0.35);
  L.pen(g, tail, 1.2 * px, 0.7);
  const cord = new Path2D();
  cord.ellipse(s * 0.92, -1.3, 0.16, 0.05, 0, 0, Math.PI * 2);
  cord.moveTo(s * 1.06, -1.26);
  cord.lineTo(s * 1.08, -1.0);
  g.fillStyle = '#b8954f';
  g.fill(cord);
  L.pen(g, cord, 0.9 * px, 0.6);
}
// the swag over the top: a festoon of the same damask between the tails, a gilt pelmet board above it
const swag = new Path2D();
swag.moveTo(-1.15, -5.0);
swag.lineTo(1.15, -5.0);
swag.lineTo(1.12, -4.75);
swag.quadraticCurveTo(0, -4.2, -1.12, -4.75);
swag.closePath();
L.wash(g, swag, silk, [-1.15, -5.0, 1.15, -4.4], r, 2);
const swagFolds = new Path2D();
for (const k of [0.12, 0.24, 0.36]) {
  swagFolds.moveTo(-1.1, -4.98 + k * 0.5);
  swagFolds.quadraticCurveTo(0, -4.4 - (0.4 - k) * 0.6, 1.1, -4.98 + k * 0.5);
}
L.pen(g, swagFolds, 0.9 * px, 0.35);
L.pen(g, swag, 1.3 * px, 0.75);
const pelmet = new Path2D();
pelmet.rect(-1.2, -5.08, 2.4, 0.1);
g.fillStyle = '#c2a462';
g.fill(pelmet);
L.pen(g, pelmet, 1.1 * px, 0.7);
