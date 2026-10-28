// What stands on the table: two bottles of red, a carafe of white, the glasses — some with wine left in them — the
// round loaf and the big wheel of cheese.
const glass = (x, wine) => {
  g.fillStyle = 'rgba(225, 232, 230, 0.55)';
  g.fillRect(x - 0.004, -0.09, 0.008, 0.09);
  g.beginPath();
  g.ellipse(x, -0.002, 0.03, 0.006, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.moveTo(x - 0.035, -0.17);
  g.quadraticCurveTo(x - 0.035, -0.09, x, -0.09);
  g.quadraticCurveTo(x + 0.035, -0.09, x + 0.035, -0.17);
  g.closePath();
  g.fill();
  if (wine) {
    g.fillStyle = '#6e1420';
    g.beginPath();
    g.moveTo(x - 0.031, -0.13);
    g.quadraticCurveTo(x - 0.03, -0.095, x, -0.095);
    g.quadraticCurveTo(x + 0.03, -0.095, x + 0.031, -0.13);
    g.closePath();
    g.fill();
  }
};
const bottle = (x, body, label) => {
  g.fillStyle = body;
  g.beginPath();
  g.moveTo(x - 0.04, 0);
  g.lineTo(x - 0.04, -0.2);
  g.quadraticCurveTo(x - 0.04, -0.25, x - 0.013, -0.27);
  g.lineTo(x - 0.013, -0.34);
  g.lineTo(x + 0.013, -0.34);
  g.lineTo(x + 0.013, -0.27);
  g.quadraticCurveTo(x + 0.04, -0.25, x + 0.04, -0.2);
  g.lineTo(x + 0.04, 0);
  g.closePath();
  g.fill();
  g.fillStyle = label;
  g.fillRect(x - 0.04, -0.15, 0.08, 0.07);
  g.fillStyle = '#7a1f25';
  g.fillRect(x - 0.015, -0.355, 0.03, 0.025);
};
bottle(-0.95, '#2f4a2c', '#efe4c8');
bottle(0.0, '#3a2a2a', '#e9dcc0');
// the carafe of white
g.fillStyle = 'rgba(232, 214, 150, 0.8)';
g.beginPath();
g.moveTo(0.82, 0);
g.quadraticCurveTo(0.7, -0.08, 0.76, -0.16);
g.lineTo(0.8, -0.27);
g.lineTo(0.86, -0.27);
g.lineTo(0.9, -0.16);
g.quadraticCurveTo(0.96, -0.08, 0.84, 0);
g.closePath();
g.fill();
// the loaf, the cheese
g.fillStyle = '#c4925a';
g.beginPath();
g.ellipse(-0.6, -0.02, 0.13, 0.08, 0, Math.PI, 0);
g.fill();
g.fillStyle = '#e9c76c';
g.fillRect(-0.32, -0.09, 0.26, 0.09);
g.fillStyle = '#d6b45e';
g.beginPath();
g.ellipse(-0.19, -0.09, 0.13, 0.02, 0, 0, Math.PI * 2);
g.fill();
for (const [x, w] of [[-0.78, 1], [-0.4, 0], [0.32, 1], [0.6, 1], [1.08, 0]]) glass(x, w);
