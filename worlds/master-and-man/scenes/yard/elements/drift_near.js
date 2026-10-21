// The ground wind (позёмка) across the middle of the yard, behind Nikita, the horse and the sleigh (they stand clear before it): wisps of
// blown snow running low and fast from right to left over the drifts, round the horse's legs and the runners — a
// layer that drifts and wraps round its box (its wisps painted again across the ends, so they meet). It stays behind
// the people: their felt boots stand clear.
// (x −8…8 m, y −0.6…0: it hugs the ground)
const box = [-8, -0.6, 8, 0.02];
e.layer("wisps", { drift: [-3.0, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 48, 0.9, 3.2, 0.04, 0.13, 0.4, 0.75);
});
