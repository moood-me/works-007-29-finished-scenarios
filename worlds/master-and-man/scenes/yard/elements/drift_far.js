// The ground wind farther off, across the yard before the fence: longer, fainter wisps, a little slower to the eye.
// (x −15…15 m, y −0.7…0)
const box = [-15, -0.7, 15, 0.02];
e.layer("wisps", { drift: [-2.2, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 44, 2, 6, 0.05, 0.16, 0.35, 0.65);
});
