// the rings breathe out a little and back, slowly; gone while he is down
const ring = e.layer('ring');
ring.scale = 1 + 0.08 * Math.sin(e.t * 0.6);
ring.alpha = Math.min(1, e.state.beast * 3) * (0.75 + 0.25 * Math.sin(e.t * 0.6 + 1));
