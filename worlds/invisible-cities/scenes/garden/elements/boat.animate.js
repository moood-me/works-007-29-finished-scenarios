// the boat rocking a little on the water as it lies at its rope
const m = e.mem;
m.p ??= 0;
m.p += e.dt * 0.9;
e.layer('hull').rotate = 0.025 * Math.sin(m.p) + 0.012 * e.anim.noise(e.t * 0.3, 3);
e.layer('hull').y = 0.03 * Math.sin(m.p * 0.7 + 1);
