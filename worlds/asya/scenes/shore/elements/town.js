// L. across the river, 450 m off, at night: its embankment wall down to the water, the road on it, a row of houses
// under steep roofs with windows lit here and there, the church and its spire; on the left, among dark lindens, the
// inn's garden where the students keep their Kommers — paper lanterns strung between the trees (point `garden`); the
// ferry's landing below the town with its lamp (point `landing`). Lamps and windows are painted lights (they glow,
// and their glow lies on the water). The foot (0) is the bank's top, 2.5 m over the land under the river; the wall goes
// down to the water 3.3 m below it.
const L = e.lib;
const ACROSS = 0;
const D = 450;
// the embankment wall and the road on it
g.fillStyle = "#b9b09c";
g.fillRect(-600, 0, 1200, 3.5);
g.fillStyle = "rgba(90, 96, 100, 0.45)";
g.fillRect(-600, 2.6, 1200, 0.9);
g.fillStyle = "#a59d8a";
g.fillRect(-600, -1, 1200, 1);
// trees behind and among the houses
for (let i = 0; i < 26; i++) {
  const x = -560 + 1120 * L.rnd(i, 61);
  const h = 10 + 9 * L.rnd(i, 63);
  g.fillStyle = i % 3 ? "#5f7656" : "#6b8160";
  g.beginPath();
  g.ellipse(x, -1 - h * 0.6, 4 + 4 * L.rnd(i, 65), h * 0.6, 0, 0, Math.PI * 2);
  g.fill();
}
// the houses: walls, steep roofs, windows — some lit
const walls = ["#ece5d4", "#e4d8bb", "#efe9dd", "#ddd0b0", "#e8dcc6"];
let n = 0;
for (let x = -480, i = 0; x < 420; i++) {
  const w = 7 + 8 * L.rnd(i, 71);
  const h = 6 + 6 * L.rnd(i, 73);
  const gap = 1 + 5 * L.rnd(i, 75);
  if ((x > -130 && x < -20) || (x > 100 && x < 150)) {
    x += w + gap;
    continue;
  }
  g.fillStyle = walls[i % walls.length];
  g.fillRect(x, -1 - h, w, h);
  g.fillStyle = "#5d6878";
  g.beginPath();
  g.moveTo(x - 0.6, -1 - h);
  g.lineTo(x + w * 0.5, -1 - h - (3 + 4 * L.rnd(i, 77)));
  g.lineTo(x + w + 0.6, -1 - h);
  g.fill();
  for (let fx = x + 1.4; fx < x + w - 1.6; fx += 2.6) {
    for (const fy of [-1 - h * 0.78, -1 - h * 0.4]) {
      n++;
      const lit = L.rnd(n, 79) > 0.72;
      g.fillStyle = lit ? "#ffd38a" : "#59636f";
      g.fillRect(fx, fy, 1, 1.4);
      if (lit) e.light(fx + 0.5, fy + 0.7, 1.4, "#ffc06a", 0.7);
    }
  }
  x += w + gap;
}
// the church and its spire
g.fillStyle = "#e6dfcf";
g.fillRect(104, -17, 24, 16);
g.fillRect(118, -29, 10, 12);
g.fillStyle = "#566273";
g.beginPath();
g.moveTo(102, -17);
g.lineTo(116, -23);
g.lineTo(130, -17);
g.fill();
g.beginPath();
g.moveTo(117, -29);
g.lineTo(123, -52);
g.lineTo(129, -29);
g.fill();
// the inn's garden: dark lindens, the inn's long house behind, lanterns strung between the trees
g.fillStyle = "#e9e1cc";
g.fillRect(-122, -12, 34, 11);
g.fillStyle = "#5a6676";
g.fillRect(-124, -15, 38, 3);
g.fillStyle = "#ffd08a";
for (let fx = -119; fx < -92; fx += 3.2) g.fillRect(fx, -8, 1.2, 1.6);
e.light(-105, -7, 5, "#ffc070", 0.8);
g.fillStyle = "#4f6648";
for (let i = 0; i < 7; i++) {
  const x = -88 + 10 * i + 3 * L.rnd(i, 81);
  g.beginPath();
  g.ellipse(x, -9 - 2 * L.rnd(i, 83), 5.5, 8, 0, 0, Math.PI * 2);
  g.fill();
}
const tones = ["#ffe4a0", "#ffd27a", "#fff1d0", "#ffc985"];
for (let s = 0; s < 3; s++) {
  const y0 = -5.5 - s * 1.6;
  for (let i = 0; i < 16; i++) {
    const x = -90 + i * 4.3 + 1.2 * L.rnd(i + s * 20, 85);
    const y = y0 + 1.1 * Math.sin((i / 15) * Math.PI * 3);
    g.fillStyle = tones[(i + s) % tones.length];
    g.beginPath();
    g.arc(x, y, 0.55, 0, Math.PI * 2);
    g.fill();
    e.light(x, y, 1.1, tones[(i + s) % tones.length], 0.9);
  }
}
e.at(-60, -7, "garden");
// the ferry's landing below the town, its lamp
g.fillStyle = "#7d6e5a";
g.fillRect(28, 1.5, 22, 0.8);
g.fillStyle = "#3e3a36";
g.fillRect(48, -3, 0.4, 4.5);
g.fillStyle = "#ffd890";
g.fillRect(47.6, -3.6, 1.2, 1);
e.light(48.2, -3.1, 2.4, "#ffc070", 1);
e.at(40, 1, "landing");
L.unfinish(g, [-600, -55, 600, 3.5], ACROSS, D);
