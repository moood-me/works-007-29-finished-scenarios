// The snow streaming off the crest of the far bank: long pale veils blown along it from right to left, the crest
// smoking with snow. (A layer that drifts and wraps round its box: its wisps painted again across the ends, so they
// meet.)
// (x −30…30 m, y −1.6…0: it hugs the ground)
const box = [-30, -1.6, 30, 0.02];
e.layer("wisps", { drift: [-3.0, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 70, 2.5, 8, 0.12, 0.4, 0.35, 0.7);
});
