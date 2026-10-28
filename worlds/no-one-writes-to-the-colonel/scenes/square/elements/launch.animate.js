// The launch rides the river's slow swell: a little roll and a little rise, never in a cycle you can see.
const b = e.layer('boat');
b.rotate = 0.006 * e.anim.noise(e.t * 0.23, 5);
b.y = 0.02 * e.anim.noise(e.t * 0.31, 9);
