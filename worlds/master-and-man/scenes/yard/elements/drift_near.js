// The ground wind (позёмка) near: thin wisps of blown snow running low over the yard from right to left, a layer that
// drifts and wraps round its box (its wisps painted again across the ends, so they meet).
// (x −8…8 m, y −0.6…0: it hugs the ground)
const L = e.lib;
const W = 16;
e.layer("wisps", { drift: [-1.4, 0], box: [-8, -0.6, 8, 0.02] }, c => {
  for (let i = 0; i < 22; i++) {
    const x = -8 + e.rnd() * W;
    const y = -0.04 - e.rnd() * 0.3;
    const len = 1.2 + e.rnd() * 3;
    const thick = 0.025 + e.rnd() * 0.05;
    const alpha = 0.25 + e.rnd() * 0.3;
    for (const dx of [-W, 0, W]) {
      if (x + dx + len < -8 || x + dx > 8) continue;
      L.wisp(c, x + dx, y, len, thick, alpha);
    }
  }
});
