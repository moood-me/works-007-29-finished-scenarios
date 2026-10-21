// A drift close before the eye at the lower left: a long soft mound of snow, its crest sharpened by the wind into a
// curling lip with a blue shadow under it, rime glittering along its top.
// (x −1.8…1.6 m, its foot at 0, up to 0.6)
const C = e.lib.C;
const body = g.createLinearGradient(0, -0.6, 0, 0.05);
body.addColorStop(0, C.snow);
body.addColorStop(1, C.snowShade);
g.fillStyle = body;
g.beginPath();
g.moveTo(-1.8, 0.06);
g.bezierCurveTo(-1.2, -0.3, -0.5, -0.58, 0.15, -0.58);
g.bezierCurveTo(0.8, -0.56, 1.3, -0.22, 1.6, 0.06);
g.closePath();
g.fill();
// (the lip curling toward the eye, the blue shadow under it)
g.fillStyle = C.snowDeep;
g.beginPath();
g.moveTo(-0.8, -0.42);
g.quadraticCurveTo(0.1, -0.56, 0.9, -0.4);
g.quadraticCurveTo(0.2, -0.4, -0.8, -0.36);
g.closePath();
g.fill();
g.fillStyle = "#f4f7fb";
g.beginPath();
g.moveTo(-1.0, -0.45);
g.quadraticCurveTo(0.0, -0.66, 1.0, -0.44);
g.quadraticCurveTo(0.2, -0.52, -1.0, -0.45);
g.closePath();
g.fill();
g.fillStyle = "rgba(255,255,255,0.95)";
for (let i = 0; i < 30; i++) {
  const x = -1.2 + e.rnd() * 2.4;
  const top = -0.58 * Math.exp(-(((x - 0.15) / 1.1) ** 2));
  g.fillRect(x, top + 0.01 + e.rnd() * 0.04, 0.012, 0.012);
}
