// What stands on the table: the soup tureen with its ladle, two bottles of red and a carafe of white, the glasses —
// wine in some —, the cheese under its glass bell waiting for later.
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
// the tureen: white porcelain, a gold rim, its lid set aside on the cloth, the ladle's handle out of it
const tx = -0.55;
g.fillStyle = '#f4f0e8';
g.beginPath();
g.moveTo(tx - 0.2, -0.17);
g.quadraticCurveTo(tx - 0.2, -0.03, tx - 0.08, -0.02);
g.lineTo(tx + 0.08, -0.02);
g.quadraticCurveTo(tx + 0.2, -0.03, tx + 0.2, -0.17);
g.closePath();
g.fill();
g.fillRect(tx - 0.07, -0.025, 0.14, 0.025);
g.fillStyle = '#c9a050';
g.fillRect(tx - 0.205, -0.18, 0.41, 0.015);
g.fillStyle = '#e5ddcd';
for (const s of [-1, 1]) {
  g.beginPath();
  g.ellipse(tx + s * 0.22, -0.13, 0.03, 0.018, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#b5b4b0';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(tx + 0.06, -0.17);
g.lineTo(tx + 0.16, -0.3);
g.stroke();
g.fillStyle = '#f4f0e8';
g.beginPath();
g.ellipse(tx - 0.42, -0.02, 0.15, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c9a050';
g.beginPath();
g.arc(tx - 0.42, -0.06, 0.02, 0, Math.PI * 2);
g.fill();
// the bottles, the carafe
bottle(0.15, '#2f4a2c', '#efe4c8');
bottle(1.05, '#3a2a2a', '#e9dcc0');
g.fillStyle = 'rgba(232, 214, 150, 0.8)';
g.beginPath();
g.moveTo(-1.62, 0);
g.quadraticCurveTo(-1.74, -0.08, -1.68, -0.16);
g.lineTo(-1.64, -0.27);
g.lineTo(-1.58, -0.27);
g.lineTo(-1.54, -0.16);
g.quadraticCurveTo(-1.48, -0.08, -1.6, 0);
g.closePath();
g.fill();
// the cheese under its bell
g.fillStyle = '#e9c76c';
g.fillRect(1.5, -0.07, 0.18, 0.07);
g.fillStyle = 'rgba(230, 238, 236, 0.35)';
g.beginPath();
g.moveTo(1.47, 0);
g.lineTo(1.47, -0.12);
g.quadraticCurveTo(1.59, -0.24, 1.71, -0.12);
g.lineTo(1.71, 0);
g.closePath();
g.fill();
for (const [x, w] of [[-1.15, 1], [-0.1, 0], [0.75, 1], [1.85, 1]]) glass(x, w);
