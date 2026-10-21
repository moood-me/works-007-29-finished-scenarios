// The Russian stove's long face to the room (facing right: x runs away from the eye, x 0 is 3.9 m ahead — a point d
// metres ahead is at x d − 3.9): whitewashed, a little crooked by hand; its mouth near the far end (x 0.15…0.8, 0.82 …
// 1.38 m up, its top arched) cut out — the fire inside (`stove_inside`, `stove_fire`) is seen through it; the hearth
// ledge under the mouth with the iron pot on it and the iron door taken off and leant beside; the soot over the mouth;
// the dark niche under the hearth with firewood in it; the oven fork leaning near the eye's end; above the stove's top
// (1.85) its chimney going up into the ceiling.
const L = e.lib;
L.whitewash(g, 81, -1.0, -1.85, 2.0, 1.85, 0.7);
// the chimney over the top, to the ceiling
L.whitewash(g, 82, 0.5, -2.42, 0.48, 0.6, 0.7);
// the cornice at the top's edge, a line of shade under it
g.fillStyle = "#d8cfbb";
g.fillRect(-1.0, -1.88, 2.0, 0.07);
g.fillStyle = "rgba(120,104,82,0.35)";
g.fillRect(-1.0, -1.81, 2.0, 0.02);
// the soot over the mouth, rising
const soot = g.createLinearGradient(0, -1.38, 0, -1.85);
soot.addColorStop(0, "rgba(70,60,52,0.55)");
soot.addColorStop(1, "rgba(70,60,52,0)");
g.fillStyle = soot;
g.beginPath();
g.moveTo(0.13, -1.36);
g.quadraticCurveTo(0.47, -2.0, 0.82, -1.36);
g.closePath();
g.fill();
// the hearth ledge: a shelf of whitewash before the mouth, its edge
g.fillStyle = "#d6ccb6";
g.fillRect(-0.12, -0.82, 1.12, 0.06);
g.fillStyle = "rgba(110,94,74,0.45)";
g.fillRect(-0.12, -0.76, 1.12, 0.02);
// the mouth, cut out: an arch
g.save();
g.globalCompositeOperation = "destination-out";
g.beginPath();
g.moveTo(0.15, -0.82);
g.lineTo(0.15, -1.16);
g.quadraticCurveTo(0.15, -1.38, 0.475, -1.38);
g.quadraticCurveTo(0.8, -1.38, 0.8, -1.16);
g.lineTo(0.8, -0.82);
g.closePath();
g.fill();
g.restore();
// its rim, a darker band round the arch
g.strokeStyle = "#8d7f6c";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.15, -0.82);
g.lineTo(0.15, -1.16);
g.quadraticCurveTo(0.15, -1.38, 0.475, -1.38);
g.quadraticCurveTo(0.8, -1.38, 0.8, -1.16);
g.lineTo(0.8, -0.82);
g.stroke();
e.at(0.475, -1.05, "mouth");
// the iron door, taken off and leant against the face beside the mouth
g.fillStyle = "#3f3a36";
g.beginPath();
g.moveTo(-0.08, -0.82);
g.lineTo(-0.12, -1.2);
g.quadraticCurveTo(-0.04, -1.28, 0.05, -1.2);
g.lineTo(0.05, -0.82);
g.closePath();
g.fill();
g.fillStyle = "#5c5550";
g.fillRect(-0.05, -1.06, 0.06, 0.02);
// the iron pot on the ledge
g.fillStyle = "#2f2b28";
g.beginPath();
g.moveTo(0.83, -0.82);
g.quadraticCurveTo(0.8, -0.95, 0.84, -1.0);
g.lineTo(0.96, -1.0);
g.quadraticCurveTo(1.0, -0.95, 0.97, -0.82);
g.closePath();
g.fill();
g.fillStyle = "#4a4541";
g.fillRect(0.83, -1.01, 0.14, 0.02);
// the niche under the hearth, the firewood in it
g.fillStyle = "#4e4034";
g.beginPath();
g.moveTo(0.2, 0);
g.lineTo(0.2, -0.3);
g.quadraticCurveTo(0.475, -0.48, 0.75, -0.3);
g.lineTo(0.75, 0);
g.closePath();
g.fill();
for (let i = 0; i < 7; i++) {
  const x = 0.27 + (i % 4) * 0.13 + (i > 3 ? 0.06 : 0), y = -0.06 - (i > 3 ? 0.11 : 0);
  g.fillStyle = "#a8875e";
  g.beginPath();
  g.arc(x, y, 0.05, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#c9a878";
  g.beginPath();
  g.arc(x, y, 0.03, 0, Math.PI * 2);
  g.fill();
}
// the oven fork leant on the face near the eye's end: a long pale pole, the iron horns at its foot
g.strokeStyle = "#b39a72";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.62, -0.08);
g.lineTo(-0.82, -1.78);
g.stroke();
g.strokeStyle = "#3d3936";
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(-0.6, -0.04);
g.quadraticCurveTo(-0.72, -0.02, -0.7, -0.18);
g.moveTo(-0.6, -0.04);
g.quadraticCurveTo(-0.5, -0.02, -0.52, -0.18);
g.stroke();
// the plinth along the foot, its whitewash greyed where the floor is washed against it (not over the niche)
g.fillStyle = "#b9ad97";
g.fillRect(-1.0, -0.22, 1.2, 0.22);
g.fillRect(0.75, -0.22, 0.25, 0.22);
g.fillStyle = "rgba(110,94,74,0.4)";
g.fillRect(-1.0, -0.23, 1.2, 0.015);
g.fillRect(0.75, -0.23, 0.25, 0.015);
