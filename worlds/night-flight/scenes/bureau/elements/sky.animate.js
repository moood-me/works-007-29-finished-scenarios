// Silent lightning in the storm bank: now and then — a window of a few seconds holds a flash or not, by a steady
// random — one quick flicker, sometimes two, then the dark again.
const span = 4;
const n = Math.floor(e.t / span);
const u = e.t - n * span;
const at = 0.5 + 2.6 * e.anim.hash(n, 13);
const on = e.anim.hash(n, 3) < 0.6;
const one = Math.exp(-((u - at) ** 2) / 0.004);
const two = e.anim.hash(n, 9) < 0.5 ? 0.6 * Math.exp(-((u - at - 0.22) ** 2) / 0.003) : 0;
e.layer('flash').alpha = on ? Math.min(1, one + two) : 0;
