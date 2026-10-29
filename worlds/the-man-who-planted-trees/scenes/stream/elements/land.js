// The land, from above (x across, y toward the viewer; its centre 300 m ahead, so a point `d` metres ahead is at
// y = 300 − d), draped over the relief: the dry ochre valley floor, new green along the stream and its wet dark banks
// with white stones, the darker earth under the young oaks up the slope, the stream on up the slope among them, and
// the path Lina's feet and Elzéard's have worn from the village to the hives. As the years have it (`year`): in the
// first chapter the slope bare and the bed dry and white with stones (`stream` false); in the second as above; from
// the third the valley floor a meadow with its flowers, the grown wood's floor dark under the trees
const L = e.lib, Y = (d) => 300 - d, R = () => e.rnd(), year = e.state.year, running = !!e.state.stream;
const wood = year >= 20 ? "grown" : year >= 6 ? "young" : "bare";
const edge = (a) => Math.min(60, 19.5 + 0.02 * (a - 3) * (a - 3));
g.fillStyle = wood === "grown" ? "#9fa26a" : "#a6966f";
g.fillRect(-800, -340, 1600, 640);
// under the oaks: darker earth, from the wood's edge up the slope (bare earth, a little darker, before they grow)
g.fillStyle = wood === "grown" ? "#5c5a40" : wood === "young" ? "#77735a" : "#9d8e6a";
g.beginPath();
g.moveTo(-800, Y(640));
for (let a = -800; a <= 800; a += 8) g.lineTo(a, Y(edge(a) - 1.5));
g.lineTo(800, Y(640));
g.closePath();
g.fill();
// and farther up, darker still
g.fillStyle = wood === "grown" ? "#525338" : wood === "young" ? "#6c6d52" : "#968866";
g.fillRect(-800, Y(640), 1600, Y(90) - Y(640));
// broad sweeps far off, patches of scrub and bare dust near
for (let i = 0; i < 90; i++) {
  const d = 30 + Math.pow(R(), 1.3) * 300, x = (R() - 0.5) * (40 + d * 3), w = 6 + d * (0.05 + R() * 0.1), h = w * (0.2 + R() * 0.2);
  g.fillStyle = R() < 0.5 ? "rgba(96, 100, 74, 0.5)" : "rgba(132, 128, 96, 0.45)";
  g.beginPath();
  g.ellipse(x, Y(d), w, h, 0, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 240; i++) {
  const d = 1 + Math.pow(R(), 1.3) * 26, x = (R() - 0.5) * (14 + d * 2.4), r = 0.2 + R() * (0.25 + d * 0.03);
  const first = R() < 0.55;
  if (wood === "grown") g.fillStyle = first ? "rgba(118, 136, 78, 0.45)" : "rgba(190, 180, 116, 0.4)";
  else g.fillStyle = first ? "rgba(132, 118, 84, 0.35)" : "rgba(186, 168, 126, 0.4)";
  g.beginPath();
  g.ellipse(x, Y(d), r * (1.2 + R()), r * (0.6 + R() * 0.5), R() * 3, 0, Math.PI * 2);
  g.fill();
}
// fallen leaves and twigs under the nearest oaks (none before they grow)
for (let i = 0; i < (wood === "bare" ? 0 : 500); i++) {
  const a = (R() - 0.5) * 90, d = edge(a) + R() * 30, r = 0.05 + R() * 0.1;
  g.fillStyle = R() < 0.5 ? "#5d5c45" : "#8a8364";
  g.beginPath();
  g.ellipse(a, Y(d), r * 1.6, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the stream's line: bands of a width that follows it, from the valley up into the wood
const along = (from, to, step, width, colour) => {
  g.strokeStyle = colour;
  g.lineCap = "round";
  for (let d = from; d < to; d += step) {
    g.lineWidth = width(d);
    g.beginPath();
    g.moveTo(L.streamX(d), Y(d));
    g.lineTo(L.streamX(d + step), Y(d + step));
    g.stroke();
  }
};
if (running) {
  along(-4, 46, 0.5, (d) => L.streamW(d) + 4.5 - d * 0.05, wood === "grown" ? "rgba(110, 132, 80, 0.4)" : "rgba(128, 140, 92, 0.25)");
  along(-4, 160, 0.5, (d) => L.streamW(d) + 0.5, "#7d6c52");
  along(30, 160, 0.5, (d) => L.streamW(d) * 0.6, "#a9b5ba");
} else {
  // the dry bed: pale, white with stones
  along(-4, 160, 0.5, (d) => L.streamW(d) + 0.6, "#b7ae99");
  along(-4, 160, 0.5, (d) => L.streamW(d) * 0.7, "#cec7b5");
  for (let i = 0; i < 600; i++) {
    const d = -3 + Math.pow(R(), 1.3) * 60, x = L.streamX(d) + (R() - 0.5) * (L.streamW(d) + 0.4), r = 0.05 + R() * 0.12;
    g.fillStyle = R() < 0.6 ? "#e2ddd0" : "#bdb6a7";
    g.beginPath();
    g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
// the new green on the banks, in patches (once the water runs)
for (let i = 0; i < (running ? 700 : 0); i++) {
  const d = -3 + Math.pow(R(), 1.2) * 46, side = R() < 0.5 ? -1 : 1, x = L.streamX(d) + side * (L.streamW(d) / 2 + 0.3 + Math.pow(R(), 1.6) * 2.6), r = 0.12 + R() * 0.35;
  g.fillStyle = R() < 0.5 ? "rgba(122, 140, 86, 0.55)" : "rgba(146, 160, 104, 0.5)";
  g.beginPath();
  g.ellipse(x, Y(d), r * 1.6, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// white stones along the water's edges
for (let i = 0; i < 260; i++) {
  const d = -2 + R() * 44, side = R() < 0.5 ? -1 : 1, x = L.streamX(d) + side * (L.streamW(d) / 2 + 0.1 + R() * 0.8), r = 0.04 + R() * 0.1;
  g.fillStyle = R() < 0.6 ? "#d8d3c7" : "#b9b3a6";
  g.beginPath();
  g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the worn path along the right bank, from the village behind the viewer to the hives
const path = (w, colour) => {
  g.strokeStyle = colour;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(1.8, Y(-3));
  g.bezierCurveTo(1.2, Y(5), 0.2, Y(9), 1.2, Y(13));
  g.bezierCurveTo(2.0, Y(15.5), 3.2, Y(16.5), 4.6, Y(17.4));
  g.stroke();
};
path(1.3, "rgba(190, 172, 132, 0.5)");
path(0.7, "#bba886");
// dry grass marks — or, in the meadow, its flowers and seed heads among them
g.lineCap = "round";
for (let i = 0; i < 380; i++) {
  const d = 0.5 + Math.pow(R(), 1.5) * 22, x = (R() - 0.5) * (12 + d * 2), l = 0.08 + R() * 0.16, a = R() * 3;
  if (wood === "grown" && i % 2) {
    g.fillStyle = ["#f1ede0", "#e8d98a", "#b9a3c4", "#d9c56e"][i % 4];
    g.beginPath();
    g.arc(x, Y(d), 0.03 + l * 0.1, 0, Math.PI * 2);
    g.fill();
    continue;
  }
  g.strokeStyle = R() < 0.5 ? (wood === "grown" ? "#8c9a5c" : "#c4ad7a") : "#7d6d4c";
  g.lineWidth = 0.018 + R() * 0.02;
  g.beginPath();
  g.moveTo(x, Y(d));
  g.lineTo(x + Math.cos(a) * l, Y(d) + Math.sin(a) * l);
  g.stroke();
}
