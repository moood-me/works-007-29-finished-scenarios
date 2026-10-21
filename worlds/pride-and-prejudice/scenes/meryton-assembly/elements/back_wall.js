// The far wall (x along it from its middle, across 0.8; y up negative; 16 m off): the room's double doors in the middle
// under the musicians' gallery (the gallery's front is `gallery`, a metre nearer), two pilasters either side, and over
// the gallery a lunette — a half-round fanlight painted with the evening sky beyond it
const L = e.kit.brush, W = e.lib, px = L.px(e), r = L.rand(227);
W.wall(g, -3.6, 3.6, [], [-2.1, 2.1], r, px);
// the double doors: mahogany leaves in a cream architrave, a fanlight over them
const arch = new Path2D();
arch.rect(-1.05, -3.0, 2.1, 3.0);
g.fillStyle = '#efe8d6';
g.fill(arch);
const leaves = new Path2D();
leaves.rect(-0.85, -2.6, 0.84, 2.6);
leaves.rect(0.01, -2.6, 0.84, 2.6);
L.wash(g, leaves, '#7d5136', [-0.85, -2.6, 0.85, 0], r, 3);
const panels = new Path2D();
for (const x of [-0.75, 0.11]) for (const [y, h] of [[-2.45, 1.1], [-1.2, 0.95]]) panels.rect(x, y, 0.64, h);
L.pen(g, panels, 1.1 * px, 0.55);
L.pen(g, leaves, 1.4 * px, 0.8);
L.pen(g, arch, 1.5 * px, 0.8);
// the lunette over the gallery: a half-round of glass in radiating bars, the evening's light beyond
const lun = new Path2D();
lun.moveTo(-1.15, -4.75);
lun.arc(0, -4.75, 1.15, Math.PI, 0);
lun.closePath();
const sky = g.createLinearGradient(0, -5.9, 0, -4.75);
sky.addColorStop(0, '#aab7cf');
sky.addColorStop(1, '#efdcc0');
g.fillStyle = sky;
g.fill(lun);
const bars = new Path2D();
for (let k = 1; k < 6; k++) {
  const a = Math.PI + (k / 6) * Math.PI;
  bars.moveTo(0, -4.75);
  bars.lineTo(Math.cos(a) * 1.15, -4.75 + Math.sin(a) * 1.15);
}
bars.moveTo(0.35, -4.75);
bars.arc(0, -4.75, 0.35, 0, Math.PI, true);
g.strokeStyle = '#efe8d6';
g.lineWidth = 0.05;
g.stroke(bars);
L.pen(g, bars, 0.9 * px, 0.45);
L.pen(g, lun, 1.6 * px, 0.8);
