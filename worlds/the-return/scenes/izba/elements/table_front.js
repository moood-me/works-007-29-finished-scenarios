// The table's long side toward the eye (2.45 m ahead): the top's thick edge, the apron board under it, the two near
// legs, and the far legs seen between them — the floor showing through.
const L = e.lib;
g.fillStyle = "#a58c66";
g.fillRect(-0.6, -0.76, 1.2, 0.05);
g.fillStyle = "#8d7556";
g.fillRect(-0.55, -0.71, 1.1, 0.1);
g.fillStyle = "rgba(60,46,32,0.4)";
g.fillRect(-0.55, -0.62, 1.1, 0.012);
g.fillStyle = "#7d6649";
g.fillRect(-0.47, -0.62, 0.035, 0.62);
g.fillRect(0.42, -0.62, 0.035, 0.62);
g.fillStyle = "#937a5a";
g.fillRect(-0.56, -0.71, 0.07, 0.71);
g.fillRect(0.49, -0.71, 0.07, 0.71);
// a stretcher low between the near legs
g.fillStyle = "#86704f";
g.fillRect(-0.5, -0.2, 1.0, 0.04);
L.strokes(g, 111, -0.6, -0.76, 1.2, 0.76, ["#b39a72", "#6f5a40"], 40, 0.2, 0.012, Math.PI / 2, 0.4);
L.paper(g, -0.6, -0.76, 1.2, 0.76, 0.5);
