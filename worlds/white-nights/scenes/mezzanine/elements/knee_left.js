// The low knee wall on the left (x −2.1 at the front … 2.1 at the back, y −1 … 0): the same blue paper; a shelf with
// books over it — the Lodger's left behind, the Dreamer's now —; his knotty stick leaning at its back end
const INK = e.lib.INK;
e.lib.paper(g, -2.1, 2.1, 1.0, 65);
g.fillStyle = '#8a6a52';
g.fillRect(-2.1, -0.12, 4.2, 0.12);
e.lib.box(g, -0.6, -0.78, 1.4, 0.04, '#7d5d45', 0.008);
const cols = ['#6b3f33', '#3f4f63', '#8b7a52', '#5a3b30', '#4c5a46', '#7a4a3a', '#36404e', '#9a8a68'];
for (let i = 0; i < 16; i++) {
  const h = 0.16 + 0.06 * e.anim.hash(i, 66), x = -0.55 + i * 0.075;
  e.lib.box(g, x, -0.78 - h, 0.065, h, cols[i % cols.length], 0.006);
}
g.save();
g.translate(1.7, 0);
g.rotate(0.12);
e.lib.box(g, -0.015, -0.92, 0.03, 0.92, '#54392a', 0.006);
g.restore();
