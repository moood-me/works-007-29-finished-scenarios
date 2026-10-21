// The bench's edge toward the eye (4.26 m ahead, across 0.2…1.75): the board's thick edge and the plank supports under it.
const L = e.lib;
g.fillStyle = "#9e8662";
g.fillRect(-0.77, -0.45, 1.54, 0.06);
g.fillStyle = "rgba(60,46,32,0.45)";
g.fillRect(-0.77, -0.39, 1.54, 0.012);
g.fillStyle = "#8a7353";
for (const x of [-0.6, 0.6]) g.fillRect(x - 0.05, -0.39, 0.1, 0.39);
L.paper(g, -0.77, -0.45, 1.54, 0.45, 1.0);
