// The ground wind right before the eye: long wisps of snow streaming low and fast from right to left over the near
// drifts. (A layer that drifts and wraps round its box: its wisps painted again across the ends, so they meet.)
// (x −3…3 m, y −0.5…0: it hugs the ground)
const box = [-3, -0.5, 3, 0.02];
e.layer("wisps", { drift: [-3.6, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 20, 0.8, 2.6, 0.03, 0.1, 0.35, 0.65);
});
