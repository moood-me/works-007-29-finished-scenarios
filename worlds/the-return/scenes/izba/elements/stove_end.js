// The Russian stove's face toward the eye (2.75 m ahead, across −2.25…−1.15; x 0 at −1.7), whitewashed by hand, its
// edges not quite straight: the mouth (x 0.04…0.44, 0.75…1.2 m up, arched) cut out and facing the eye, the fire inside
// (`stove_inside`, `stove_fire`) seen through it; the soot licked up over it; the hearth ledge under it with the iron pot
// and a clay crock; the arched hollow under the hearth with the firewood stacked in it, its cut ends toward the eye;
// two little niches higher up, grey mittens drying in one; the cornice at the top; the oven fork leaning at the left.
// The face casts no shadow of its own (the fire's light leaves through the mouth).
const L = e.lib;
L.whitewash(g, 91, -0.55, -1.95, 1.1, 1.95);
// the plinth along the foot, greyed where the floor is washed against it
g.fillStyle = "#c9bea8";
g.fillRect(-0.55, -0.12, 1.1, 0.12);
g.fillStyle = "rgba(110,94,74,0.35)";
g.fillRect(-0.55, -0.13, 1.1, 0.015);
// the cornice, a line of shade under it
g.fillStyle = "#e2d9c4";
g.fillRect(-0.56, -1.95, 1.12, 0.08);
g.fillStyle = "rgba(120,104,82,0.35)";
g.fillRect(-0.55, -1.87, 1.1, 0.02);
// the soot over the mouth, licked up from its crown
const soot = g.createLinearGradient(0, -1.2, 0, -1.56);
soot.addColorStop(0, "rgba(74,62,52,0.22)");
soot.addColorStop(1, "rgba(74,62,52,0)");
g.fillStyle = soot;
g.beginPath();
g.moveTo(0.06, -1.15);
g.bezierCurveTo(0.14, -1.4, 0.2, -1.5, 0.24, -1.56);
g.bezierCurveTo(0.28, -1.5, 0.34, -1.4, 0.4, -1.15);
g.closePath();
g.fill();
// the hearth ledge: a shelf standing out before the mouth, its edge and its shade
g.fillStyle = "#e4dac6";
g.fillRect(-0.2, -0.77, 0.75, 0.07);
g.fillStyle = "rgba(96,80,62,0.45)";
g.fillRect(-0.2, -0.7, 0.75, 0.025);
// the mouth, cut out: an arch; its rim burnt brown
L.arch(g, 0.04, 0.44, -0.77, 0.24, 0.16);
g.save();
g.globalCompositeOperation = "destination-out";
g.fill();
g.restore();
g.strokeStyle = "#7e6450";
g.lineWidth = 0.035;
L.arch(g, 0.04, 0.44, -0.77, 0.24, 0.16);
g.stroke();
e.at(0.24, -0.98, "mouth");
// the iron pot on the ledge left of the mouth, and a clay crock beside it
g.fillStyle = "#3a3531";
g.beginPath();
g.moveTo(-0.11, -0.77);
g.bezierCurveTo(-0.19, -0.8, -0.19, -0.95, -0.12, -0.98);
g.lineTo(0.0, -0.98);
g.bezierCurveTo(0.07, -0.95, 0.07, -0.8, -0.01, -0.77);
g.closePath();
g.fill();
g.fillStyle = "#57504a";
g.fillRect(-0.13, -0.995, 0.15, 0.025);
g.fillStyle = "#9a6040";
g.beginPath();
g.moveTo(-0.24, -0.77);
g.bezierCurveTo(-0.3, -0.82, -0.29, -0.9, -0.26, -0.93);
g.lineTo(-0.2, -0.93);
g.bezierCurveTo(-0.17, -0.9, -0.16, -0.82, -0.2, -0.77);
g.closePath();
g.fill();
// the hollow under the hearth, arched, and the firewood in it: split logs' ends, each its own size, bark at the rim
L.arch(g, -0.02, 0.5, -0.12, 0.3, 0.12);
g.fillStyle = "#4e3e2e";
g.fill();
const ends = [[0.06, -0.19], [0.17, -0.18], [0.29, -0.2], [0.41, -0.18], [0.1, -0.31], [0.22, -0.3], [0.35, -0.32], [0.16, -0.42], [0.29, -0.43]];
ends.forEach(([x, y], i) => {
  const r = 0.045 + 0.012 * L.rnd(i, 95), a = L.rnd(i, 96) * 0.6;
  g.fillStyle = "#7c5c3c";
  g.beginPath();
  g.ellipse(x, y, r, r * 0.86, a, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = ["#d2b07c", "#c7a26c", "#dbbb88"][i % 3];
  g.beginPath();
  g.ellipse(x + 0.003, y - 0.002, r * 0.74, r * 0.62, a, 0, Math.PI * 2);
  g.fill();
});
// two little niches higher up, grey mittens drying in the right one
for (const x of [-0.36, -0.12]) {
  L.arch(g, x, x + 0.17, -1.38, 0.1, 0.06);
  g.fillStyle = "#9c8f7a";
  g.fill();
}
g.fillStyle = "#8e8b84";
g.fillRect(-0.09, -1.5, 0.05, 0.11);
g.fillRect(-0.03, -1.49, 0.05, 0.1);
// the corner toward the room, a soft line of shade
g.fillStyle = "rgba(150,134,110,0.35)";
g.fillRect(0.5, -1.87, 0.05, 1.75);
// the oven fork leant on the face at its left: a pale worn pole, its iron horns at the foot on the floor
g.strokeStyle = "#b8a07a";
g.lineWidth = 0.038;
g.beginPath();
g.moveTo(-0.4, -0.2);
g.lineTo(-0.47, -1.72);
g.stroke();
g.strokeStyle = "#5a5049";
g.lineWidth = 0.024;
g.beginPath();
g.moveTo(-0.4, -0.2);
g.lineTo(-0.4, -0.13);
g.moveTo(-0.5, -0.02);
g.quadraticCurveTo(-0.5, -0.13, -0.4, -0.13);
g.quadraticCurveTo(-0.3, -0.13, -0.3, -0.02);
g.stroke();
