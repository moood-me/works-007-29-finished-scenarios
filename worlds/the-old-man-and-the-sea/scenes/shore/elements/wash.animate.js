// each wave runs up the sand (toward the viewer: y +) and slides back, the second a little later; never quite in step
const t = e.t;
const run = (name, p, s) => {
  const u = 0.5 + 0.5 * Math.sin(t * s + p);
  e.layer(name).y = 1.6 * u * u - 0.2 + 0.15 * e.anim.noise(t * 0.2, p);
  e.layer(name).alpha = 0.55 + 0.45 * u;
};
run('lace_a', 0, 0.62);
run('lace_b', 2.1, 0.55);
