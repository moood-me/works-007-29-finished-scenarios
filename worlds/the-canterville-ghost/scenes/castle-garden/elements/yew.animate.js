// the nightingale singing (`nightingale`): its body lifting and settling a little, now and then, never in a beat — as
// much as it sings; silent, it sits still
const s = e.anim.noise(e.t * 0.9, 7);
e.layer('bird').rotate = 0.08 * Math.max(0, s) * (e.state.nightingale ?? 1);
