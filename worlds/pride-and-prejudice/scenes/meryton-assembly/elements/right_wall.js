// The right wall (facing into the room: x along it toward the viewer, its middle 8 m off — x = 8 − distance; y up
// negative): three tall round-headed windows to the street (6.5, 10 and 13.5 m off: x 1.5, −2, −5.5; 1.5 m wide, from
// the sill at 0.9 m to the arch's top at 4.6 m) between flat pilasters; their sashes and curtains are `window`, the
// evening beyond them `evening`, the daylight they let in comes in at the unseen `opening_a`, `_b`, `_c`
const L = e.kit.brush,
  W = e.lib,
  px = L.px(e),
  r = L.rand(233);
const holes = [1.5, -2, -5.5].map((x) => [x - 0.75, -4.6, x + 0.75, -0.9, true]);
W.wall(g, -8, 8, holes, [-7.1, -3.75, -0.25, 3.25, 6], r, px);
