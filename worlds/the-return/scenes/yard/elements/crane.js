// The well's sweep (zhuravl): a forked post 4.3 m tall, the long sweep pole across its fork — its heavy end low on the
// right with a stone tied to it, its thin end high over the well — and, hanging from that end (a layer: it sways a
// little in the wind about the tip), the bucket's pole down to the bucket over the well's mouth.
const TIP = [-2.0, -6.8], PIVOT = [0, -4.3], HEAVY = [1.375, -2.58];
g.fillStyle = "#6a5d4c";
g.beginPath();
g.moveTo(-0.14, 0);
g.lineTo(-0.1, -4.25);
g.lineTo(0.1, -4.25);
g.lineTo(0.14, 0);
g.closePath();
g.fill();
for (const s of [-1, 1]) g.fillRect(s * 0.1 - 0.04, -4.55, 0.08, 0.32);
// the sweep: a tapered pole from the heavy end to the tip
const dx = TIP[0] - HEAVY[0], dy = TIP[1] - HEAVY[1], len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
g.fillStyle = "#76684f";
g.beginPath();
g.moveTo(HEAVY[0] + nx * 0.07, HEAVY[1] + ny * 0.07);
g.lineTo(TIP[0] + nx * 0.025, TIP[1] + ny * 0.025);
g.lineTo(TIP[0] - nx * 0.025, TIP[1] - ny * 0.025);
g.lineTo(HEAVY[0] - nx * 0.07, HEAVY[1] - ny * 0.07);
g.closePath();
g.fill();
g.fillStyle = "#3f3a33";
g.beginPath();
g.arc(PIVOT[0], PIVOT[1], 0.05, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#5c564e";
g.beginPath();
g.ellipse(HEAVY[0] + 0.05, HEAVY[1] + 0.14, 0.2, 0.15, 0.3, 0, Math.PI * 2);
g.fill();
// the bucket's pole and the bucket, hanging from the tip
e.layer("bucket", { pivot: TIP, wind: { strength: 0.1, gust: 0.4 }, box: [-2.3, -6.9, -1.7, -1.0] }, (g) => {
  g.fillStyle = "#7d6f58";
  g.fillRect(TIP[0] - 0.02, TIP[1], 0.04, 6.8 - 1.55);
  g.fillStyle = "#3d3a36";
  g.fillRect(TIP[0] - 0.13, -1.56, 0.26, 0.025);
  g.fillStyle = "#7d7c78";
  g.beginPath();
  g.moveTo(TIP[0] - 0.14, -1.54);
  g.lineTo(TIP[0] + 0.14, -1.54);
  g.lineTo(TIP[0] + 0.11, -1.16);
  g.lineTo(TIP[0] - 0.11, -1.16);
  g.closePath();
  g.fill();
  g.fillStyle = "#55534f";
  g.fillRect(TIP[0] - 0.13, -1.4, 0.26, 0.03);
  e.at(TIP[0], -1.35, "bucket");
});
