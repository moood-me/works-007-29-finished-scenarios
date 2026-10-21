// The ground wind (позёмка) near: wisps of blown snow running low over the yard from right to left before Nikita and
// the horse — a layer that drifts and wraps round its box (its wisps painted again across the ends, so they meet).
// (x −6…6 m, y −0.6…0: it hugs the ground)
const box = [-6, -0.6, 6, 0.02];
e.layer("wisps", { drift: [-1.6, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 26, 0.8, 2.6, 0.03, 0.09, 0.35, 0.6);
});
