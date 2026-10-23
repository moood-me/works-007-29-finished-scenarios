// the near bank of sand, flat where the viewer stands, going down to the pool's bed (from 7.6 m to 11 m ahead, a
// metre down); the far bank coming up out of the water (24 → 31 m) to the level of the fields, 1.2 m; on the left,
// near, a cut bank rising under the willows
return -1 * anim.span(distance, 7.6, 11) + 2.2 * anim.span(distance, 24, 31) + 0.6 * anim.span(-across, 6, 14) * (1 - anim.span(distance, 8, 10));
