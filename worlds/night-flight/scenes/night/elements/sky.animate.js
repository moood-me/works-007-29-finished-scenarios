// What lives in the sky: silent lightning in the storm's bank to the south (a window of a few seconds holds one quick
// flicker, sometimes two, or none — by a steady random); the low clouds drifting a little; and on each of the three
// lines, now and then, a mail plane's lamp coming in slowly toward the field — out of the dark, down along its way,
// fading as it comes down over the field's far edge. The lines take their turns, never together.
const A = e.aspect;
const span = 4.5;
const n = Math.floor(e.t / span);
const u = e.t - n * span;
const flashAt = 0.6 + 2.8 * e.anim.hash(n, 11);
const on = e.anim.hash(n, 5) < 0.55;
const one = Math.exp(-((u - flashAt) ** 2) / 0.004);
const two = e.anim.hash(n, 7) < 0.5 ? 0.6 * Math.exp(-((u - flashAt - 0.22) ** 2) / 0.003) : 0;
e.layer('flash').alpha = on ? Math.min(1, one + two) : 0;
e.layer('clouds').x = 0.02 * Math.sin(e.t * 0.017);
// the three lines (lib.js): each lamp along its way, slow at first far off, then nearer and lower; seen in over its
// first tenth, gone over its last; throbbing a little as a lamp seen through the night air does
const { LINES, CYCLE, FLIGHT } = e.lib;
for (const name in LINES) {
  const { way, at } = LINES[name];
  const k = ((((e.t - at) % CYCLE) + CYCLE) % CYCLE) / FLIGHT;
  const layer = e.layer(name);
  if (k >= 1) {
    layer.alpha = 0;
    continue;
  }
  const w = e.anim.ease.inOut(k);
  layer.x = way[0] * A * w;
  layer.y = way[1] * w * w;
  layer.alpha = Math.min(1, k * 10, (1 - k) * 8) * (0.85 + 0.15 * Math.sin(e.t * 2.4));
}
