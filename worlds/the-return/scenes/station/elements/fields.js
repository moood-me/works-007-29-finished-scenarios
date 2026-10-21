// The fields beyond the line, seen from above (x across, y toward the eye; 26 m … 2 km ahead): stubble and fallow in
// long bands of pale ochre and dusty green, wet with the morning — the fog lays them back to white within a few hundred
// metres.
const L = e.lib, C = ["#c3b483", "#cfc196", "#b5ad7e", "#a8a77a", "#d2c69e", "#bdb38a"];
g.fillStyle = "#c6b88c";
g.fillRect(-2500, -1000, 5000, 2000);
for (let i = 0, y = 1000; y > -1000; i++) {
  const h = 12 + 60 * L.rnd(i, 31);
  g.fillStyle = C[i % C.length];
  g.fillRect(-2500, y - h, 5000, h);
  y -= h;
}
L.strokes(g, 41, -300, 900, 600, 100, ["#b2a571", "#d8cda5", "#9f9a6c"], 1200, 3, 0.3, 0, 0.3);
L.strokes(g, 43, -2500, -1000, 5000, 1900, ["#b8ab7c", "#d4c9a2"], 700, 50, 4, 0, 0.22);
