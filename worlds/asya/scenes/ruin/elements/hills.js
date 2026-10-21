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
// the vineyards: patches down the slopes, their upper edge following the ridge's line, their rows following it too;
// each its own green-gold, close to the slope's
for (let i = 0; i < 40; i++) {
  const x0 = -W + ((2 * W) / 40) * (i + 0.6 * L.rnd(i, 3));
  const w = 80 + 120 * L.rnd(i, 5);
  const off = 30 + 60 * L.rnd(i, 7);
  const deep = 50 + 90 * L.rnd(i, 9);
  const lean = 20 * (L.rnd(i, 11) - 0.5);
  const at = (x) => Math.min(-12, topAt(x) + off);
  g.fillStyle = ["#a2b679", "#9bb174", "#a9b97f", "#97ad70"][i % 4];
  g.beginPath();
  for (let x = x0; x <= x0 + w; x += 10) g.lineTo(x, at(x));
  for (let x = x0 + w; x >= x0; x -= 10) g.lineTo(x + lean, Math.min(-8, at(x) + deep));
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(112, 132, 84, 0.45)";
  g.lineWidth = 2.2;
  for (let r = 8; r < deep; r += 11) {
    g.beginPath();
    for (let x = x0 + 4; x <= x0 + w - 4; x += 12) g.lineTo(x + (lean * r) / deep, Math.min(-8, at(x) + r));
    g.stroke();
  }
}
// woods: a dark fringe along the top, and down the folds
g.fillStyle = "#6f8a5a";
for (let i = 0; i < 160; i++) {
  const x = -W + 2 * W * L.rnd(i, 21);
  const t = topAt(x);
  const fold = i >= 110;
  const y = fold ? t + (-t - 10) * (0.15 + 0.7 * L.rnd(i, 23)) : t + 4 + 10 * L.rnd(i, 23);
  g.beginPath();
  g.ellipse(x, y, fold ? 18 + 20 * L.rnd(i, 25) : 26 + 30 * L.rnd(i, 25), fold ? 22 + 30 * L.rnd(i, 27) : 9 + 8 * L.rnd(i, 27), 0, 0, Math.PI * 2);
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
