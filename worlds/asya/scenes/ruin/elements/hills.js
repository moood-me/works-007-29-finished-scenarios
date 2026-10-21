// The far side of the valley, 2.6 km off beyond the Rhine and Z.: a far blue ridge, and before it the near ridge of
// that bank full in the setting sun — vineyards in stripes down its slopes, woods in its folds and along its top, a
// ruined tower on a crag (Z.'s own). Painted in daylight colours: the sunset is the scene's light. Its ends are a
// pencil drawing.
const L = e.lib;
const N = e.anim.noise;
const W = 3600;
const ACROSS = 0;
const D = 2600;
const ridge = (x, base, rise, seed, scale) => -(base + rise * (0.5 + 0.5 * N(x / scale, seed)) + 0.35 * rise * N(x / (scale * 0.37), seed + 1));
// the far ridge
g.fillStyle = "#9fb0c6";
g.beginPath();
g.moveTo(-W, 6);
for (let x = -W; x <= W; x += 40) g.lineTo(x, ridge(x, 300, 160, 12, 1000));
g.lineTo(W, 6);
g.fill();
// the near ridge: its line, and the land under it
const top = [];
for (let x = -W; x <= W; x += 25) top.push([x, ridge(x, 150, 230, 15, 700)]);
const topAt = (x) => top[Math.min(top.length - 1, Math.max(0, Math.round((x + W) / 25)))][1];
g.fillStyle = "#8fa673";
g.beginPath();
g.moveTo(-W, 6);
for (const [x, y] of top) g.lineTo(x, y);
g.lineTo(W, 6);
g.fill();
// the vineyards: bands of rows down the slopes, each band its own green-gold
for (let i = 0; i < 52; i++) {
  const x = -W + ((2 * W) / 52) * (i + 0.5 * L.rnd(i, 3));
  const w = 70 + 100 * L.rnd(i, 5);
  const y0 = topAt(x + w / 2) + 16 + 24 * L.rnd(i, 7);
  const y1 = -8 - 10 * L.rnd(i, 9);
  if (y1 - y0 < 15) continue;
  g.fillStyle = ["#b2bf7e", "#a6b877", "#bec488", "#9db06f"][i % 4];
  g.fillRect(x, y0, w, y1 - y0);
  g.fillStyle = "rgba(108, 126, 78, 0.5)";
  for (let y = y0 + 6; y < y1; y += 10) g.fillRect(x, y, w, 2.6);
}
// woods in the folds and along the top
g.fillStyle = "#6c8858";
for (let i = 0; i < 70; i++) {
  const x = -W + 2 * W * L.rnd(i, 21);
  const t = topAt(x);
  const y = i < 40 ? t + 6 + 8 * L.rnd(i, 23) : t + (-t - 10) * (0.2 + 0.6 * L.rnd(i, 23));
  g.beginPath();
  g.ellipse(x, y, 30 + 60 * L.rnd(i, 25), 10 + 14 * L.rnd(i, 27), 0, 0, Math.PI * 2);
  g.fill();
}
// Z.'s ruined tower on a crag of the near ridge (over x 760, above the town)
const rx = 760;
const ry = topAt(rx);
g.fillStyle = "#8d8f80";
g.beginPath();
g.moveTo(rx - 44, ry + 16);
g.lineTo(rx - 16, ry - 6);
g.lineTo(rx + 22, ry - 2);
g.lineTo(rx + 48, ry + 18);
g.fill();
g.fillStyle = "#d6ccb6";
g.fillRect(rx - 8, ry - 34, 16, 30);
g.fillRect(rx + 10, ry - 16, 26, 12);
g.fillStyle = "#b8ad97";
g.fillRect(rx - 8, ry - 37, 4.5, 4.5);
g.fillRect(rx + 3.5, ry - 37, 4.5, 4.5);
// the bank's foot, darker, at the water
g.fillStyle = "#6e8657";
g.fillRect(-W, -10, 2 * W, 16);
L.unfinish(g, [-W - 50, -540, W + 50, 6], ACROSS, D);
