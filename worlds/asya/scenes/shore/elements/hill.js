// The hill over L., 800 m off across the river: vineyards in terraces down its face, woods along its top; on a crag at
// its left the ruin — the old castle's broken wall and the stump of its tower (the Развалина of the game); on the slope,
// above the town and a little left of the middle, the Gagins' white house, one window lit (point `house`). Its ends
// are a pencil drawing.
const L = e.lib;
const N = e.anim.noise;
const W = 1150;
const ACROSS = -60;
const D = 800;
const crest = (x) => -(70 + 55 * (0.5 + 0.5 * N(x / 380, 41)) + 18 * N(x / 120, 42) + 40 * L.smooth(-120, -260, x) * L.smooth(-420, -300, x));
const top = [];
for (let x = -W; x <= W; x += 10) top.push([x, crest(x)]);
const topAt = (x) => top[Math.min(top.length - 1, Math.max(0, Math.round((x + W) / 10)))][1];
g.fillStyle = "#7d9468";
g.beginPath();
g.moveTo(-W, 3);
for (const [x, y] of top) g.lineTo(x, y);
g.lineTo(W, 3);
g.fill();
// the vineyards' terraces: rows down the slope, each patch its own green
for (let i = 0; i < 40; i++) {
  const x = -W + ((2 * W) / 40) * (i + 0.5 * L.rnd(i, 43));
  const w = 30 + 40 * L.rnd(i, 45);
  const y0 = topAt(x + w / 2) + 14 + 10 * L.rnd(i, 47);
  const y1 = -4 - 4 * L.rnd(i, 49);
  if (y1 - y0 < 8) continue;
  g.fillStyle = ["#93a670", "#89a067", "#9cad78", "#84985f"][i % 4];
  g.fillRect(x, y0, w, y1 - y0);
  g.fillStyle = "rgba(80, 98, 60, 0.45)";
  for (let y = y0 + 3; y < y1; y += 5) g.fillRect(x, y, w, 1.1);
}
// the woods along the top
g.fillStyle = "#5f7652";
for (let i = 0; i < 70; i++) {
  const x = -W + 2 * W * L.rnd(i, 51);
  const y = topAt(x) + 4 + 6 * L.rnd(i, 53);
  g.beginPath();
  g.ellipse(x, y, 12 + 16 * L.rnd(i, 55), 6 + 6 * L.rnd(i, 57), 0, 0, Math.PI * 2);
  g.fill();
}
// the ruin on its crag
const rx = -300;
const ry = topAt(rx);
g.fillStyle = "#8b8a7c";
g.beginPath();
g.moveTo(rx - 34, ry + 16);
g.lineTo(rx - 12, ry - 3);
g.lineTo(rx + 18, ry);
g.lineTo(rx + 40, ry + 18);
g.fill();
g.fillStyle = "#cfc6b2";
g.fillRect(rx - 6, ry - 26, 12, 24);
g.fillRect(rx + 6, ry - 12, 26, 10);
g.fillStyle = "#b5aa95";
g.fillRect(rx - 6, ry - 29, 3.5, 3.5);
g.fillRect(rx + 2.5, ry - 29, 3.5, 3.5);
g.fillRect(rx + 14, ry - 15, 4, 3);
g.fillRect(rx + 24, ry - 15, 4, 3);
// the Gagins' white house on the slope: its front, its roof, the lit window (hers — the geranium's, too small to see)
const hx = -95;
const hy = -46;
g.fillStyle = "#6c8a5c";
g.beginPath();
g.ellipse(hx + 15, hy + 1, 12, 5, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#f2efe6";
g.fillRect(hx - 6, hy - 7, 12, 7);
g.fillStyle = "#7d8792";
g.beginPath();
g.moveTo(hx - 7, hy - 7);
g.lineTo(hx, hy - 11);
g.lineTo(hx + 7, hy - 7);
g.fill();
g.fillStyle = "#ffd590";
g.fillRect(hx + 1.5, hy - 5.5, 2, 2);
e.light(hx + 2.5, hy - 4.5, 2.2, "#ffc878", 0.9);
e.at(hx, hy - 6, "house");
// the hill's foot behind the town, darker
g.fillStyle = "#68805a";
g.fillRect(-W, -6, 2 * W, 9);
L.unfinish(g, [-W - 60, -200, W + 60, 3], ACROSS, D);
