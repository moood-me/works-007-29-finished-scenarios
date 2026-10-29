// the robin bobs and tips forward now and then, never in a beat; by night it is gone
const bird = e.layer('bird');
const s = e.anim.noise(e.t * 0.7, 11);
bird.rotate = 0.25 * Math.max(0, s - 0.3);
bird.y = -0.01 * Math.max(0, e.anim.noise(e.t * 1.3, 5));
bird.alpha = 1 - (e.state.night ?? 0);
