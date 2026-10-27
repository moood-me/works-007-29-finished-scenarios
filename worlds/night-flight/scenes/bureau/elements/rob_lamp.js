// Robineau's lamp: a brass stand, a green glass shade like a half pipe, its light on the desk (`lamp`, by `lamps`).
g.fillStyle = '#9c7e3e';
g.beginPath();
g.ellipse(0, -0.02, 0.1, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.014, -0.4, 0.028, 0.38);
g.fillStyle = '#2f6a48';
g.beginPath();
g.moveTo(-0.22, -0.38);
g.quadraticCurveTo(0, -0.56, 0.22, -0.38);
g.lineTo(0.21, -0.35);
g.lineTo(-0.21, -0.35);
g.closePath();
g.fill();
g.fillStyle = '#4f9a6e';
g.fillRect(-0.19, -0.45, 0.38, 0.015);
if (e.state.lamps) {
  g.fillStyle = '#fff1cf';
  g.fillRect(-0.16, -0.355, 0.32, 0.02);
  e.light(0, -0.34, 0.25, '#ffe0a8', 0.8, 'lamp');
}
