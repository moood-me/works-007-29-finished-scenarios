// The right wall (facing left: x runs toward the eye, x 0 is 2.8 m ahead — a point d metres ahead is at x 2.8 − d):
// hewn logs; the low doorway to the passage (3.4…4.2 ahead, 1.75 high) standing open — the passage (`passage`) seen
// through it —, its jambs and lintel, the raised threshold; Semyon Yevseyevich has just stepped over it. By its near
// jamb (3.2 ahead), as high as a man's head, the nail where the greatcoat hung before the war — empty, the logs under it
// less smoked where the coat kept them (a pale shape of it). A linen towel on a peg nearer the eye.
const L = e.lib;
L.hewn(g, 51, -1.6, 1.6, 2.25);
// the doorway: the opening cut out over the threshold, the jambs, the lintel, the threshold beam
const d0 = -1.4, d1 = -0.6, top = 1.75, sill = 0.1;
g.save();
g.globalCompositeOperation = "destination-out";
g.fillRect(d0, -top, d1 - d0, top - sill);
g.restore();
g.fillStyle = "#7a644a";
g.fillRect(d0 - 0.09, -top - 0.1, 0.09, top + 0.1);
g.fillRect(d1, -top - 0.1, 0.09, top + 0.1);
g.fillRect(d0 - 0.12, -top - 0.13, d1 - d0 + 0.24, 0.1);
g.fillStyle = "#8d7558";
g.fillRect(d0 - 0.05, -sill, d1 - d0 + 0.1, sill);
g.fillStyle = "rgba(60,46,32,0.45)";
g.fillRect(d0 - 0.05, -sill, d1 - d0 + 0.1, 0.015);
e.at((d0 + d1) / 2, -1.0, "door");
// where the coat hung before the war: the logs under the nail less smoked — a pale shape of shoulders and a long skirt
const nx = -0.4;
g.fillStyle = "rgba(228,212,178,0.22)";
g.beginPath();
g.moveTo(nx, -1.68);
g.quadraticCurveTo(nx - 0.14, -1.62, nx - 0.14, -1.4);
g.lineTo(nx - 0.16, -0.62);
g.lineTo(nx + 0.17, -0.62);
g.lineTo(nx + 0.14, -1.4);
g.quadraticCurveTo(nx + 0.13, -1.62, nx, -1.68);
g.closePath();
g.fill();
// the nail, empty: a forged one, its square head and its shank standing out of the log, a shadow under it
g.fillStyle = "rgba(60,46,32,0.35)";
g.fillRect(nx - 0.02, -1.69, 0.06, 0.03);
g.fillStyle = "#3d3833";
g.fillRect(nx - 0.04, -1.73, 0.07, 0.022);
g.fillRect(nx - 0.02, -1.75, 0.03, 0.065);
e.at(nx, -1.72, "nail");
// a towel on a peg nearer the eye: white linen, its ends worked in red
g.fillStyle = "#5c4a38";
g.fillRect(0.58, -1.74, 0.04, 0.03);
g.fillStyle = "#ece6d8";
g.fillRect(0.48, -1.72, 0.24, 0.66);
g.fillStyle = "#b04a3a";
g.fillRect(0.48, -1.14, 0.24, 0.028);
g.fillRect(0.48, -1.1, 0.24, 0.012);
