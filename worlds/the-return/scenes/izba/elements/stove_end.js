// The stove's end toward the eye (2.9 m ahead, across −3…−1.5): whitewash, the cornice at the top, two little
// niches for drying mittens, the foot darkened where the floor is washed.
const L = e.lib;
L.whitewash(g, 91, -0.75, -1.85, 1.5, 1.85, 0.6);
g.fillStyle = "#d8cfbb";
g.fillRect(-0.77, -1.88, 1.54, 0.07);
g.fillStyle = "rgba(120,104,82,0.35)";
g.fillRect(-0.77, -1.81, 1.54, 0.02);
for (const x of [-0.35, 0.2]) {
  g.fillStyle = "#8f806b";
  g.beginPath();
  g.moveTo(x, -1.05);
  g.lineTo(x, -1.2);
  g.quadraticCurveTo(x + 0.09, -1.28, x + 0.18, -1.2);
  g.lineTo(x + 0.18, -1.05);
  g.closePath();
  g.fill();
}
// a pair of grey mittens drying in one of them
g.fillStyle = "#a39d92";
g.fillRect(0.23, -1.17, 0.05, 0.1);
g.fillRect(0.29, -1.16, 0.05, 0.09);
g.fillStyle = "rgba(120,100,76,0.35)";
g.fillRect(-0.75, -0.08, 1.5, 0.08);
// the corner toward the room, a line of shade
g.fillStyle = "rgba(150,134,110,0.4)";
g.fillRect(0.7, -1.85, 0.05, 1.85);
