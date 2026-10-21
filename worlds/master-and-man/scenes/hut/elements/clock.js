// The ходики on the wall: a little wooden case shaped like a house, a painted face with two hands; under it the
// pendulum swinging (a layer about its hinge) and the two weights hanging on their chains.
// (x −0.14…0.14; the case at y −1.02…−0.8; the pendulum's hinge at y −0.8; the weights down to y −0.15)
g.fillStyle = "#6e4e32";
g.beginPath();
g.moveTo(-0.11, -0.8);
g.lineTo(-0.11, -0.97);
g.lineTo(0, -1.04);
g.lineTo(0.11, -0.97);
g.lineTo(0.11, -0.8);
g.closePath();
g.fill();
g.fillStyle = "#f0e8d4";
g.beginPath();
g.arc(0, -0.89, 0.07, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#c8402e";
g.beginPath();
g.arc(0, -0.89, 0.07, Math.PI * 1.1, Math.PI * 1.4);
g.lineTo(0, -0.89);
g.closePath();
g.fill();
g.strokeStyle = "#2a2420";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0, -0.89);
g.lineTo(0.035, -0.92);
g.moveTo(0, -0.89);
g.lineTo(-0.012, -0.84);
g.stroke();
// the weights on their chains
g.strokeStyle = "#5a524a";
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(-0.05, -0.8);
g.lineTo(-0.05, -0.4);
g.moveTo(0.05, -0.8);
g.lineTo(0.05, -0.25);
g.stroke();
g.fillStyle = "#4a3e30";
g.fillRect(-0.065, -0.42, 0.03, 0.12);
g.fillRect(0.035, -0.27, 0.03, 0.12);
// the pendulum
e.layer("pendulum", { pivot: [0, -0.8], depth: 0.02 }, l => {
  l.strokeStyle = "#8a7a52";
  l.lineWidth = 0.006;
  l.beginPath();
  l.moveTo(0, -0.8);
  l.lineTo(0, -0.5);
  l.stroke();
  l.fillStyle = "#c8a24a";
  l.beginPath();
  l.arc(0, -0.48, 0.03, 0, Math.PI * 2);
  l.fill();
});
e.at(0, -0.89, "face");
