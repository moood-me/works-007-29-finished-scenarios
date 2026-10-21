// The table's end toward the stove (facing the room's right): the cloth hanging over it, the apron, two legs.
// (x −0.47 at the table's front … 0.47 at the wall, the top at y −0.78)
const L = e.lib;
const C = L.C;
g.fillStyle = C.boardDark;
g.fillRect(-0.44, -0.66, 0.88, 0.1);
g.fillRect(-0.44, -0.66, 0.07, 0.66);
g.fillRect(0.37, -0.66, 0.07, 0.66);
g.fillStyle = C.linen;
g.fillRect(-0.47, -0.78, 0.94, 0.18);
L.border(g, -0.47, 0.47, -0.67, 0.06);
