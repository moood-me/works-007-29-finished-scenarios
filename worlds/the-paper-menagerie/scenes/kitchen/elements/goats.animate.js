// The goats' heads: each nods or lifts now and then on its own — held, then a quick tilt to a new angle (paper does
// not sway smoothly: it ticks from pose to pose), never in step.
if (e.state.packed) return;
for (let n = 0; n < 2; n++) {
  const t = e.t * 0.35 + n * 7.3;
  const step = Math.floor(t);
  const from = e.anim.hash(step, n + 1) - 0.5;
  const to = e.anim.hash(step + 1, n + 1) - 0.5;
  const u = e.anim.ease.inOut(e.anim.clamp((t - step - 0.8) / 0.2, 0, 1));
  e.layer(`head${n}`).rotate = (from + (to - from) * u) * 0.5 * (n ? -1 : 1);
}
