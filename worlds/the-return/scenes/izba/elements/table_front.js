// The table's long side toward the eye (3.7 m ahead, 1.1 m long, 0.76 high): the top's edge, the apron under it with a
// drawer, the four square legs and the stretcher low between them, the dark under the table; the hem of the linen
// cloth hanging over the edge at the left end.
const L = e.lib;
g.fillStyle = "#5a4836";
g.fillRect(-0.5, -0.64, 1.0, 0.56);
g.fillStyle = "#a88e68";
g.fillRect(-0.55, -0.76, 1.1, 0.045);
g.fillStyle = "#987e5a";
g.fillRect(-0.52, -0.715, 1.04, 0.1);
g.fillStyle = "rgba(60,46,32,0.5)";
g.fillRect(-0.52, -0.615, 1.04, 0.012);
g.fillStyle = "#8a7050";
g.fillRect(-0.12, -0.7, 0.24, 0.07);
g.fillStyle = "#3d3833";
g.fillRect(-0.02, -0.67, 0.04, 0.015);
for (const x of [-0.52, 0.46]) {
  g.fillStyle = "#987e5a";
  g.fillRect(x, -0.62, 0.06, 0.62);
}
for (const x of [-0.4, 0.36]) {
  g.fillStyle = "#7d6648";
  g.fillRect(x, -0.62, 0.045, 0.6);
}
g.fillStyle = "#8a7050";
g.fillRect(-0.46, -0.18, 0.92, 0.04);
L.strokes(g, 103, -0.55, -0.76, 1.1, 0.16, ["#b89d76", "#7e6648"], 6, 0.35, 0.03, 0, 0.3);
// the cloth's hem over the edge at the left
g.fillStyle = "#e9e2d2";
g.beginPath();
g.moveTo(-0.55, -0.765);
g.lineTo(-0.18, -0.765);
g.lineTo(-0.2, -0.62);
g.quadraticCurveTo(-0.37, -0.6, -0.55, -0.63);
g.closePath();
g.fill();
g.fillStyle = "#a8463a";
g.fillRect(-0.55, -0.655, 0.36, 0.015);
L.paper(g, -0.55, -0.77, 1.1, 0.77, 0.6, 0.4);
