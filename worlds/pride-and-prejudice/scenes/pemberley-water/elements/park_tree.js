// A tree of the park — an oak or a chestnut in full June leaf — standing in clumps about the house: a short trunk,
// a broad crown of leaf dabs in three greens over a dark underlayer; its copies scaled, flipped and tinted
const L = e.kit.brush, px = L.px(e), r = L.rand(41);
const trunk = new Path2D();
trunk.moveTo(-0.7, 0.3); trunk.lineTo(-0.45, -6); trunk.lineTo(0.45, -6); trunk.lineTo(0.75, 0.3); trunk.closePath();
L.wash(g, trunk, '#7a6e5c', [-0.8, -6, 0.8, 0.3], r, 0);
L.pen(g, trunk, 1.9 * px, 0.7);
L.foliage(g, [[0, -12.2, 5], [-3.8, -10, 4], [3.8, -10.4, 4.1], [0, -15.4, 3.6], [-2.2, -7.6, 3.1], [2.6, -7.8, 3.1], [-5.6, -8.2, 2.4], [5.8, -8.6, 2.3]],
  ['#5f7a52', '#76925f', '#9ab27a'], r, 0.95, 1.6 * px);
