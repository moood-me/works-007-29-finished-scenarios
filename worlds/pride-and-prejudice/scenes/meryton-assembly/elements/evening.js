// The street beyond the windows, early evening and still light (a card along the right wall 3.6 m beyond it, facing
// in; x along it toward the viewer, its middle 18 m off; y up negative, its foot on the street): a sky going from a
// soft blue-lilac high up to a pale warm gold low down, the roofs and chimneys of Meryton's houses across the street
// in an evening blue-grey, a few of their windows lit, an elm over them
const L = e.kit.brush, px = L.px(e), r = L.rand(251);
const sky = g.createLinearGradient(0, -11, 0, -2);
sky.addColorStop(0, '#8fa3c4');
sky.addColorStop(0.5, '#c5c4d2');
sky.addColorStop(0.85, '#ead8c0');
sky.addColorStop(1, '#f3dfb6');
g.fillStyle = sky;
g.fillRect(-11, -11, 22, 12);
for (const [x, y, w] of [[-6, -9.2, 4], [3, -8.6, 5], [8, -9.6, 3.5]]) {
  const cl = g.createRadialGradient(x, y, 0, x, y, w * 0.5);
  cl.addColorStop(0, 'rgba(246,226,214,0.7)');
  cl.addColorStop(1, 'rgba(246,226,214,0)');
  g.fillStyle = cl;
  g.fillRect(x - w, y - w * 0.5, w * 2, w);
}
// an elm behind the houses
L.foliage(g, [[-3.5, -8.4, 1.6], [-2.2, -9.0, 1.4], [-4.6, -7.9, 1.2]], ['#6d7f74', '#82927f', '#9cab92'], r, 0.2, 2.2 * px);
// the houses across the street: their fronts in an evening blue-grey, their roofs and chimneys, some windows lit
const fronts = new Path2D(), roofs = new Path2D(), chimneys = new Path2D(), lit = new Path2D(), dark = new Path2D();
let x = -11;
while (x < 11) {
  const w = 3 + 2.4 * r(), h = 6.2 + 1.4 * r();
  fronts.rect(x, -h, w, h);
  roofs.moveTo(x - 0.1, -h);
  roofs.lineTo(x + w * 0.2, -h - 1.4 - 0.4 * r());
  roofs.lineTo(x + w * 0.8, -h - 1.4 - 0.4 * r());
  roofs.lineTo(x + w + 0.1, -h);
  roofs.closePath();
  chimneys.rect(x + w * 0.25, -h - 2.4, 0.5, 1.1);
  for (let row = 0; row < 2; row++) {
    for (let c = 0; c < 3; c++) {
      const wx = x + w * (0.2 + 0.3 * c) - 0.3, wy = -h + 1.2 + row * 2.4;
      (r() < 0.3 ? lit : dark).rect(wx, wy, 0.6, 1.1);
    }
  }
  x += w + 0.15;
}
L.wash(g, fronts, '#aea6a0', [-11, -8, 11, 0], r, 6);
L.wash(g, roofs, '#7c7f8e', [-11, -10, 11, -6], r, 4);
g.fillStyle = '#8b7b72';
g.fill(chimneys);
g.fillStyle = '#6f7484';
g.fill(dark);
g.fillStyle = '#f2cf8e';
g.fill(lit);
L.pen(g, fronts, 1.4 * px, 0.45);
L.pen(g, roofs, 1.4 * px, 0.5);
L.pen(g, chimneys, 1.2 * px, 0.45);
// the street
const street = new Path2D();
street.rect(-11, -0.6, 22, 1.6);
L.wash(g, street, '#b3a58c', [-11, -0.6, 11, 1], r, 3);
