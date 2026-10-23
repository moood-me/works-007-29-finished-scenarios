// On the sill: a red geranium in a clay pot, and a blue-and-white jug.
g.fillStyle = '#a5583a';
g.beginPath();
g.moveTo(-0.5, -0.16);
g.lineTo(-0.3, -0.16);
g.lineTo(-0.33, 0);
g.lineTo(-0.47, 0);
g.closePath();
g.fill();
g.fillStyle = '#4f7040';
for (let k = 0; k < 9; k++) {
  const x = -0.4 + (e.rnd() - 0.5) * 0.3, y = -0.2 - 0.12 * e.rnd();
  g.beginPath();
  g.ellipse(x, y, 0.06, 0.045, e.rnd(), 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#c33b32';
for (let k = 0; k < 4; k++) {
  g.beginPath();
  g.arc(-0.4 + (e.rnd() - 0.5) * 0.22, -0.3 - 0.06 * e.rnd(), 0.035, 0, Math.PI * 2);
  g.fill();
}
// the jug
g.fillStyle = '#e9e6dc';
g.beginPath();
g.moveTo(0.3, 0);
g.bezierCurveTo(0.22, -0.08, 0.24, -0.18, 0.3, -0.24);
g.lineTo(0.42, -0.24);
g.bezierCurveTo(0.48, -0.18, 0.5, -0.08, 0.42, 0);
g.closePath();
g.fill();
g.strokeStyle = '#3d5d93';
g.lineWidth = 0.012;
for (const y of [-0.05, -0.14, -0.2]) {
  g.beginPath();
  g.moveTo(0.27, y);
  g.lineTo(0.45, y);
  g.stroke();
}
g.strokeStyle = '#e9e6dc';
g.lineWidth = 0.02;
g.beginPath();
g.arc(0.47, -0.13, 0.05, -1.3, 1.3);
g.stroke();
