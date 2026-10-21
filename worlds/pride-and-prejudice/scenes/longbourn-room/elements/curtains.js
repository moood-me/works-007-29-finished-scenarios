// The curtains at the window: a green pelmet across its top, two drapes of cream with a faint green stripe, tied back
// at the sides, falling to the floor in folds drawn with the pen; thin — the evening light comes through them
const L = e.kit.brush, px = L.px(e), r = L.rand(113);
const drape = s => {
  const p = new Path2D();
  p.moveTo(s * 0.62, -2.98);
  p.lineTo(s * 0.98, -2.98);
  p.quadraticCurveTo(s * 1.02, -1.6, s * 1.0, 0);
  p.lineTo(s * 0.74, 0);
  p.quadraticCurveTo(s * 0.8, -0.9, s * 0.86, -1.25);
  p.quadraticCurveTo(s * 0.62, -1.7, s * 0.58, -2.98);
  p.closePath();
  return p;
};
for (const s of [-1, 1]) {
  const p = drape(s);
  L.wash(g, p, '#efe6cf', [Math.min(s * 0.58, s * 1.02), -2.98, Math.max(s * 0.58, s * 1.02), 0], r, 3);
  g.save();
  g.clip(p);
  const stripes = new Path2D();
  for (let k = 0; k < 6; k++) {
    const x = s * (0.64 + k * 0.065);
    stripes.moveTo(x, -2.98);
    stripes.quadraticCurveTo(x + s * 0.06, -1.7, x + s * 0.03 + s * 0.12 * (k / 5), 0);
  }
  g.strokeStyle = 'rgba(126,148,112,0.45)';
  g.lineWidth = 0.014;
  g.stroke(stripes);
  // the folds: pen lines down the drape, gathered to the tie
  const folds = new Path2D();
  for (let k = 0; k < 4; k++) {
    const x = s * (0.68 + k * 0.08);
    folds.moveTo(x, -2.9);
    folds.quadraticCurveTo(s * (0.8 + k * 0.02), -1.6, s * 0.86, -1.27);
    folds.moveTo(s * 0.86, -1.22);
    folds.quadraticCurveTo(s * (0.82 + k * 0.04), -0.6, s * (0.76 + k * 0.06), 0);
  }
  L.pen(g, folds, 1.0 * px, 0.4);
  g.restore();
  L.pen(g, p, 1.4 * px, 0.75);
  // the tie: a green cord round the drape
  const tie = new Path2D();
  tie.ellipse(s * 0.87, -1.25, 0.1, 0.03, 0, 0, Math.PI * 2);
  g.fillStyle = '#6f8466';
  g.fill(tie);
}
const pelmet = new Path2D();
pelmet.moveTo(-1.05, -3.06);
pelmet.lineTo(1.05, -3.06);
pelmet.lineTo(1.05, -2.86);
for (let k = 6; k >= 0; k--) pelmet.quadraticCurveTo(-1.05 + (k + 0.5) * 0.3, -2.74, -1.05 + k * 0.3, -2.86);
pelmet.closePath();
L.wash(g, pelmet, '#7f9470', [-1.05, -3.06, 1.05, -2.74], r, 2);
L.pen(g, pelmet, 1.4 * px, 0.8);
