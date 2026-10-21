// The left wall (facing into the room: x along it away from the viewer, its middle 8 m off — x = distance − 8; y up
// negative): the room's dress between six flat pilasters (at 2, 4.5, 7, 9.5, 12, 14.5 m off; the sconces stand on the
// second, the fourth and the sixth), the benches and chairs along it are `chairs`
const L = e.kit.brush,
  W = e.lib,
  px = L.px(e),
  r = L.rand(229);
W.wall(g, -8, 8, [], [-6, -3.5, -1, 1.5, 4, 6.5], r, px);
