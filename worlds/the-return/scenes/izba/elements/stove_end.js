// The stove's end toward the eye (2.9 m ahead, across −3…−1.5): whitewash, the cornice at the top, two little
// niches for drying mittens, the greyed plinth at its foot; over its top's edge a pair of felt boots.
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
g.fillStyle = "#b9ad97";
g.fillRect(-0.75, -0.22, 1.5, 0.22);
g.fillStyle = "rgba(110,94,74,0.4)";
g.fillRect(-0.75, -0.23, 1.5, 0.015);
// on the stove's top, seen over its edge: a pair of grey felt boots drying
g.fillStyle = "#aaa498";
g.beginPath();
g.moveTo(0.18, -1.88);
g.lineTo(0.2, -2.1);
g.lineTo(0.3, -2.1);
g.lineTo(0.31, -1.95);
g.lineTo(0.42, -1.92);
g.lineTo(0.42, -1.88);
g.closePath();
g.fill();
g.fillStyle = "#9c968a";
g.beginPath();
g.moveTo(0.34, -1.88);
g.lineTo(0.36, -2.06);
g.lineTo(0.46, -2.06);
g.lineTo(0.47, -1.94);
g.lineTo(0.57, -1.91);
g.lineTo(0.57, -1.88);
g.closePath();
g.fill();
// the corner toward the room, a line of shade
g.fillStyle = "rgba(150,134,110,0.4)";
g.fillRect(0.7, -1.85, 0.05, 1.85);
