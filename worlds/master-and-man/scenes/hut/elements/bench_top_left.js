// A bench's seat seen from above: a thick worn plank. Copies over each bench.
// (x −1.2…1.2 along it, y −0.16…0.16 across)
const L = e.lib;
const C = L.C;
g.fillStyle = C.board;
g.fillRect(-1.2, -0.16, 2.4, 0.32);
g.fillStyle = "rgba(230,206,166,0.35)";
g.fillRect(-1.2, -0.06, 2.4, 0.08);
g.fillStyle = C.boardDark;
g.fillRect(-1.2, -0.004, 2.4, 0.008);
