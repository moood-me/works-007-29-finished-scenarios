// The Russian stove's face toward the eye (2.3 m ahead, across −2.0…−0.6, x 0 at −1.3): whitewashed, a little crooked
// by hand; its mouth (x 0.1…0.6, 0.82…1.32 m up, its top arched) cut out and facing the eye — the fire inside
// (`stove_inside`, `stove_fire`) is seen straight through it, its light on the faces by the table; the hearth ledge under
// the mouth with the iron pot on it; the soot over the mouth; the dark niche under the hearth with firewood in it; the
// iron door taken off and leant by the plinth; the oven fork leaning at the left; two little niches with mittens drying;
// over its top's edge a pair of felt boots.
const L = e.lib;
L.whitewash(g, 91, -0.7, -1.85, 1.4, 1.85, 0.8);
// the cornice at the top's edge, a line of shade under it
g.fillStyle = "#d8cfbb";
g.fillRect(-0.72, -1.88, 1.44, 0.07);
g.fillStyle = "rgba(120,104,82,0.35)";
g.fillRect(-0.72, -1.81, 1.44, 0.02);
// the soot over the mouth, rising
const soot = g.createLinearGradient(0, -1.3, 0, -1.84);
soot.addColorStop(0, "rgba(70,60,52,0.6)");
soot.addColorStop(1, "rgba(70,60,52,0)");
g.fillStyle = soot;
g.beginPath();
g.moveTo(0.06, -1.28);
g.quadraticCurveTo(0.35, -2.0, 0.64, -1.28);
g.closePath();
g.fill();
// the hearth ledge: a shelf of whitewash before the mouth, its edge
g.fillStyle = "#d6ccb6";
g.fillRect(-0.16, -0.82, 0.86, 0.07);
g.fillStyle = "rgba(110,94,74,0.45)";
g.fillRect(-0.16, -0.75, 0.86, 0.02);
// the mouth, cut out: an arch
const arch = () => {
  g.beginPath();
  g.moveTo(0.1, -0.82);
  g.lineTo(0.1, -1.12);
  g.quadraticCurveTo(0.1, -1.32, 0.35, -1.32);
  g.quadraticCurveTo(0.6, -1.32, 0.6, -1.12);
  g.lineTo(0.6, -0.82);
};
g.save();
g.globalCompositeOperation = "destination-out";
arch();
g.closePath();
g.fill();
g.restore();
// its rim, a darker band round the arch, warmed by the fire
g.strokeStyle = "#8d7462";
g.lineWidth = 0.03;
arch();
g.stroke();
e.at(0.35, -1.05, "mouth");
// the iron pot on the ledge beside the mouth
g.fillStyle = "#2f2b28";
g.beginPath();
g.moveTo(-0.12, -0.82);
g.quadraticCurveTo(-0.15, -0.95, -0.11, -1.0);
g.lineTo(0.01, -1.0);
g.quadraticCurveTo(0.05, -0.95, 0.02, -0.82);
g.closePath();
g.fill();
g.fillStyle = "#4a4541";
g.fillRect(-0.12, -1.01, 0.14, 0.02);
// the niche under the hearth, the firewood in it
g.fillStyle = "#4e4034";
g.beginPath();
g.moveTo(0.12, -0.0);
g.lineTo(0.12, -0.3);
g.quadraticCurveTo(0.35, -0.46, 0.58, -0.3);
g.lineTo(0.58, 0);
g.closePath();
g.fill();
for (let i = 0; i < 7; i++) {
  const x = 0.18 + (i % 4) * 0.11 + (i > 3 ? 0.05 : 0), y = -0.06 - (i > 3 ? 0.1 : 0);
  g.fillStyle = "#a8875e";
  g.beginPath();
  g.arc(x, y, 0.045, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#c9a878";
  g.beginPath();
  g.arc(x, y, 0.027, 0, Math.PI * 2);
  g.fill();
}
// the plinth along the foot, its whitewash greyed where the floor is washed against it (not over the niche)
g.fillStyle = "#b9ad97";
g.fillRect(-0.7, -0.22, 0.82, 0.22);
g.fillRect(0.58, -0.22, 0.12, 0.22);
g.fillStyle = "rgba(110,94,74,0.4)";
g.fillRect(-0.7, -0.23, 0.82, 0.015);
g.fillRect(0.58, -0.23, 0.12, 0.015);
// the iron door, taken off and leant by the plinth
g.fillStyle = "#3f3a36";
g.beginPath();
g.moveTo(-0.36, 0);
g.lineTo(-0.38, -0.4);
g.quadraticCurveTo(-0.29, -0.48, -0.2, -0.4);
g.lineTo(-0.19, 0);
g.closePath();
g.fill();
g.fillStyle = "#5c5550";
g.fillRect(-0.32, -0.24, 0.08, 0.02);
// the oven fork leant on the face at its left: a long pale pole, the iron horns at its foot
g.strokeStyle = "#b39a72";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.55, -0.08);
g.lineTo(-0.62, -1.76);
g.stroke();
g.strokeStyle = "#3d3936";
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(-0.55, -0.04);
g.quadraticCurveTo(-0.65, -0.02, -0.63, -0.18);
g.moveTo(-0.55, -0.04);
g.quadraticCurveTo(-0.45, -0.02, -0.47, -0.18);
g.stroke();
// two little niches for drying, grey mittens in one
for (const x of [-0.42, -0.2]) {
  g.fillStyle = "#8f806b";
  g.beginPath();
  g.moveTo(x, -1.4);
  g.lineTo(x, -1.55);
  g.quadraticCurveTo(x + 0.08, -1.62, x + 0.16, -1.55);
  g.lineTo(x + 0.16, -1.4);
  g.closePath();
  g.fill();
}
g.fillStyle = "#a39d92";
g.fillRect(-0.17, -1.52, 0.045, 0.1);
g.fillRect(-0.115, -1.51, 0.045, 0.09);
// on the stove's top, seen over its edge: a pair of grey felt boots drying
g.fillStyle = "#b4aea2";
g.beginPath();
g.moveTo(-0.3, -1.88);
g.lineTo(-0.28, -2.1);
g.lineTo(-0.18, -2.1);
g.lineTo(-0.17, -1.95);
g.lineTo(-0.06, -1.92);
g.lineTo(-0.06, -1.88);
g.closePath();
g.fill();
g.fillStyle = "#a9a397";
g.beginPath();
g.moveTo(-0.14, -1.88);
g.lineTo(-0.12, -2.06);
g.lineTo(-0.02, -2.06);
g.lineTo(-0.01, -1.94);
g.lineTo(0.09, -1.91);
g.lineTo(0.09, -1.88);
g.closePath();
g.fill();
// the corner toward the room, a line of shade
g.fillStyle = "rgba(150,134,110,0.4)";
g.fillRect(0.65, -1.85, 0.05, 1.85);
