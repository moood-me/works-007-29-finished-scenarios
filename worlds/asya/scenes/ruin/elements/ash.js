// The ash at the ruin's edge, 5.6 m ahead on the left (the game's «ясень с Мадонной»): a grey trunk leaning a little
// toward the wall, a small wooden shrine nailed to it with a blue-robed Madonna; its crown overhead, mostly above the
// frame — what is seen of it are the long feathered fronds hanging into the frame's top, in the wind (layers `crown`
// and `fronds`). Being toward the frame's left, it is mostly a pencil drawing.
const L = e.lib;
const ACROSS = -3.7;
const D = 5.6;
const box = [-3.4, -10, 5.4, 0.05];
// the trunk and the boughs
g.fillStyle = "#9b958a";
g.beginPath();
g.moveTo(-0.24, 0.02);
g.bezierCurveTo(-0.2, -2, 0.05, -3.6, 0.3, -5.2);
g.lineTo(0.62, -5.2);
g.bezierCurveTo(0.42, -3.6, 0.24, -2, 0.26, 0.02);
g.closePath();
g.fill();
g.strokeStyle = "#8d877b";
g.lineCap = "round";
for (const [x1, y1, x2, y2, w] of [[0.45, -5, 2.6, -7.8, 0.16], [0.4, -5, -1.4, -8.4, 0.14], [0.5, -5.1, 0.9, -9.2, 0.15], [1.4, -6.2, 3.6, -6.6, 0.08]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x1, y1);
  g.quadraticCurveTo((x1 + x2) / 2 + 0.3, (y1 + y2) / 2 - 0.4, x2, y2);
  g.stroke();
}
// the bark's fissures
g.strokeStyle = "rgba(92, 86, 78, 0.5)";
g.lineWidth = 0.02;
for (let i = 0; i < 14; i++) {
  const x = -0.16 + 0.34 * L.rnd(i, 151);
  const y = -0.2 - 4.6 * L.rnd(i, 153);
  g.beginPath();
  g.moveTo(x + y * -0.06, y);
  g.lineTo(x + (y - 0.6) * -0.06, y - 0.6);
  g.stroke();
}
// the shrine: a little gabled box on the trunk, the Madonna in it in blue and white
g.fillStyle = "#7a5c42";
g.fillRect(-0.12, -1.98, 0.3, 0.36);
g.beginPath();
g.moveTo(-0.17, -1.98);
g.lineTo(0.03, -2.14);
g.lineTo(0.23, -1.98);
g.fill();
g.fillStyle = "#efe6d4";
g.fillRect(-0.07, -1.93, 0.2, 0.27);
g.fillStyle = "#4f6ea8";
g.beginPath();
g.moveTo(0.03, -1.88);
g.lineTo(0.09, -1.67);
g.lineTo(-0.03, -1.67);
g.fill();
g.fillStyle = "#e9c9a6";
g.beginPath();
g.arc(0.03, -1.86, 0.025, 0, Math.PI * 2);
g.fill();
e.at(0.03, -1.8, "madonna");
L.unfinish(g, box, ACROSS, D);
// a feathered frond of the ash: a drooping stem with pairs of narrow leaflets, from (x, y), `len` long, hanging `droop`
const frond = (c, x, y, len, droop, tone, k) => {
  const ex = x + len * 0.55;
  const ey = y + droop;
  c.strokeStyle = "#6f7f4a";
  c.lineWidth = 0.02;
  c.beginPath();
  c.moveTo(x, y);
  c.quadraticCurveTo(x + len * 0.45, y - 0.1, ex, ey);
  c.stroke();
  c.fillStyle = tone;
  for (let j = 1; j <= 7; j++) {
    const u = j / 7.5;
    const px = x + (ex - x) * u;
    const py = y + (ey - y) * u * u - 0.1 * u * (1 - u) * 2;
    for (const side of [-1, 1]) {
      c.beginPath();
      c.ellipse(px + side * 0.06, py + 0.05, 0.11, 0.035, side * 0.9 + 0.3 * L.rnd(k * 20 + j, 155), 0, Math.PI * 2);
      c.fill();
    }
  }
  c.beginPath();
  c.ellipse(ex, ey + 0.06, 0.035, 0.11, 0.2, 0, Math.PI * 2);
  c.fill();
};
const greens = ["#7f9a52", "#90a95c", "#6f8c4a", "#9cb468"];
// the crown's mass over the frame (its lower clouds of leaves), slow in the wind
e.layer("crown", { wind: { strength: 0.2, gust: 0.3 }, pivot: [0.5, -5.2] }, (c) => {
  for (let i = 0; i < 70; i++) {
    const x = -3.2 + 7.8 * L.rnd(i, 157);
    const y = -9.8 + 4.6 * L.rnd(i, 159) * (0.5 + 0.5 * (1 - Math.abs(x - 0.6) / 4.2));
    frond(c, x, y, 0.7 + 0.5 * L.rnd(i, 161), 0.3 + 0.3 * L.rnd(i, 163), greens[i % 4], i);
  }
  L.unfinish(c, [-3.4, -10, 5.4, -4], ACROSS, D);
});
// the long fronds hanging lowest, into the frame, swaying more
e.layer("fronds", { wind: { strength: 0.45, gust: 0.5 }, pivot: [1.2, -6.4] }, (c) => {
  for (let i = 0; i < 26; i++) {
    const x = -1.2 + 5.6 * L.rnd(i, 165);
    const y = -6.6 + 1.1 * L.rnd(i, 167);
    frond(c, x, y, 0.9 + 0.6 * L.rnd(i, 169), 0.7 + 0.6 * L.rnd(i, 171), greens[(i + 1) % 4], i + 100);
  }
  L.unfinish(c, [-1.4, -7, 5.4, -3.2], ACROSS, D);
});
