// The ground wind right before the eye: a few long faint wisps of snow streaming low and fast from right to left over
// the near yard (a layer that drifts and wraps round its box).
// (x −3…3 m, y −0.4…0)
const box = [-3, -0.4, 3, 0.02];
e.layer("wisps", { drift: [-2.2, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 10, 0.8, 2.0, 0.02, 0.06, 0.25, 0.45);
});
