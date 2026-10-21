// The right wall (facing left: x runs toward the eye, x 0 is 3.4 m ahead — a point d metres ahead is at x 3.4 − d):
// hewn logs; the low plank door to the passage near the front (2.35…3.3 ahead), shut, its iron latch; by it, a step
// farther in, the nail where a coat would hang — empty: Ivanov keeps his greatcoat on; a linen towel on a peg.
const L = e.lib;
L.hewn(g, 51, -2.4, 2.4, 2.4);
// the door: its jambs and lintel, the planks, the latch
g.fillStyle = "#6e5a44";
g.fillRect(0.1, -1.88, 0.95, 1.88);
g.fillStyle = "#86705a";
g.fillRect(0.16, -1.8, 0.83, 1.76);
g.fillStyle = "rgba(60,46,32,0.6)";
for (const x of [0.37, 0.58, 0.79]) g.fillRect(x, -1.8, 0.012, 1.76);
g.fillStyle = "#6a5644";
g.fillRect(0.16, -1.52, 0.83, 0.07);
g.fillRect(0.16, -0.42, 0.83, 0.07);
g.fillStyle = "#3a332d";
g.fillRect(0.82, -1.0, 0.1, 0.03);
g.fillRect(0.88, -1.06, 0.02, 0.12);
g.fillStyle = "#6e5a44";
g.fillRect(0.05, -0.08, 1.05, 0.08);
L.paper(g, 0.1, -1.88, 0.95, 1.88, 0.8);
e.at(0.6, -1.0, "door");
// the nail, empty
g.fillStyle = "#3d3833";
g.fillRect(-0.17, -1.66, 0.04, 0.025);
g.fillRect(-0.14, -1.68, 0.018, 0.06);
e.at(-0.15, -1.65, "nail");
// a towel on a peg farther along: white linen, its ends worked in red
g.fillStyle = "#5c4a38";
g.fillRect(-0.98, -1.72, 0.04, 0.03);
g.fillStyle = "#ece6d8";
g.fillRect(-1.08, -1.7, 0.24, 0.62);
g.fillStyle = "#a8463a";
g.fillRect(-1.08, -1.16, 0.24, 0.025);
g.fillRect(-1.08, -1.12, 0.24, 0.012);
