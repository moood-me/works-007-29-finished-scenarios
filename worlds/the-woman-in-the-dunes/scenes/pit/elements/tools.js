// Her two shovels leaning on the front wall left of the door (on `house`, just before the front): long wooden handles,
// worn iron blades in the sand; and a straw basket on its side by them.
const shovel = (x, lean) => {
  g.save();
  g.translate(x, 0);
  g.rotate(lean);
  g.fillStyle = "#8b7356";
  g.fillRect(-0.025, -1.55, 0.05, 1.3);
  g.fillStyle = "#6c5a45";
  g.fillRect(-0.08, -1.6, 0.16, 0.05);
  g.fillStyle = "#5f6062";
  g.beginPath();
  g.moveTo(-0.13, -0.27);
  g.lineTo(0.13, -0.27);
  g.lineTo(0.11, -0.05);
  g.quadraticCurveTo(0, 0.04, -0.11, -0.05);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(220, 210, 190, 0.35)";
  g.fillRect(-0.11, -0.26, 0.04, 0.2);
  g.restore();
};
shovel(-0.15, 0.12);
shovel(0.12, 0.2);
// the basket on its side
g.fillStyle = "#a88a58";
g.beginPath();
g.ellipse(0.62, -0.2, 0.3, 0.2, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#7e6440";
g.lineWidth = 0.02;
for (let k = -2; k <= 2; k++) {
  g.beginPath();
  g.ellipse(0.62, -0.2, 0.3 - Math.abs(k) * 0.05, 0.2, 0, 0, Math.PI * 2);
  g.stroke();
}
// sand over their feet
g.fillStyle = "#d8b680";
g.beginPath();
g.ellipse(0.2, 0.02, 0.75, 0.09, 0, Math.PI, 0);
g.fill();
