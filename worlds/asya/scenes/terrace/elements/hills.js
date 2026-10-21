// The far side of the valley, 2.2 km off across the Rhine: a far blue ridge, and before it the near ridge of that bank
// in the evening sun — vineyards in stripes down its slopes, woods in the folds, a ruined tower on a crag. Its ends are
// a pencil drawing.
const L = e.lib;
const N = e.anim.noise;
const W = 2900;
const ACROSS = -100;
const D = 2200;
const ridge = (x, base, rise, seed, scale) => -(base + rise * (0.5 + 0.5 * N(x / scale, seed)) + 0.35 * rise * N(x / (scale * 0.37), seed + 1));
// the far ridge
g.fillStyle = "#a7b6c4";
g.beginPath();
g.moveTo(-W, 4);
for (let x = -W; x <= W; x += 40) g.lineTo(x, ridge(x, 150, 110, 2, 900));
g.lineTo(W, 4);
g.fill();
// the near ridge: its line, and the land under it
const top = [];
for (let x = -W; x <= W; x += 25) top.push([x, ridge(x, 60, 120, 5, 650)]);
g.fillStyle = "#94a874";
g.beginPath();
g.moveTo(-W, 4);
for (const [x, y] of top) g.lineTo(x, y);
g.lineTo(W, 4);
g.fill();
// the vineyards: bands of rows down the sunny slopes, each band its own green-gold
for (let i = 0; i < 46; i++) {
  const x = -W + ((2 * W) / 46) * (i + 0.5 * L.rnd(i, 3));
  const w = 70 + 90 * L.rnd(i, 5);
  const t = top[Math.min(top.length - 1, Math.max(0, Math.round((x + W) / 25)))][1];
  const y0 = t + 12 + 20 * L.rnd(i, 7);
  const y1 = -6 - 10 * L.rnd(i, 9);
  if (y1 - y0 < 15) continue;
  g.fillStyle = ["#b3bf7f", "#a7b878", "#bfc489", "#9fb170"][i % 4];
  g.fillRect(x, y0, w, y1 - y0);
  g.fillStyle = "rgba(110, 128, 80, 0.5)";
  for (let y = y0 + 6; y < y1; y += 10) g.fillRect(x, y, w, 2.4);
}
// woods in the folds
g.fillStyle = "#6f8a5a";
for (let i = 0; i < 30; i++) {
  const x = -W + 2 * W * L.rnd(i, 21);
  const t = top[Math.min(top.length - 1, Math.max(0, Math.round((x + W) / 25)))][1];
  const y = t + (-t - 10) * (0.2 + 0.6 * L.rnd(i, 23));
  g.beginPath();
  g.ellipse(x, y, 40 + 60 * L.rnd(i, 25), 12 + 14 * L.rnd(i, 27), 0, 0, Math.PI * 2);
  g.fill();
}
// the ruin on its crag (the near ridge's top over x −520)
const rx = -520;
const ry = ridge(rx, 60, 120, 5, 650);
g.fillStyle = "#8d8f80";
g.beginPath();
g.moveTo(rx - 40, ry + 14);
g.lineTo(rx - 14, ry - 6);
g.lineTo(rx + 20, ry - 2);
g.lineTo(rx + 44, ry + 16);
g.fill();
g.fillStyle = "#d3c9b4";
g.fillRect(rx - 7, ry - 30, 14, 26);
g.fillRect(rx + 9, ry - 14, 24, 10);
g.fillStyle = "#b7ac97";
g.fillRect(rx - 7, ry - 33, 4, 4);
g.fillRect(rx + 3, ry - 33, 4, 4);
// the bank's foot, darker, at the water
g.fillStyle = "#6e8657";
g.fillRect(-W, -9, 2 * W, 13);
L.unfinish(g, [-W - 150, -305, W + 150, 6], ACROSS, D);
