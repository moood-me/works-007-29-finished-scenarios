// Heavy wine-red velvet curtains either side of the window, tied back with gold cords, a pelmet over them.
const drape = (x0, x1, tie) => {
  g.fillStyle = '#7a2632';
  g.beginPath();
  g.moveTo(x0, -2.55);
  g.lineTo(x1, -2.55);
  g.quadraticCurveTo(x1 - (x1 - x0) * 0.1, -1.6, tie, -1.15);
  g.quadraticCurveTo(x1 - (x1 - x0) * 0.25, -0.6, x1 - (x1 - x0) * 0.15, 0);
  g.lineTo(x0, 0);
  g.closePath();
  g.fill();
  g.strokeStyle = '#5e1b26';
  g.lineWidth = 0.025;
  g.beginPath();
  for (let k = 1; k < 5; k++) {
    const x = x0 + ((x1 - x0) * k) / 5;
    g.moveTo(x, -2.5);
    g.quadraticCurveTo(x + (tie - x) * 0.5, -1.6, tie + (x - x0) * 0.08, -1.18);
    g.quadraticCurveTo(x0 + (x - x0) * 0.9, -0.6, x0 + (x - x0) * 0.95, 0);
  }
  g.stroke();
  g.fillStyle = '#c9a050';
  g.beginPath();
  g.ellipse(tie, -1.15, 0.06, 0.04, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(tie - 0.012, -1.15, 0.024, 0.16);
};
drape(-1.0, -0.5, -0.62);
g.save();
g.scale(-1, 1);
drape(-1.0, -0.5, -0.62);
g.restore();
// the pelmet
g.fillStyle = '#6a1f2a';
g.beginPath();
g.moveTo(-1.05, -2.78);
g.lineTo(1.05, -2.78);
g.lineTo(1.05, -2.5);
for (let x = 1.05; x > -1.05; x -= 0.21) g.quadraticCurveTo(x - 0.105, -2.4, x - 0.21, -2.5);
g.closePath();
g.fill();
g.fillStyle = '#c9a050';
g.fillRect(-1.05, -2.8, 2.1, 0.03);
