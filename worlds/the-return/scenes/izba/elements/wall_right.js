// The right wall (facing left: x runs toward the eye, x 0 is 2.8 m ahead — a point d metres ahead is at x 2.8 − d):
// hewn logs; the low plank door to the passage (2.96…3.9 ahead, inside the 4:3 frame), shut, its iron latch — Ivanov
// stands before it; by its near jamb (2.8 ahead), as high as his head and clear of it as the eye sees him, the nail where
// the greatcoat hung before the war — empty, the logs under it less smoked where the coat kept them (a pale shape of it):
// he has it over his shoulders; a linen towel on a peg nearer the eye.
const L = e.lib;
L.hewn(g, 51, -1.8, 1.8, 2.4);
// the door: its jambs and lintel, the planks, the latch
const d0 = -1.1;
g.fillStyle = "#6e5a44";
g.fillRect(d0, -1.92, 0.94, 1.92);
g.fillStyle = "#86705a";
g.fillRect(d0 + 0.06, -1.84, 0.82, 1.8);
g.fillStyle = "rgba(60,46,32,0.6)";
for (const x of [0.27, 0.48, 0.69]) g.fillRect(d0 + x, -1.84, 0.012, 1.8);
g.fillStyle = "#6a5644";
g.fillRect(d0 + 0.06, -1.56, 0.82, 0.07);
g.fillRect(d0 + 0.06, -0.44, 0.82, 0.07);
g.fillStyle = "#3a332d";
g.fillRect(d0 + 0.72, -1.0, 0.1, 0.03);
g.fillRect(d0 + 0.78, -1.06, 0.02, 0.12);
g.fillStyle = "#6e5a44";
g.fillRect(d0 - 0.05, -0.08, 1.04, 0.08);
L.strokes(g, 53, d0 + 0.06, -1.84, 0.82, 1.8, ["#957f66", "#755f48"], 40, 0.4, 0.02, Math.PI / 2, 0.35);
L.paper(g, d0, -1.92, 0.94, 1.92, 0.8);
e.at(d0 + 0.47, -1.0, "door");
// where the coat hung before the war: the logs under the nail less smoked, a pale shape of shoulders and a long skirt
// (between the door's jamb and the towel)
g.fillStyle = "rgba(226,210,176,0.2)";
g.beginPath();
g.moveTo(0.0, -1.68);
g.quadraticCurveTo(-0.13, -1.62, -0.13, -1.4);
g.lineTo(-0.14, -0.62);
g.lineTo(0.17, -0.62);
g.lineTo(0.14, -1.4);
g.quadraticCurveTo(0.13, -1.62, 0.0, -1.68);
g.closePath();
g.fill();
// the nail, empty: a forged one, its square head and its shank standing out of the log, a shadow under it
g.fillStyle = "rgba(60,46,32,0.35)";
g.fillRect(-0.02, -1.69, 0.06, 0.03);
g.fillStyle = "#3d3833";
g.fillRect(-0.04, -1.73, 0.07, 0.022);
g.fillRect(-0.02, -1.75, 0.03, 0.065);
g.fillStyle = "rgba(230,214,186,0.7)";
g.fillRect(-0.015, -1.75, 0.01, 0.025);
e.at(0, -1.72, "nail");
// a towel on a peg nearer the eye: white linen, its ends worked in red
g.fillStyle = "#5c4a38";
g.fillRect(0.78, -1.72, 0.04, 0.03);
g.fillStyle = "#ece6d8";
g.fillRect(0.68, -1.7, 0.24, 0.62);
g.fillStyle = "#a8463a";
g.fillRect(0.68, -1.16, 0.24, 0.025);
g.fillRect(0.68, -1.12, 0.24, 0.012);
