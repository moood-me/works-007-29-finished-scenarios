// Silent lightning in the storm bank to the south: now and then — a window of a few seconds holds a flash or not, by
// a steady random — one quick flicker, sometimes two, then the dark again.
const span = 4.5;
const n = Math.floor(e.t / span);
const u = e.t - n * span;
const at = 0.6 + 2.8 * e.anim.hash(n, 11);
const on = e.anim.hash(n, 5) < 0.55;
const one = Math.exp(-((u - at) ** 2) / 0.004);
const two = e.anim.hash(n, 7) < 0.5 ? 0.6 * Math.exp(-((u - at - 0.22) ** 2) / 0.003) : 0;
e.layer('flash').alpha = on ? Math.min(1, one + two) : 0;
