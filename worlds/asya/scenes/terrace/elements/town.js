// Z., the little town on the far bank, 1.5 km off: its embankment wall, a row of white and pale-yellow houses under
// slate roofs, the church spire, the inn where N. N. lives (the big white house with the long roof, left of the
// church), poplars, the ferry's landing stage. The evening sun is on its fronts.
const L = e.lib;
const ACROSS = -60;
const D = 1480;
// the embankment wall and the road on it
g.fillStyle = "#cbbd9f";
g.fillRect(-700, -4.5, 1400, 5);
g.fillStyle = "#b3a587";
g.fillRect(-700, -1.2, 1400, 1.7);
// poplars behind the houses
for (let i = 0; i < 22; i++) {
  const x = -650 + 1300 * L.rnd(i, 31);
  const h = 22 + 12 * L.rnd(i, 33);
  g.fillStyle = i % 3 ? "#6d8653" : "#7f975f";
  g.beginPath();
  g.ellipse(x, -4.5 - h / 2, 3.2, h / 2, 0, 0, Math.PI * 2);
  g.fill();
}
// the houses: [x, width, height, wall, roof's height]
const walls = ["#f1eadb", "#ebdfbe", "#f4efe4", "#e6d6b0", "#efe4cc"];
const houses = [];
for (let x = -520, i = 0; x < 520; i++) {
  const w = 9 + 10 * L.rnd(i, 41);
  const h = 7 + 6 * L.rnd(i, 43);
  if (Math.abs(x - 40) > 16 && L.rnd(i, 45) > 0.12) houses.push([x, w, h, walls[i % walls.length], 4 + 3 * L.rnd(i, 47)]);
  x += w + 1 + 6 * L.rnd(i, 49);
}
// the inn: bigger, a long roof
houses.push([-150, 30, 13, "#f5f0e6", 6]);
for (const [x, w, h, wall, rh] of houses) {
  g.fillStyle = wall;
  g.fillRect(x, -4.5 - h, w, h);
  g.fillStyle = "#6c7a8a";
  g.beginPath();
  g.moveTo(x - 0.8, -4.5 - h);
  g.lineTo(x + w * 0.5, -4.5 - h - rh);
  g.lineTo(x + w + 0.8, -4.5 - h);
  g.fill();
  g.fillStyle = "#5b6670";
  for (let fx = x + 2; fx < x + w - 2; fx += 3.6) {
    g.fillRect(fx, -4.5 - h * 0.75, 1.3, 1.8);
    g.fillRect(fx, -4.5 - h * 0.38, 1.3, 1.8);
  }
}
// the church: a nave and its spire
g.fillStyle = "#efe8d8";
g.fillRect(28, -24, 26, 19.5);
g.fillRect(34, -36, 12, 12);
g.fillStyle = "#5f6d7c";
g.beginPath();
g.moveTo(26, -24);
g.lineTo(41, -30);
g.lineTo(56, -24);
g.fill();
g.beginPath();
g.moveTo(33, -36);
g.lineTo(40, -62);
g.lineTo(47, -36);
g.fill();
// the landing stage out into the water
g.fillStyle = "#8a7a62";
g.fillRect(180, -2.2, 34, 1.4);
L.unfinish(g, [-700, -65, 700, 1], ACROSS, D);
