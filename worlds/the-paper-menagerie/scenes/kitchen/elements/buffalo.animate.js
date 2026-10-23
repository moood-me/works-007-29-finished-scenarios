// The buffalo breathes: slow, a little uneven.
const b = e.anim.noise(e.t * 0.25, 3);
e.layer('body').scaleY = 1 + 0.025 * (0.5 + 0.5 * Math.sin(e.t * 1.6 + b));
