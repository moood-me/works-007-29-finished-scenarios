// The ground, seen from above (x = across − 2, y toward the eye: y = 30 − distance; 0…60 m ahead), lying over the land
// (the embankment): the yard's trodden sand, the path from the gate to the porch, wood chips by the block, grass along
// the house and the fence; beyond the fence the path along the line, the embankment's dry slopes, its ballast and
// sleepers on top, the dirt road up to the crossing on the right, and the stubble beyond.
const L = e.lib, X = (a) => a - 2, Y = (d) => 30 - d;
// (a band between two distances, all across)
const band = (d0, d1, color) => {
  g.fillStyle = color;
  g.fillRect(-65, Y(d1), 130, d1 - d0);
};
band(0, 60, "#cdb98f");
// the yard
band(0, 11.5, "#d1c09a");
L.strokes(g, 61, -65, Y(11.5), 130, 11.5, ["#dccdaa", "#c2b08a", "#d6c7a2", "#bba985"], 1300, 0.35, 0.05, 0, 0.35);
// the trodden path from the gate (across 1.4…2.4) to the porch's steps (across −1.7, 6.2…7.8 ahead)
g.fillStyle = "#ddcfac";
g.beginPath();
g.moveTo(X(1.3), Y(11.5));
g.bezierCurveTo(X(1.2), Y(9.4), X(-0.6), Y(8.2), X(-1.75), Y(7.9));
g.lineTo(X(-1.75), Y(6.3));
g.bezierCurveTo(X(0.0), Y(6.8), X(2.4), Y(9.2), X(2.5), Y(11.5));
g.closePath();
g.fill();
L.strokes(g, 63, X(-1.7), Y(11.5), 4.2, 5.2, ["#e3d6b5", "#cfbf98"], 160, 0.3, 0.05, 0, 0.3);
// wet ground round the well
g.fillStyle = "rgba(150,138,108,0.45)";
g.beginPath();
g.ellipse(X(5.5), Y(10.1), 1.3, 0.9, 0, 0, Math.PI * 2);
g.fill();
// wood chips round the block (across 3.3, 6.6 ahead)
for (let i = 0; i < 90; i++) {
  const r = 0.15 + 0.9 * L.rnd(i, 71) ** 0.7, a = L.rnd(i, 72) * Math.PI * 2;
  g.fillStyle = i % 3 ? "#e4d5b0" : "#b99f72";
  g.fillRect(X(3.3) + Math.cos(a) * r, Y(6.6) + Math.sin(a) * r * 0.8, 0.05 + 0.06 * L.rnd(i, 73), 0.025);
}
// grass along the house's wall (across −3.6), the fence's foot (11.5 ahead) and the woodpile's
const GRASS = ["#9d9b66", "#8c8c5c", "#aba674"];
L.strokes(g, 81, X(-3.6), Y(11.5), 0.6, 9, GRASS, 260, 0.12, 0.03, Math.PI / 2, 0.6);
L.strokes(g, 83, X(-3.6), Y(11.5), 11.4, 0.5, GRASS, 320, 0.1, 0.03, Math.PI / 2, 0.6);
L.strokes(g, 85, X(4.6), Y(8.2), 2.8, 3, GRASS, 120, 0.1, 0.03, Math.PI / 2, 0.5);
// beyond the fence: grass, the path along the line, grass, the embankment's slopes and top
band(11.5, 13.4, "#b1aa78");
band(12.05, 12.95, "#d6c79f");
L.strokes(g, 87, -65, Y(13.4), 130, 1.9, ["#a19f6c", "#c6b98c", "#d9caa3"], 900, 0.3, 0.04, 0, 0.4);
band(13.4, 14.9, "#b5a777");
band(17.1, 18.6, "#b5a777");
L.strokes(g, 89, -65, Y(18.6), 130, 5.2, ["#a39a6a", "#c2b386", "#9a9b6c"], 1000, 0.35, 0.04, 0, 0.4);
band(14.9, 17.1, "#9d978b");
L.strokes(g, 91, -65, Y(17.1), 130, 2.2, ["#8a857b", "#b3ada0", "#a19a8c"], 900, 0.18, 0.05, 0, 0.45);
g.fillStyle = "#5f5347";
for (let a = -64.6; a < 67; a += 0.55) g.fillRect(X(a) - 0.11, Y(17.0), 0.22, 2);
// the dirt road on the right, up to the crossing and on beyond it; the crossing's planks between the rails
g.fillStyle = "#d4c49c";
g.beginPath();
g.moveTo(X(13.6), Y(0));
g.lineTo(X(10.4), Y(13.4));
g.lineTo(X(10.2), Y(18.6));
g.lineTo(X(8.6), Y(60));
g.lineTo(X(10.8), Y(60));
g.lineTo(X(12.4), Y(18.6));
g.lineTo(X(12.6), Y(13.4));
g.lineTo(X(16.2), Y(0));
g.closePath();
g.fill();
g.fillStyle = "#a28c69";
for (let d = 15.0; d < 17.0; d += 0.26) g.fillRect(X(10.2), Y(d + 0.22), 2.4, 0.22);
// the stubble beyond
band(18.6, 60, "#cdb784");
L.strokes(g, 93, -65, Y(60), 130, 41.4, ["#bba874", "#dacd9f", "#c2ad78"], 900, 1.2, 0.08, 0, 0.35);
