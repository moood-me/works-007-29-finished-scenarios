// The shelf's animals stir: each holds still, then tips a little to a new angle (paper does not sway, it ticks from
// pose to pose), never in step; the buffalo breathes.
const st = e.state.shelf;
const tick = (n, k) => {
  const t = e.t * 0.3 + n * 5.7;
  const step = Math.floor(t);
  const from = e.anim.hash(step, n + 11) - 0.5;
  const to = e.anim.hash(step + 1, n + 11) - 0.5;
  return (from + (to - from) * e.anim.ease.inOut(e.anim.clamp((t - step - 0.82) / 0.18, 0, 1))) * k;
};
if (st === 'animals') {
  e.layer('goat0').rotate = tick(0, 0.08);
  e.layer('goat1').rotate = tick(1, 0.08);
  e.layer('buffalo').scaleY = 1 + 0.025 * (0.5 + 0.5 * Math.sin(e.t * 1.6 + e.anim.noise(e.t * 0.25, 3)));
}
if (st === 'animals' || st === 'deer') e.layer('deer').rotate = tick(2, 0.06);
