// The right wall (facing left: x runs toward the eye, x 0 is 2.8 m ahead — a point d metres ahead is at x 2.8 − d):
// hewn logs; the low plank door to the passage (2.6…3.5 ahead), shut, its iron latch — Ivanov stands just before it; by
// it, a step farther in and as high as his head, the nail where a coat would hang — empty: he keeps his greatcoat on; a
// linen towel on a peg nearer the eye.
const L = e.lib;
L.hewn(g, 51, -1.8, 1.8, 2.4);
// the door: its jambs and lintel, the planks, the latch
const d0 = -0.72;
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
// the nail, empty, its head catching the light
g.fillStyle = "#3d3833";
g.fillRect(-0.87, -1.72, 0.05, 0.03);
g.fillRect(-0.855, -1.745, 0.02, 0.075);
g.fillStyle = "rgba(220,200,170,0.6)";
g.fillRect(-0.85, -1.745, 0.008, 0.02);
e.at(-0.85, -1.72, "nail");
// a towel on a peg nearer the eye: white linen, its ends worked in red
g.fillStyle = "#5c4a38";
g.fillRect(0.78, -1.72, 0.04, 0.03);
g.fillStyle = "#ece6d8";
g.fillRect(0.68, -1.7, 0.24, 0.62);
g.fillStyle = "#a8463a";
g.fillRect(0.68, -1.16, 0.24, 0.025);
g.fillRect(0.68, -1.12, 0.24, 0.012);
