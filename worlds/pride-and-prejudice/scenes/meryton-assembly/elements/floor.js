// The assembly room's floor seen from above (x across from its middle at across 0.8; y toward the viewer, its middle 8 m
// off: the far wall at y −8, the eye's end at y 8): long pale boards waxed for dancing, running away from the eye with
// the pen between them, and in the middle of the room the chalked design laid for the night — a wreath of leaves round
// a ring, a knot at the four sides (it wears away under the dancers' feet, softer where the set stands)
const L = e.kit.brush, px = L.px(e), r = L.rand(211);
const all = new Path2D();
all.rect(-3.6, -8, 7.2, 16);
L.wash(g, all, '#cfae80', [-3.6, -8, 3.6, 8], r, 14);
const seams = new Path2D();
for (let x = -3.6; x <= 3.6; x += 0.15) {
  seams.moveTo(x, -8); seams.lineTo(x, 8);
  for (let k = 0; k < 3; k++) {
    const cut = -8 + 16 * r();
    seams.moveTo(x, cut); seams.lineTo(x + 0.15, cut);
  }
}
L.pen(g, seams, 1.0 * px, 0.3);
// the chalk: a ring and a wreath of leaves round it, knots at four sides — white, a little rubbed
const cx = -0.2, cy = 0;
g.save();
g.globalAlpha = 0.62;
g.strokeStyle = '#f7f2e6';
g.lineCap = 'round';
g.lineWidth = 0.035;
const ring = new Path2D();
ring.ellipse(cx, cy, 1.5, 1.5, 0, 0, Math.PI * 2);
ring.moveTo(cx + 1.25, cy);
ring.ellipse(cx, cy, 1.25, 1.25, 0, 0, Math.PI * 2);
g.stroke(ring);
const leaves = new Path2D();
for (let i = 0; i < 40; i++) {
  const a = (i / 40) * Math.PI * 2, rr = 1.75, x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr, t = a + Math.PI / 2;
  leaves.moveTo(x - Math.cos(t) * 0.12, y - Math.sin(t) * 0.12);
  leaves.quadraticCurveTo(x + Math.cos(a) * 0.09, y + Math.sin(a) * 0.09, x + Math.cos(t) * 0.12, y + Math.sin(t) * 0.12);
  leaves.quadraticCurveTo(x - Math.cos(a) * 0.09, y - Math.sin(a) * 0.09, x - Math.cos(t) * 0.12, y - Math.sin(t) * 0.12);
}
g.fillStyle = '#f7f2e6';
g.fill(leaves);
const knots = new Path2D();
for (let k = 0; k < 4; k++) {
  const a = (k / 4) * Math.PI * 2 + Math.PI / 4, x = cx + Math.cos(a) * 2.15, y = cy + Math.sin(a) * 2.15;
  knots.moveTo(x + 0.22, y);
  knots.ellipse(x, y, 0.22, 0.12, a, 0, Math.PI * 2);
  knots.moveTo(x + 0.12, y);
  knots.ellipse(x, y, 0.12, 0.22, a, 0, Math.PI * 2);
}
g.stroke(knots);
// (where the set has danced, the chalk is rubbed: patches of the boards' colour over it)
g.globalAlpha = 0.5;
for (let i = 0; i < 9; i++) {
  const x = cx + (r() - 0.5) * 3, y = cy + (r() - 0.5) * 3, rad = 0.3 + 0.4 * r();
  const gr = g.createRadialGradient(x, y, 0, x, y, rad);
  gr.addColorStop(0, 'rgba(207,174,128,0.9)');
  gr.addColorStop(1, 'rgba(207,174,128,0)');
  g.fillStyle = gr;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}
g.restore();
