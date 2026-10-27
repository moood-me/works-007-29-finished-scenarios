// The fish comes up from the deep as `fish` goes to 1 — out of the blue, nearer the surface —, and lies there rising
// and falling a little with the water, never quite still.
const f = e.anim.ease.smooth(e.anim.clamp(e.state.fish, 0, 1));
const fish = e.layer('fish');
fish.alpha = f;
fish.y = 0.5 * (1 - f) + 0.015 * Math.sin(e.t * 0.8) + 0.008 * e.anim.noise(e.t * 0.4, 5);
fish.rotate = 0.004 * Math.sin(e.t * 0.8 + 1);
