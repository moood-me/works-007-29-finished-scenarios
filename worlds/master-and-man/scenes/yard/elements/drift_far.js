// The ground wind farther off, across the yard before the fence: longer, fainter wisps, a little slower to the eye.
// (x −15…15 m, y −0.7…0)
const L = e.lib;
const W = 30;
e.layer("wisps", { drift: [-1.6, 0], box: [-15, -0.7, 15, 0.02] }, c => {
  for (let i = 0; i < 26; i++) {
    const x = -15 + e.rnd() * W;
    const y = -0.05 - e.rnd() * 0.4;
    const len = 2 + e.rnd() * 4;
    const thick = 0.04 + e.rnd() * 0.07;
    const alpha = 0.2 + e.rnd() * 0.25;
    for (const dx of [-W, 0, W]) {
      if (x + dx + len < -15 || x + dx > 15) continue;
      L.wisp(c, x + dx, y, len, thick, alpha);
    }
  }
});
