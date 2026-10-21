// The station house's roof, its slope toward the line (a plane tilted 31° up from its eave over the platform to the
// ridge; seen from above: x along the ridge, y down the slope toward the eave): sheet iron laid in long sheets with
// standing seams down the slope, painted a red-brown long ago, weathered paler and rusted darker in streaks.
const L = e.lib;
g.fillStyle = "#8a5a49";
g.fillRect(-6.4, -1.99, 12.8, 3.98);
for (let i = 0, x = -6.4; x < 6.4; i++, x += 0.62) {
  g.fillStyle = ["#8f5e4c", "#845343", "#93644f", "#7d5041"][Math.floor(L.rnd(i, 181) * 4)];
  g.fillRect(x + 0.03, -1.99, 0.58, 3.98);
  g.fillStyle = "#a9786a";
  g.fillRect(x, -1.99, 0.03, 3.98);
}
L.strokes(g, 183, -6.4, -1.99, 12.8, 3.98, ["#a37462", "#6c4235", "#b08573"], 160, 0.9, 0.05, Math.PI / 2, 0.3);
g.fillStyle = "#6b4437";
g.fillRect(-6.4, -1.99, 12.8, 0.1);
L.paper(g, -6.4, -1.99, 12.8, 3.98, 2.4);
