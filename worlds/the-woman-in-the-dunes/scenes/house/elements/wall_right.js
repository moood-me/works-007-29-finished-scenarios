// The right wall, seen along its length (x 0 at the back wall, 4 at 1 m ahead of the eye): the other gable end, as
// the left — boards up to the roof's slope, the sooty roof above; sand seeping through; a straw rain-cape and her
// spare work robe hanging on pegs; a pair of straw sandals under them.
e.lib.boards(g, 81, -0.05, 4.05, -3.7);
g.fillStyle = "#5a4636";
g.beginPath();
g.moveTo(-0.05, -3.7);
g.lineTo(-0.05, -2.8);
g.lineTo(2.0, -3.6);
g.lineTo(4.05, -2.8);
g.lineTo(4.05, -3.7);
g.closePath();
g.fill();
g.strokeStyle = "#3f3127";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-0.05, -2.78);
g.lineTo(2.0, -3.58);
g.lineTo(4.05, -2.78);
g.stroke();

// the straw rain-cape on its peg: a shaggy bell of straw
g.fillStyle = "#4a3c30";
g.fillRect(1.18, -1.98, 0.04, 0.06);
g.fillStyle = "#a99366";
g.beginPath();
g.moveTo(1.2, -1.92);
g.quadraticCurveTo(0.92, -1.5, 0.82, -0.95);
g.lineTo(1.58, -0.95);
g.quadraticCurveTo(1.48, -1.5, 1.2, -1.92);
g.closePath();
g.fill();
g.strokeStyle = "#8a7550";
g.lineWidth = 0.012;
for (let k = 0; k < 14; k++) {
  const x = 0.86 + k * 0.05;
  g.beginPath();
  g.moveTo(1.2 + (x - 1.2) * 0.4, -1.6);
  g.lineTo(x, -0.95);
  g.stroke();
}
// her spare work robe, indigo, hung by its shoulders
g.fillStyle = "#4a5876";
g.beginPath();
g.moveTo(1.85, -1.95);
g.lineTo(2.35, -1.95);
g.lineTo(2.45, -1.05);
g.lineTo(1.75, -1.05);
g.closePath();
g.fill();
g.fillStyle = "#3c4862";
g.fillRect(2.07, -1.95, 0.06, 0.9);
g.fillStyle = "#4a3c30";
g.fillRect(2.08, -2.0, 0.04, 0.06);
// straw sandals on the floor beneath
g.fillStyle = "#b79f70";
g.beginPath();
g.ellipse(1.3, -0.03, 0.14, 0.035, 0, 0, Math.PI * 2);
g.ellipse(1.62, -0.03, 0.14, 0.035, 0, 0, Math.PI * 2);
g.fill();
