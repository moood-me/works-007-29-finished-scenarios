// Laohu breathes — the flanks swell a little, slowly, unevenly — and its tail ticks from pose to pose as paper moves.
const breath = Math.sin(e.t * 1.5 + 0.6 * e.anim.noise(e.t * 0.2, 2));
const tiger = e.layer('tiger');
tiger.scaleY = 1 + 0.03 * breath;
tiger.scaleX = 1 + 0.012 * breath;
const t = e.t * 0.5;
const step = Math.floor(t);
const from = e.anim.hash(step, 5) - 0.5;
const to = e.anim.hash(step + 1, 5) - 0.5;
const u = e.anim.ease.inOut(e.anim.clamp((t - step - 0.75) / 0.25, 0, 1));
e.layer('tail').rotate = (from + (to - from) * u) * 0.6;
