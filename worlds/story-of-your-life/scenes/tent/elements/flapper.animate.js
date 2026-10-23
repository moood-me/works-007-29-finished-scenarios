// The barrel sways a very little on its limbs, as if breathing; the lifted limb drifts up and down, slowly.
const n = e.anim.noise;
e.layer('body').rotate = 0.02 * n(e.t * 0.23, 1);
e.layer('body').scaleY = 1 + 0.01 * Math.sin(e.t * 1.1);
e.layer('arm').rotate = -0.1 * (0.5 + 0.5 * n(e.t * 0.31, 2));
