// A bench's front: a thick plank seat on square legs, its edge worn round. Copies stand along the walls (behind the
// table, along the left wall, along the stove's side), each scaled to its length.
// (x −1.2…1.2, the seat 0.45 m up)
const L = e.lib;
const C = L.C;
g.fillStyle = C.boardDark;
for (const x of [-1.1, -0.04, 1.03]) g.fillRect(x, -0.4, 0.07, 0.4);
g.fillStyle = C.board;
g.fillRect(-1.2, -0.45, 2.4, 0.06);
g.fillStyle = "rgba(230,206,166,0.4)";
g.fillRect(-1.2, -0.45, 2.4, 0.015);
