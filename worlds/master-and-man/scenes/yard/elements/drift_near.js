// The ground wind (позёмка) across the middle of the yard, behind Nikita, under the horse and the sleigh: wisps of
// blown snow running low and fast from right to left over the drifts — a layer that drifts and wraps round its box
// (its wisps painted again across the ends, so they meet). It stays behind the people: their felt boots stand clear.
// (x −8…8 m, y −0.7…0: it hugs the ground)
const box = [-8, -0.7, 8, 0.02];
e.layer("wisps", { drift: [-2.6, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 40, 0.9, 3.0, 0.04, 0.12, 0.45, 0.75);
});
