// The ground wind farther off, across the hollow's bottom before the bank: long wisps of snow streaming low and fast
// from right to left over the drifts, thick enough that the foot of the bank goes white and soft in it. (A layer that
// drifts and wraps round its box: its wisps painted again across the ends, so they meet.)
// (x −15…15 m, y −1.0…0: it hugs the ground)
const box = [-15, -1.0, 15, 0.02];
e.layer("wisps", { drift: [-2.8, 0], box }, c => {
  e.lib.groundWind(c, () => e.rnd(), box, 64, 2, 6.5, 0.07, 0.24, 0.45, 0.8);
});
