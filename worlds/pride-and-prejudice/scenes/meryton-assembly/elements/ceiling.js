// The ceiling seen from below (a plane laid face down: x across, y along the room, its middle 8 m off): a soft sage
// field in cream mouldings — long coffers across the room, a cream rib between them — deep enough in tone that the
// page's title reads white over it
const L = e.kit.brush,
  px = L.px(e),
  r = L.rand(223);
const all = new Path2D();
all.rect(-3.6, -8, 7.2, 16);
L.wash(g, all, "#ddd3b8", [-3.6, -8, 3.6, 8], r, 4);
const coffers = new Path2D(),
  inner = new Path2D();
for (let y = -7.7; y + 1.66 <= 7.8; y += 1.9) {
  coffers.rect(-3.2, y, 6.4, 1.66);
  inner.rect(-3.05, y + 0.14, 6.1, 1.38);
}
L.wash(g, coffers, "#6f805f", [-3.2, -8, 3.2, 8], r, 10);
L.pen(g, coffers, 1.6 * px, 0.6);
L.pen(g, inner, 1.1 * px, 0.4);
