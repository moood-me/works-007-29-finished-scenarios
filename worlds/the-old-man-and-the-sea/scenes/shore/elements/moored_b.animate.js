e.layer('hull').rotate = 0.03 * Math.sin(e.t * 0.75 + 2) + 0.015 * e.anim.noise(e.t * 0.3, 2);
e.layer('hull').y = 0.04 * Math.sin(e.t * 0.75 + 3.1);
