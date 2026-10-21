// The house's side wall, turned toward the yard (it runs away from the front corner: x 0 the corner, 9 the back), its
// gable over it up to the ridge, the roof's edge in profile with a thick layer of snow on it.
// (x −0.4…9.4 m, its foot at 0)
const L = e.lib;
const C = L.C;
const rnd = () => e.rnd();
const FLOOR = 0.85;
const EAVES = 4.2;
const RIDGE = 6.6;
const MID = 4.5;

g.fillStyle = "#7d7366";
g.fillRect(0, -FLOOR, 9, FLOOR);
L.logs(g, 0, 9, -EAVES, -FLOOR, 0.26, rnd);
// the gable: boards upright under the roof's edges
g.fillStyle = "#8f8070";
g.beginPath();
g.moveTo(0, -EAVES);
g.lineTo(MID, -RIDGE + 0.15);
g.lineTo(9, -EAVES);
g.closePath();
g.fill();
g.strokeStyle = "#6f6254";
g.lineWidth = 0.025;
for (let x = 0.25; x < 9; x += 0.25) {
  const top = -EAVES - (RIDGE - 0.15 - EAVES) * (1 - Math.abs(x - MID) / MID);
  g.beginPath();
  g.moveTo(x, -EAVES);
  g.lineTo(x, top);
  g.stroke();
}
// (a little attic window in it)
g.fillStyle = C.trim;
g.fillRect(MID - 0.32, -5.55, 0.64, 0.72);
g.fillStyle = "#5d6878";
g.fillRect(MID - 0.24, -5.47, 0.48, 0.56);
// the roof's edges: boards, and on them the snow, thick and rounded, overhanging
for (const [x0, x1] of [[-0.4, MID], [MID, 9.4]]) {
  const y0 = x0 < MID ? -EAVES + 0.12 : -RIDGE;
  const y1 = x0 < MID ? -RIDGE : -EAVES + 0.12;
  g.strokeStyle = C.woodDark;
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(x1, y1);
  g.stroke();
  g.fillStyle = C.snow;
  g.beginPath();
  g.moveTo(x0 - 0.1, y0 - 0.02);
  g.quadraticCurveTo((x0 + x1) / 2, (y0 + y1) / 2 - 0.5, x1, y1 - 0.38);
  g.lineTo(x1, y1 - 0.06);
  g.lineTo(x0, y0 - 0.06);
  g.closePath();
  g.fill();
}
