// The buffalo in its pot breathes: slow, a little uneven.
if (e.state.zoo) e.layer('buffalo').scaleY = 1 + 0.025 * (0.5 + 0.5 * Math.sin(e.t * 1.6 + e.anim.noise(e.t * 0.25, 3)));
