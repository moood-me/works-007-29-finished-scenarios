// The animals in the box: awake, they shift now and then from pose to pose; as `menagerie_sleep` goes 0 → 1 they lie
// down one by one (the goat first, then the deer, the other goat, the buffalo, the rest) — each a snap over and down
// behind the box's front — and stay paper.
if (!e.state.shoebox) return;
const P = e.kit.paper, k = e.state.menagerie_sleep ?? 0;
const ORDER = [['goat1', -1], ['deer', 1], ['goat2', 1], ['buffalo', -1], ['crowd', 1]];
ORDER.forEach(([name, side], i) => {
  const l = e.layer(name);
  const down = P.steps(e.anim.clamp((k - i * 0.18) / 0.12, 0, 1), 2);
  const awake = (1 - down) * (1 - k) * P.tick(e.anim, e.t * 0.4 + i * 2.3, 11 + i) * 0.12;
  l.rotate = side * 1.3 * down + awake;
  l.y = 0.05 * down;
});
