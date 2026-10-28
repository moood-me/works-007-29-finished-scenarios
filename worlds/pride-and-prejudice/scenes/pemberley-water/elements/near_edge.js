// The near bank's edge, where the lawn ends and the water begins a hand's breadth below it: a strip of earth and
// grass seen side-on (its top the lawn's level, its foot under the water), a fringe of uncut grass along its top
const L = e.kit.brush, px = L.px(e), r = L.rand(67);
const face = new Path2D();
face.moveTo(-30, -0.02);
for (let x = -30; x <= 30; x += 1.5) face.lineTo(x, -0.02 + 0.03 * Math.sin(x * 1.7));
face.lineTo(30, 0.8);
face.lineTo(-30, 0.8);
face.closePath();
const fg = g.createLinearGradient(0, 0, 0, 0.8);
fg.addColorStop(0, '#87985f');
fg.addColorStop(0.35, '#6f7a52');
fg.addColorStop(1, '#5a634a');
g.fillStyle = fg;
g.fill(face);
L.pen(g, face, 1.9 * px, 0.6);
const greens = ['#6e8452', '#86995f', '#a3b177'];
for (let t = 0; t < 3; t++) {
  const p = new Path2D();
  for (let i = 0; i < 240; i++) {
    const x = -30 + 60 * r(), h = 0.08 + 0.16 * r(), lean = (r() - 0.4) * 0.08;
    p.moveTo(x, 0.02);
    p.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
  }
  g.strokeStyle = greens[t];
  g.lineWidth = 0.012;
  g.lineCap = 'round';
  g.stroke(p);
}
