// The far hills beyond L., 2.6 km off: two ridges one behind the other, the moon low over the right one; dark against
// the night sky (the moon is behind them), woods in their folds. Their ends are a pencil drawing.
const L = e.lib;
const N = e.anim.noise;
const W = 3400;
const ACROSS = 0;
const D = 2600;
const ridge = (x, base, rise, seed, scale) => -(base + rise * (0.5 + 0.5 * N(x / scale, seed)) + 0.3 * rise * N(x / (scale * 0.37), seed + 1));
// the far ridge
g.fillStyle = "#8e9cb2";
g.beginPath();
g.moveTo(-W, 4);
for (let x = -W; x <= W; x += 40) g.lineTo(x, ridge(x, 120, 120, 12, 1000));
g.lineTo(W, 4);
g.fill();
// the nearer ridge
const top = [];
for (let x = -W; x <= W; x += 25) top.push([x, ridge(x, 50, 110, 15, 700)]);
g.fillStyle = "#73866a";
g.beginPath();
g.moveTo(-W, 4);
for (const [x, y] of top) g.lineTo(x, y);
g.lineTo(W, 4);
g.fill();
// woods in its folds
g.fillStyle = "#5e7356";
for (let i = 0; i < 34; i++) {
  const x = -W + 2 * W * L.rnd(i, 31);
  const t = top[Math.min(top.length - 1, Math.max(0, Math.round((x + W) / 25)))][1];
  const y = t + (-t - 8) * (0.15 + 0.6 * L.rnd(i, 33));
  g.beginPath();
  g.ellipse(x, y, 50 + 70 * L.rnd(i, 35), 10 + 14 * L.rnd(i, 37), 0, 0, Math.PI * 2);
  g.fill();
}
L.unfinish(g, [-W - 150, -300, W + 150, 6], ACROSS, D);
