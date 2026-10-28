// The table's front, toward the room: the cloth hanging a hand down over its edge, its red-woven hem; under it the
// table's apron and two square legs; between the legs nothing (the bench and the master's boots behind, in the shade).
// (x −0.98…0.98, the top at y −0.78)
const L = e.lib;
const C = L.C;
g.fillStyle = C.boardDark;
g.fillRect(-0.9, -0.66, 1.8, 0.1);
g.fillRect(-0.9, -0.66, 0.07, 0.66);
g.fillRect(0.83, -0.66, 0.07, 0.66);
g.fillStyle = C.linen;
g.fillRect(-0.97, -0.78, 1.94, 0.18);
L.border(g, -0.97, 0.97, -0.67, 0.06);
g.fillStyle = C.linenShade;
for (let x = -0.9; x < 0.97; x += 0.19) g.fillRect(x, -0.78, 0.012, 0.18);
