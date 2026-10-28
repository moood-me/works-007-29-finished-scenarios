// the flower turning slowly on the water, drifting a hand's width to and fro
const f = e.layer('flower');
f.rotate = e.t * 0.12;
f.x = 0.05 * e.anim.noise(e.t * 0.2, 3);
f.y = 0.04 * e.anim.noise(e.t * 0.17, 9);
