// The izba's roof, its slope to the yard, seen from above (x along the house, y down the slope toward the eaves on the
// right): grey weathered boards running down the slope, moss in the seams, the ridge board on top, the eaves' edge.
const L = e.lib;
g.fillStyle = "#8e8a80";
g.fillRect(-3.6, -1.89, 7.2, 3.78);
for (let i = 0, x = -3.6; x < 3.6; i++, x += 0.24) {
  g.fillStyle = ["#938f84", "#89857b", "#9a958a", "#85817a"][Math.floor(L.rnd(i, 111) * 4)];
  g.fillRect(x, -1.89, 0.22, 3.78);
}
L.strokes(g, 113, -3.6, -1.89, 7.2, 3.78, ["#a7a397", "#77746b"], 90, 0.6, 0.1, Math.PI / 2, 0.25);
L.strokes(g, 115, -3.6, 0.6, 7.2, 1.2, ["#8a8c62", "#7f8459"], 90, 0.25, 0.08, 0, 0.45);
g.fillStyle = "#77746b";
g.fillRect(-3.6, -1.89, 7.2, 0.16);
g.fillStyle = "#6f6b62";
g.fillRect(-3.6, 1.8, 7.2, 0.09);
L.paper(g, -3.6, -1.89, 7.2, 3.78, 1.6);
