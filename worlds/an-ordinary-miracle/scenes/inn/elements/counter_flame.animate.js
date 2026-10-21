const n = e.anim.noise, f = e.layer('flame');
f.rotate = 0.08 * n(e.t * 0.9, 5);
f.scaleY = 1 + 0.12 * n(e.t * 2.3, 6);
