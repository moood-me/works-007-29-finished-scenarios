// The bench's edge toward the eye (5.45 m ahead, across −0.5…2.9): the board's thick edge and the plank supports under it.
const L = e.lib;
g.fillStyle = "#9e8662";
g.fillRect(-1.7, -0.45, 3.4, 0.06);
g.fillStyle = "rgba(60,46,32,0.45)";
g.fillRect(-1.7, -0.39, 3.4, 0.012);
g.fillStyle = "#8a7353";
for (const x of [-1.5, 0.05, 1.5]) g.fillRect(x - 0.05, -0.39, 0.1, 0.39);
L.paper(g, -1.7, -0.45, 3.4, 0.45, 1.0);
