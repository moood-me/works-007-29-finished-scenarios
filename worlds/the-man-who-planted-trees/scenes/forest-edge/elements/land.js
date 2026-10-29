// The land, from above (x across, y toward the viewer; its centre 700 m ahead, so a point `d` metres ahead is at
// y = 700 − d), draped over the relief: the meadow on the shelf where the path runs; the floor of the forest to the left
// and up the hill; the stream along the forest's edge and on into it; the worn path from the wood down past the people
// to the valley; the valley's fields and the village's gardens far below, and the far side's fields rising beyond.
// As the years have it (`year`): in the first chapter all of it bare and dry — dust and scrub where the meadow will be,
// bare earth up the hill, the stream's bed dry and white with stones (`stream` 0), the valley's fields fallow; in the
// second the young wood's floor darker under its oaks, new green along the running water; from the third the summer
// meadow with its flowers, the forest's dark leaf-strewn floor, the valley's fields golden and green
const L = e.lib, Y = (d) => 700 - d, R = () => e.rnd(), year = e.state.year, running = !!e.state.stream;
const wood = year >= 20 ? "grown" : year >= 6 ? "young" : "bare";
// the meadow
g.fillStyle = wood === "grown" ? "#a5a568" : wood === "young" ? "#a59b6c" : "#a6966f";
g.fillRect(-1500, -720, 3000, 1440);
// the valley floor and its far side: fields in long strips, hedged — golden, green and fallow; dry and fallow before
// the water came back
const FIELDS = wood === "grown" ? ["#9aa260", "#c0b274", "#b3ad7c", "#8c9658", "#c9bd85"] : ["#b1a27a", "#a69874", "#bdb08a", "#9d9172", "#b8a47a"];
for (let i = 0; i < 260; i++) {
  const d = 110 + Math.pow(R(), 0.9) * 1250, a = 20 + R() * 1300 - 200 * (d < 300 ? 0 : 1), w = 18 + R() * (20 + d * 0.06), h = 8 + R() * (10 + d * 0.03);
  if (a - L.browA(d) < 30) continue;
  g.fillStyle = FIELDS[Math.floor(R() * 5)];
  g.save();
  g.translate(a, Y(d));
  g.rotate((R() - 0.5) * 0.5);
  g.fillRect(-w / 2, -h / 2, w, h);
  g.restore();
}
g.strokeStyle = wood === "grown" ? "#6f7a4c" : "#8a7d5c";
g.lineWidth = 1.6;
for (let i = 0; i < 50; i++) {
  const d = 140 + R() * 900, a = 60 + R() * 1100, l = 30 + R() * 90, t = (R() - 0.5) * 0.6 + (R() < 0.5 ? 0 : Math.PI / 2);
  if (a - L.browA(d) < 40) continue;
  g.beginPath();
  g.moveTo(a, Y(d));
  g.lineTo(a + Math.cos(t) * l, Y(d) + Math.sin(t) * l);
  g.stroke();
}
// the village's gardens and lanes round its houses (the element `village`, 235 m ahead and 120 m right): green where
// people have come back, dust where they have gone
const GARDENS = wood === "grown" ? ["#7f9150", "#93a35d", "#6c7c46", "#a59a64"] : ["#a39570", "#998b68", "#8f8a62", "#b0a07a"];
for (let i = 0; i < 70; i++) {
  const a = 90 + R() * 62, d = 206 + R() * 58, w = 3 + R() * 5, h = 2.5 + R() * 4;
  g.fillStyle = GARDENS[Math.floor(R() * 4)];
  g.fillRect(a - w / 2, Y(d) - h / 2, w, h);
}
g.strokeStyle = "#c9b98e";
g.lineWidth = 1.4;
g.beginPath();
g.moveTo(82, Y(200));
g.bezierCurveTo(104, Y(220), 122, Y(232), 158, Y(250));
g.moveTo(118, Y(206));
g.lineTo(124, Y(266));
g.stroke();
// the forest's floor from its edge up the hill to the ridge: dark and leaf-strewn under the grown wood; darker earth
// under the young one; bare, a little darker than the meadow, where nothing is planted yet
g.fillStyle = wood === "grown" ? "#5c5a40" : wood === "young" ? "#7a7458" : "#998a66";
g.beginPath();
g.moveTo(-1500, Y(-20));
for (let d = -20; d <= 440; d += d < 60 ? 0.5 : 4) g.lineTo(L.edgeA(d) + 0.6, Y(d));
g.lineTo(-1500, Y(440));
g.closePath();
g.fill();
g.fillStyle = wood === "grown" ? "#525338" : wood === "young" ? "#6e6c52" : "#928462";
g.beginPath();
g.moveTo(-1500, Y(-20));
for (let d = -20; d <= 440; d += d < 60 ? 1 : 4) g.lineTo(L.edgeA(d) - 3 - d * 0.02, Y(d));
g.lineTo(-1500, Y(440));
g.closePath();
g.fill();
// fallen leaves and twigs along the edge and under the near trees (none where no tree stands yet)
if (wood !== "bare") {
  for (let i = 0; i < (wood === "grown" ? 420 : 200); i++) {
    const d = 2 + Math.pow(R(), 1.4) * 60, a = L.edgeA(d) + 1 - Math.pow(R(), 1.5) * (10 + d * 0.9), r = 0.05 + R() * 0.12;
    g.fillStyle = R() < 0.5 ? "#6b6448" : "#837a55";
    g.beginPath();
    g.ellipse(a, Y(d), r * 1.6, r, R() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
// the meadow near: broad patches of deeper green and of seeding gold — or, before, of low scrub and bare dust
for (let i = 0; i < 160; i++) {
  const d = 1 + Math.pow(R(), 1.2) * 70, a = L.edgeA(d) + 1 + R() * (8 + d * 1.1), r = 0.3 + R() * (0.4 + d * 0.05);
  const first = R() < 0.5;
  if (wood === "grown") g.fillStyle = first ? "rgba(124, 138, 78, 0.5)" : "rgba(196, 184, 118, 0.45)";
  else g.fillStyle = first ? "rgba(128, 112, 78, 0.5)" : "rgba(182, 162, 120, 0.5)";
  g.beginPath();
  g.ellipse(a, Y(d), r * (1.4 + R()), r * (0.6 + R() * 0.5), R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the stream's line: the green of its banks, the bed, and up in the wood the water seen between the trunks — or the dry
// bed, pale with white stones
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
  along(-6, 34, 0.5, (d) => L.streamW(d) + 3.4, wood === "grown" ? "rgba(112, 132, 76, 0.6)" : "rgba(122, 140, 86, 0.45)");
  along(-6, 34, 0.5, (d) => L.streamW(d) + 0.2, "#6e6550");
  along(34, 160, 1, (d) => L.streamW(d) + 0.5, "#6e6550");
  along(28, 160, 1, (d) => L.streamW(d) * 0.6, "#a7b6b6");
} else {
  along(-6, 160, 0.5, (d) => L.streamW(d) + 0.6, "#b4ab96");
  along(-6, 160, 0.5, (d) => L.streamW(d) * 0.7, "#cbc4b2");
  for (let i = 0; i < 500; i++) {
    const d = -4 + Math.pow(R(), 1.3) * 60, x = L.streamX(d) + (R() - 0.5) * (L.streamW(d) + 0.4), r = 0.05 + R() * 0.12;
    g.fillStyle = R() < 0.6 ? "#e2ddd0" : "#bdb6a7";
    g.beginPath();
    g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
// stones at the water's edges
for (let i = 0; i < 160; i++) {
  const d = -4 + R() * 34, side = R() < 0.5 ? -1 : 1, x = L.streamX(d) + side * (L.streamW(d) / 2 + 0.1 + R() * 0.6), r = 0.04 + R() * 0.09;
  g.fillStyle = R() < 0.6 ? "#cfc9ba" : "#a9a394";
  g.beginPath();
  g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: out of the wood along the stream's near bank, past where the people stand, then off to the right over
// the brink and down the valley's side to the village
const path = (w, colour) => {
  g.strokeStyle = colour;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(-1.6, Y(30));
  g.bezierCurveTo(-1.2, Y(22), -0.6, Y(16), 0.4, Y(11));
  g.bezierCurveTo(1.4, Y(7), 2.2, Y(3), 4.2, Y(-6));
  g.moveTo(1.3, Y(7.6));
  g.bezierCurveTo(6, Y(10), 16, Y(18), 26, Y(34));
  g.bezierCurveTo(40, Y(60), 62, Y(110), 76, Y(160));
  g.bezierCurveTo(88, Y(190), 100, Y(208), 116, Y(222));
  g.stroke();
};
path(1.3, "rgba(196, 180, 136, 0.45)");
path(0.65, "#c4b088");
// the meadow's flowers and seed heads near: white, pale yellow, a little violet — or, before, dry grass marks
for (let i = 0; i < 380; i++) {
  const d = 0.5 + Math.pow(R(), 1.5) * 24, a = L.edgeA(d) + 0.5 + R() * (10 + d * 1.6), r = 0.025 + R() * 0.03;
  if (Math.abs(a - L.streamX(d)) < L.streamW(d) / 2 + 0.6) continue;
  if (wood === "grown") {
    g.fillStyle = ["#f1ede0", "#e8d98a", "#b9a3c4", "#d9c56e"][Math.floor(R() * 4)];
    g.beginPath();
    g.arc(a, Y(d), r, 0, Math.PI * 2);
    g.fill();
  } else {
    const l = r * 4, t = R() * 3;
    g.strokeStyle = R() < 0.5 ? "#c4ad7a" : "#7d6d4c";
    g.lineWidth = 0.02;
    g.beginPath();
    g.moveTo(a, Y(d));
    g.lineTo(a + Math.cos(t) * l, Y(d) + Math.sin(t) * l);
    g.stroke();
  }
}
