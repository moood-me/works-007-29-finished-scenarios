// The ground wind farther off, across the yard before the fence: long wisps of snow streaming low over the drifts,
// thick enough that the fence's foot and the far yard go white and soft in it.
// (x −15…15 m, y −1.0…0)
const box = [-15, -1.0, 15, 0.02];
e.layer("wisps", { drift: [-2.6, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 64, 2, 6.5, 0.07, 0.24, 0.45, 0.8);
});
