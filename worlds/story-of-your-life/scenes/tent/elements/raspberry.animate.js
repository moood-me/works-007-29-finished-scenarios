// The barrel sways a very little on its limbs; the lifted limb hardly stirs.
const n = e.anim.noise;
e.layer('body').rotate = 0.015 * n(e.t * 0.19, 5);
e.layer('body').scaleY = 1 + 0.008 * Math.sin(e.t * 0.9 + 1.3);
e.layer('arm').rotate = 0.06 * n(e.t * 0.17, 6);
