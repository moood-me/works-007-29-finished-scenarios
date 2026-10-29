// The land, from above (x across, y toward the viewer; its centre 1400 m ahead, so a point `d` metres ahead is at
// y = 1400 − d), draped over the relief, as it is in each `time`: the plateau's dust or grass; the trodden square with
// its flagstones round the fountain and the well; the paths — up the slope behind the village, down to the stream on
// the left, out to the plateau's edge on the right and down to the lowlands; the stream's bed (dry and white with
// stones in the prologue, then green-banked with water up the slope); the slope (bare, then under the young oaks,
// then the forest's floor — and its lower edge cleared, as `edge` says); the gardens; the black ground round the
// charcoal heaps; the scree where the plateau breaks off and the lowlands' fields far below
const L = e.lib, t = L.T(e), Y = (d) => 1400 - d, R = () => e.rnd();
const pick = (list) => list[Math.floor(R() * list.length)];
const edge = e.state.edge ?? "whole";
// the plateau's ground
g.fillStyle = ["#a8956a", "#a39468", "#93995f", "#8ba05e"][t];
g.fillRect(-2000, -1500, 4000, 3000);
// broad sweeps on the plateau, far and near: paler dust and darker scrub (dry), or grass and deeper meadow (green)
for (let i = 0; i < 160; i++) {
  const d = 20 + Math.pow(R(), 1.3) * 2800, a = -1900 + R() * 3800, w = 10 + d * (0.08 + R() * 0.2), h = w * (0.08 + R() * 0.1);
  if (a > L.edgeA(d) - 10) continue;
  g.fillStyle = t < 2 ? pick(["rgba(184, 164, 120, 0.55)", "rgba(126, 112, 80, 0.45)"]) : pick(["rgba(124, 146, 80, 0.5)", "rgba(170, 170, 104, 0.45)"]);
  g.beginPath();
  g.ellipse(a, Y(d), w, h, 0, 0, Math.PI * 2);
  g.fill();
}
// the lowlands far below the edge: fields in strips — dry gold and fallow before the war, green after — hedged, a
// river winding through them
for (let i = 0; i < 230; i++) {
  const d = 40 + Math.pow(R(), 0.8) * 2850, a0 = L.edgeA(d) + 45, a = a0 + R() * (1990 - a0), w = 16 + R() * (18 + d * 0.05), h = 8 + R() * (8 + d * 0.025);
  if (a0 > 1990) continue;
  g.fillStyle = t < 2 ? pick(["#a39a68", "#b7a874", "#8d8a5c", "#c2b07a", "#9c8f62"]) : pick(["#8f9d60", "#a8a86c", "#7d8f56", "#b9b27a", "#97a364"]);
  g.save();
  g.translate(a, Y(d));
  g.rotate((R() - 0.5) * 0.6);
  g.fillRect(-w / 2, -h / 2, w, h);
  g.restore();
}
g.strokeStyle = "#a9b8c0";
g.lineWidth = 7;
g.beginPath();
g.moveTo(260, Y(2900));
g.bezierCurveTo(420, Y(2200), 300, Y(1500), 520, Y(900));
g.bezierCurveTo(640, Y(560), 900, Y(420), 1990, Y(300));
g.stroke();
// the scree where the plateau breaks off: grey stone along the edge and down its first fall
g.fillStyle = "#9a8f7a";
g.beginPath();
for (let d = -100; d <= 2900; d += 20) g.lineTo(L.edgeA(d) - 1.5, Y(d));
for (let d = 2900; d >= -100; d -= 20) g.lineTo(L.edgeA(d) + 30, Y(d));
g.closePath();
g.fill();
for (let i = 0; i < 160; i++) {
  const d = Math.pow(R(), 1.5) * 300, a = L.edgeA(d) + R() * 26, r = 0.3 + R() * (0.5 + d * 0.01);
  g.fillStyle = pick(["#b8ad98", "#7f7666", "#a39985"]);
  g.beginPath();
  g.ellipse(a, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the slope behind and over the village: under the oaks as they grow; its lower edge as `edge` says
const woodRight = (d) => L.edgeA(d) - 26;
if (t >= 1) {
  g.fillStyle = t === 1 ? "#8e8c66" : "#5f5c42";
  g.beginPath();
  g.moveTo(-2000, Y(L.EDGE_D));
  for (let a = -2000; a <= woodRight(L.EDGE_D); a += 4) g.lineTo(a, Y(L.EDGE_D - 1 + Math.sin(a * 0.37) * 0.8));
  for (let d = L.EDGE_D; d <= 2900; d += 20) g.lineTo(woodRight(d), Y(d));
  g.lineTo(-2000, Y(2900));
  g.closePath();
  g.fill();
  if (t >= 2 && edge !== "whole") {
    // the lower edge cut: a band of open ground — chips and sawdust when fresh, grass and young oaks ten years on
    g.fillStyle = edge === "stumps" ? "#9c8a64" : "#7f8f50";
    g.beginPath();
    g.moveTo(-160, Y(L.EDGE_D - 1.5));
    for (let a = -160; a <= woodRight(57); a += 4) g.lineTo(a, Y(L.EDGE_D - 1.5));
    for (let a = woodRight(57); a >= -160; a -= 4) g.lineTo(a, Y(57 + Math.sin(a * 0.21) * 0.8));
    g.closePath();
    g.fill();
    for (let i = 0; i < 160; i++) {
      const d = L.EDGE_D + R() * 11, a = -150 + R() * (woodRight(d) + 150);
      g.fillStyle = edge === "stumps" ? pick(["#d4c29a", "#c4b08a", "#6f5f48"]) : pick(["#6c7c46", "#93a35d"]);
      g.beginPath();
      g.ellipse(a, Y(d), 0.3 + R() * 0.5, 0.15 + R() * 0.2, R() * 3, 0, Math.PI * 2);
      g.fill();
    }
  }
}
// the bare slope's stones and dry scrub (before the forest), or the leaves on its floor
for (let i = 0; i < 260; i++) {
  const d = 30 + Math.pow(R(), 1.2) * 400, a = -1.2 * d - 20 + R() * (woodRight(d) + 1.2 * d + 20), r = 0.2 + R() * (0.3 + d * 0.006);
  g.fillStyle = t === 0 ? pick(["#bdb2a0", "#8f8676", "#7d6d4c"]) : t === 1 ? pick(["#7a7c5c", "#9c9878"]) : pick(["#6b6448", "#525338"]);
  g.beginPath();
  g.ellipse(a, Y(d), r * 1.5, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the black ground round the charcoal heaps — fresh, cold, grown over; gone by the epilogue
if (t < 3) {
  for (const [a, d, rx, ry] of [[14, 34, 5, 3.6], [20.5, 40, 4.6, 3.4], [17.5, 37, 6, 3]]) {
    g.fillStyle = ["#3d3732", "#55504a", "#68704a"][t];
    g.beginPath();
    g.ellipse(a, Y(d), rx, ry, 0.2, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < 70; i++) {
    const a = 11 + R() * 13, d = 31 + R() * 12;
    g.fillStyle = t === 0 ? pick(["#25211e", "#6b655c"]) : t === 1 ? pick(["#8a847a", "#3f3a35"]) : pick(["#7f8f50", "#5a6442"]);
    g.beginPath();
    g.ellipse(a, Y(d), 0.2 + R() * 0.4, 0.1 + R() * 0.2, R() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
// the stream's bed: dry and white with stones; once the water is back, green banks and the bed under the water (the
// water near is the plane `water`; up the slope the land carries it on)
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
if (t === 0) {
  along(-8, 420, 1, (d) => L.streamW(d) + 0.8, "#b9ad90");
  along(-8, 420, 1, (d) => L.streamW(d) * 0.7, "#d3cab4");
  for (let i = 0; i < 260; i++) {
    const d = -6 + Math.pow(R(), 1.4) * 200, x = L.streamX(d) + (R() - 0.5) * L.streamW(d) * 1.1, r = 0.05 + R() * (0.1 + d * 0.002);
    g.fillStyle = pick(["#ece6d6", "#d9d1bf", "#bfb6a2"]);
    g.beginPath();
    g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
    g.fill();
  }
} else {
  along(-8, 420, 1, (d) => L.streamW(d) + 3.6, t === 1 ? "rgba(122, 140, 80, 0.75)" : "#6f8a4a");
  along(-8, 420, 1, (d) => L.streamW(d) + 0.3, "#6e6550");
  along(33, 420, 1, (d) => L.streamW(d) * 0.7, "#a7b6b6");
  for (let i = 0; i < 120; i++) {
    const d = -6 + R() * 40, side = R() < 0.5 ? -1 : 1, x = L.streamX(d) + side * (L.streamW(d) / 2 + 0.1 + R() * 0.6), r = 0.04 + R() * 0.09;
    g.fillStyle = R() < 0.6 ? "#cfc9ba" : "#a9a394";
    g.beginPath();
    g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
// the square: trodden pale earth; the grass coming in at its edges once people are back
g.fillStyle = ["#bda986", "#b8a684", "#b5a582", "#b3a47f"][t];
g.beginPath();
g.ellipse(0.3, Y(13), 13.5, 9, 0, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 90; i++) {
  const ang = R() * Math.PI * 2, rr = 0.75 + R() * 0.3, a = 0.3 + Math.cos(ang) * 13.5 * rr, d = 13 + Math.sin(ang) * 9 * rr, r = 0.4 + R() * 0.8;
  g.fillStyle = t < 2 ? pick(["rgba(176, 156, 112, 0.6)", "rgba(150, 132, 96, 0.5)"]) : pick(["rgba(120, 142, 76, 0.65)", "rgba(150, 160, 96, 0.55)"]);
  g.beginPath();
  g.ellipse(a, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// flagstones round the fountain and the well
const flags = (a0, d0, rx, ry, n) => {
  for (let i = 0; i < n; i++) {
    const ang = R() * Math.PI * 2, rr = Math.sqrt(R()), a = a0 + Math.cos(ang) * rx * rr, d = d0 + Math.sin(ang) * ry * rr, s = 0.35 + R() * 0.3;
    g.fillStyle = pick(["#b3ab9c", "#a39b8c", "#bfb7a6", "#9a9282"]);
    g.save();
    g.translate(a, Y(d));
    g.rotate(R() * 0.6);
    g.beginPath();
    g.roundRect(-s / 2, -s * 0.4, s, s * 0.8, 0.06);
    g.fill();
    g.restore();
  }
};
flags(-3.4, 12.4, 2.6, 1.9, 70);
flags(4.6, 11.8, 1.6, 1.5, 34);
// the paths: up the slope from the back of the square, to the stream on the left, out to the edge on the right and
// down to the lowlands, and toward the viewer
const path = (w, colour, pts) => {
  g.strokeStyle = colour;
  g.lineWidth = w;
  g.lineCap = "round";
  g.lineJoin = "round";
  g.beginPath();
  pts.forEach(([a, d], i) => (i ? g.lineTo(a, Y(d)) : g.moveTo(a, Y(d))));
  g.stroke();
};
const PATHS = [
  [[0.6, 20], [0.2, 28], [-0.6, 40], [-1.4, 60], [-2, 80], [-4, 110], [-8, 160], [-14, 230], [-22, 320]],
  [[-4.5, 15.5], [-7.5, 21], [-10.4, 26.5], [-12, 29]],
  [[6, 14], [13, 20], [21, 26], [L.edgeA(30), 30], [L.edgeA(36) + 12, 38], [L.edgeA(60) + 40, 60], [L.edgeA(110) + 90, 110]],
  [[0.5, 6], [0.9, -2], [1.4, -12]],
];
for (const pts of PATHS) path(1.6, "rgba(196, 180, 140, 0.55)", pts);
for (const pts of PATHS) path(0.8, t < 2 ? "#c9b48c" : "#c2ae86", pts);
// the gardens: dark turned earth in rows of green — Lina's by the stream from the second chapter, the others as people
// come back
const GARDENS = [[-12.8, 27, 5, 4, 1], [11.5, 24.5, 5, 4.4, 2], [-3.4, 31, 5.6, 3.4, 3], [15.5, 28.5, 4.4, 4, 3], [-15.5, 18, 3.6, 3.2, 3]];
for (const [a, d, w, h, from] of GARDENS) {
  if (t < from) continue;
  g.fillStyle = "#5d4b3a";
  g.fillRect(a - w / 2, Y(d) - h / 2, w, h);
  g.fillStyle = t === 1 ? "#7f9a52" : "#6f8a4a";
  for (let y = -h / 2 + 0.3; y < h / 2 - 0.1; y += 0.55) g.fillRect(a - w / 2 + 0.2, Y(d) + y, w - 0.4, 0.22);
}
// near: dry grass marks and small stones; or clover, and the epilogue's flowers
g.lineCap = "round";
for (let i = 0; i < 420; i++) {
  const d = 0.5 + Math.pow(R(), 1.4) * 36, a = (R() - 0.5) * (8 + d * 2.6), l = 0.08 + R() * 0.16, ang = R() * 3;
  if (Math.hypot((a - 0.3) / 12.5, (d - 13) / 8.2) < 1 && R() < 0.8) continue;
  g.strokeStyle = t < 2 ? pick(["#c4ad7a", "#7d6d4c", "#a89468"]) : pick(["#6f8a4a", "#9aae68", "#7e9656"]);
  g.lineWidth = 0.018 + R() * 0.02;
  g.beginPath();
  g.moveTo(a, Y(d));
  g.lineTo(a + Math.cos(ang) * l, Y(d) + Math.sin(ang) * l);
  g.stroke();
}
for (let i = 0; i < 140; i++) {
  const d = 0.5 + Math.pow(R(), 1.4) * 30, a = (R() - 0.5) * (10 + d * 2), r = 0.03 + R() * 0.08;
  g.fillStyle = R() < 0.5 ? "#bdb2a0" : "#8f8676";
  g.beginPath();
  g.ellipse(a, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
if (t === 3) {
  for (let i = 0; i < 300; i++) {
    const d = 1 + Math.pow(R(), 1.3) * 34, a = (R() - 0.5) * (10 + d * 2.4), r = 0.025 + R() * 0.03;
    if (Math.hypot((a - 0.3) / 12.5, (d - 13) / 8.2) < 1) continue;
    g.fillStyle = pick(["#f1ede0", "#e8d98a", "#b9a3c4", "#d9c56e"]);
    g.beginPath();
    g.arc(a, Y(d), r, 0, Math.PI * 2);
    g.fill();
  }
}
