// The lightning's light in the cloud: in the storm and over it as the scene's `flash` gives it (0 dark … 1 the flash,
// set by the scene's script); at dusk the far silent lightning on the horizon has its own — now and then a window of
// a few seconds holds one quick flicker, sometimes two, by a steady random.
const flash = e.layer('flash');
if (e.state.storm > 0.5 || e.state.above > 0.5) flash.alpha = e.state.flash;
else {
  const span = 5;
  const n = Math.floor(e.t / span);
  const u = e.t - n * span;
  const at = 0.5 + 3.4 * e.anim.hash(n, 13);
  const one = Math.exp(-((u - at) ** 2) / 0.004);
  const two = e.anim.hash(n, 9) < 0.5 ? 0.6 * Math.exp(-((u - at - 0.22) ** 2) / 0.003) : 0;
  flash.alpha = e.anim.hash(n, 3) < 0.5 ? Math.min(1, one + two) : 0;
}
// The gap in the storm's cloud: there as much as `gap` says (in the storm, below the clouds).
if (e.state.storm > 0.5 && e.state.above < 0.5) e.layer('gap').alpha = e.state.gap;
