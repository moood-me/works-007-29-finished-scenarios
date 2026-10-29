// The goats walk to and fro along the sill — a step, a pause, a step — and turn at its ends at once, as paper does.
if (!e.state.window_animals || e.state.sold) return;
for (const [name, k, seed] of [['goat1', 0, 1], ['goat2', 1, 2]]) {
  const l = e.layer(name);
  const t = e.t * 0.6 + k * 3;
  const pos = Math.floor(t) % 8, u = e.anim.clamp((t % 1) / 0.3, 0, 1);
  const at = i => 0.06 * (i < 4 ? i : 8 - i);
  l.x = at(pos) + (at((pos + 1) % 8) - at(pos)) * e.anim.ease.out(u) - k * 0.05;
  l.scaleX = pos < 4 ? 1 : -1;
  l.rotate = 0.02 * e.kit.paper.tick(e.anim, e.t, seed);
}
