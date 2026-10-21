// The ground, seen from above (x = across − 2, y toward the eye: y = 30 − distance; 0…60 m ahead), lying over the land
// (the embankment, the road's ramp): the yard's pale trodden sand — the path from the gate to the porch, the boot prints
// of the one who has just come in by it, pebbles and stones, chips by the block, wet ground by the well, grass along the
// house and the fence —; beyond the fence the footpath along the line, the embankment's dry slopes, its ballast and
// sleepers on top, the dirt road on the right with its two ruts climbing the ramp to the crossing, and the stubble
// beyond. The paper's tooth over it all, its tile growing with the distance.
const L = e.lib, X = (a) => a - 2, Y = (d) => 30 - d;
// (a band between two distances, all across)
const band = (d0, d1, color) => {
  g.fillStyle = color;
  g.fillRect(-65, Y(d1), 130, d1 - d0);
};
band(0, 60, "#d2c29b");
// the yard: pale sand, dry strokes of near tones over it
band(0, 11.5, "#dccdaa");
L.strokes(g, 61, -65, Y(11.5), 130, 11.5, ["#e7dabb", "#c7b48d", "#d9c9a3", "#bfa983", "#ece2c8"], 750, 0.4, 0.07, 0, 0.42);
// the trodden path from the gate (across −1.0…0.1) to the porch's steps (across −1.7, 6.3…7.8 ahead), and the trodden
// patch before the porch
g.fillStyle = "#e6dabd";
g.beginPath();
g.moveTo(X(-1.05), Y(11.5));
g.bezierCurveTo(X(-1.2), Y(9.8), X(-1.5), Y(8.6), X(-1.75), Y(7.9));
g.lineTo(X(-1.75), Y(6.3));
g.bezierCurveTo(X(-0.4), Y(6.6), X(0.1), Y(9.4), X(0.15), Y(11.5));
g.closePath();
g.fill();
g.beginPath();
g.ellipse(X(-0.6), Y(4.6), 2.2, 1.8, 0, 0, Math.PI * 2);
g.fill();
L.strokes(g, 63, X(-2.4), Y(11.5), 3.6, 9.4, ["#efe5cc", "#d2c19c"], 200, 0.35, 0.06, 0, 0.4);
// wet ground round the well (across 2.9, 10.2 ahead), a puddle's dark where the bucket drips
g.fillStyle = "rgba(140,126,96,0.5)";
g.beginPath();
g.ellipse(X(2.9), Y(10.2), 1.4, 1.0, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "rgba(110,100,80,0.45)";
g.beginPath();
g.ellipse(X(2.6), Y(9.3), 0.45, 0.22, 0.3, 0, Math.PI * 2);
g.fill();
// wood chips round the block (across 2.56, 4.8 ahead)
for (let i = 0; i < 70; i++) {
  const r = 0.15 + 0.8 * L.rnd(i, 71) ** 0.7, a = L.rnd(i, 72) * Math.PI * 2;
  g.fillStyle = i % 3 ? "#ecdfbf" : "#b99f72";
  g.save();
  g.translate(X(2.56) + Math.cos(a) * r, Y(4.8) + Math.sin(a) * r * 0.8);
  g.rotate(L.rnd(i, 74) * Math.PI);
  g.fillRect(-0.04, -0.012, 0.05 + 0.06 * L.rnd(i, 73), 0.025);
  g.restore();
}
// the boot prints of the one who came in: from the gate (across −0.5, 11.4) in a long curve to where he stands (0.88,
// 2.35) — each a heel and a sole pressed darker into the sand, its rim a little lighter, left and right by turns
const print = (x, y, a, side) => {
  g.save();
  g.translate(x + Math.cos(a) * side * 0.11, y + Math.sin(a) * side * 0.11);
  g.rotate(a + Math.PI / 2);
  for (const [color, k] of [["rgba(236,226,200,0.7)", 1.25], ["rgba(128,106,74,0.5)", 1]]) {
    g.fillStyle = color;
    for (const [y, rx, ry] of [[-0.055, 0.05, 0.11], [0.12, 0.042, 0.048]]) {
      g.beginPath();
      g.ellipse(0, y, rx * k, ry * k, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.restore();
};
const way = (u) => {
  const v = 1 - u;
  // (a cubic from the gate to where he stands)
  const p = [[-0.5, 11.4], [-0.3, 8.2], [1.2, 5.4], [0.95, 2.75]];
  const ax = v * v * v * p[0][0] + 3 * v * v * u * p[1][0] + 3 * v * u * u * p[2][0] + u * u * u * p[3][0];
  const ad = v * v * v * p[0][1] + 3 * v * v * u * p[1][1] + 3 * v * u * u * p[2][1] + u * u * u * p[3][1];
  return [X(ax), Y(ad)];
};
for (let i = 0; i < 12; i++) {
  const u = i / 12, [x0, y0] = way(u), [x1, y1] = way(u + 0.02);
  print(x0, y0, Math.atan2(y1 - y0, x1 - x0), i % 2 ? 1 : -1);
}
// pebbles and stones over the yard, more at its edges: each a grey-ochre lump, its lit top paler
for (let i = 0; i < 160; i++) {
  const a = -3.4 + 10.5 * L.rnd(i, 75), d = 1.6 + 9.6 * L.rnd(i, 76) ** 0.8, r = 0.02 + 0.05 * L.rnd(i, 77) ** 3;
  g.fillStyle = ["#9b9384", "#a99c84", "#8a8478", "#b3a68c"][i % 4];
  g.beginPath();
  g.ellipse(X(a), Y(d), r, r * 0.8, L.rnd(i, 78) * 3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#d8cfbd";
  g.beginPath();
  g.ellipse(X(a) - r * 0.25, Y(d) - r * 0.2, r * 0.5, r * 0.35, 0, 0, Math.PI * 2);
  g.fill();
}
// grass along the house's wall (across −3.6), the fence's foot (11.5 ahead), the woodpile's (across 4.4…6.8, 11) and the
// yard's near edge
const GRASS = ["#9d9b66", "#8c8c5c", "#aba674", "#7f8455"];
L.strokes(g, 81, X(-3.6), Y(11.5), 0.7, 9.5, GRASS, 240, 0.14, 0.035, Math.PI / 2, 0.65);
L.strokes(g, 83, X(-3.6), Y(11.5), 10.6, 0.55, GRASS, 300, 0.12, 0.035, Math.PI / 2, 0.65);
L.strokes(g, 85, X(4.2), Y(11.2), 2.8, 0.6, GRASS, 80, 0.12, 0.035, Math.PI / 2, 0.55);
L.strokes(g, 86, X(-4), Y(2.2), 12, 1.6, GRASS, 160, 0.1, 0.03, Math.PI / 2, 0.5);
// beyond the fence: grass, the footpath along the line (to the station on the left, to the road on the right), grass,
// the embankment's slopes and top
band(11.5, 14, "#b4ad7c");
L.strokes(g, 87, -65, Y(14), 130, 2.5, ["#a19f6c", "#c6b98c", "#8f9262"], 400, 0.35, 0.05, 0, 0.45);
g.fillStyle = "#e0d2ad";
g.beginPath();
g.moveTo(-65, Y(12.2));
g.lineTo(X(7.6), Y(12.4));
g.lineTo(X(7.9), Y(13.2));
g.lineTo(-65, Y(12.95));
g.closePath();
g.fill();
L.strokes(g, 88, -65, Y(13.0), 72, 0.8, ["#ece1c2", "#c8b993"], 260, 0.35, 0.05, 0, 0.4);
band(14, 15.6, "#b2a473");
band(17.8, 19.6, "#b2a473");
L.strokes(g, 89, -65, Y(19.6), 130, 5.6, ["#a39a6a", "#c2b386", "#8e8f60"], 450, 0.4, 0.05, 0, 0.45);
// the ballast, the sleepers across it under the rails (16.2, 17.2)
band(15.6, 17.8, "#a39d90");
L.strokes(g, 91, -65, Y(17.8), 130, 2.2, ["#8a857b", "#bab4a7", "#9c958a"], 450, 0.2, 0.06, 0, 0.5);
g.fillStyle = "#5c4f43";
for (let a = -64.6; a < 67; a += 0.55) g.fillRect(X(a) - 0.11, Y(18.05), 0.22, 2.7);
// the dirt road on the right: from the right edge of the near ground up the ramp to the crossing (across 7.8 … 10.2),
// over it and on beyond — its two ruts and the grass between them
g.fillStyle = "#d9c8a0";
g.beginPath();
g.moveTo(X(13.4), Y(0));
g.bezierCurveTo(X(11.6), Y(4), X(10.2), Y(7), X(10.2), Y(10));
g.lineTo(X(10.2), Y(19.6));
g.lineTo(X(9.2), Y(60));
g.lineTo(X(6.8), Y(60));
g.lineTo(X(7.8), Y(19.6));
g.lineTo(X(7.8), Y(10));
g.bezierCurveTo(X(7.8), Y(6.5), X(9.4), Y(3.5), X(10.8), Y(0));
g.closePath();
g.fill();
for (const [off, color, w] of [[-0.62, "#bba57e", 0.16], [0.62, "#bba57e", 0.16], [0, "#b9b07f", 0.22]]) {
  g.strokeStyle = color;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(X(12.1 + off), Y(0));
  g.bezierCurveTo(X(10.9 + off), Y(4), X(9.0 + off), Y(7), X(9.0 + off), Y(10));
  g.lineTo(X(9.0 + off), Y(15.4));
  g.moveTo(X(9.0 + off), Y(18.1));
  g.lineTo(X(8.0 + off), Y(60));
  g.stroke();
}
// the crossing's planks between the rails and either side of them
g.fillStyle = "#9c8664";
for (let d = 15.75; d < 17.7; d += 0.25) g.fillRect(X(7.8), Y(d + 0.21), 2.4, 0.21);
// the stubble beyond
band(19.6, 60, "#cdb784");
L.strokes(g, 93, -65, Y(60), 130, 40.4, ["#bba874", "#dacd9f", "#c2ad78"], 400, 1.4, 0.1, 0, 0.4);
// the paper's tooth: finer near, coarser far (a tile about a fifth of the distance)
for (const [d0, d1, size] of [[0, 4, 0.6], [4, 8, 1.2], [8, 13, 2], [13, 20, 3], [20, 60, 6]]) L.paper(g, -65, Y(d1), 130, d1 - d0, size);
