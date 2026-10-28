// The sleigh's far side, seen from within over the straw: the inner face of its boards, greyer and plainer than the
// outside, its rim, its high rounded back; snow along the rim. The same outline as the near side (sleigh_side), a
// sleigh's width (0.95 m) behind it on the sleigh's anchor.
const L = e.lib;
const body = new Path2D();
body.moveTo(-1.06, -0.04);
body.lineTo(-1.06, -0.47);
body.lineTo(0.68, -0.52);
body.quadraticCurveTo(0.74, -0.86, 0.9, -0.92);
body.quadraticCurveTo(1.08, -0.96, 1.12, -0.86);
body.lineTo(1.12, -0.04);
body.closePath();
g.fillStyle = "#56483a";
g.fill(body);
g.save();
g.clip(body);
for (let y = -0.04; y > -1.0; y -= 0.16) {
  g.fillStyle = "rgba(30,24,20,0.5)";
  g.fillRect(-1.1, y - 0.01, 2.3, 0.01);
}
g.restore();
g.strokeStyle = "#3c3128";
g.lineWidth = 0.05;
g.lineCap = "round";
g.beginPath();
g.moveTo(-1.06, -0.47);
g.lineTo(0.68, -0.52);
g.stroke();
L.snowCap(g, -1.06, 0.66, -0.5, 0.03, 95);
L.snowCap(g, 0.74, 1.12, -0.93, 0.05, 96);
