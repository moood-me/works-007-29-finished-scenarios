const n = e.anim.noise;
for (const [name, seed] of [['left', 3], ['right', 7]]) {
  const f = e.layer(name);
  f.rotate = 0.08 * n(e.t * 0.9, seed);
  f.scaleY = 1 + 0.12 * n(e.t * 2.3, seed + 1);
}
