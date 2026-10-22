// The low table's body seen from the front: the apron under the top, four short turned legs (the far two a little
// in from the near ones)
g.fillStyle = '#3d2e24';
for (const x of [-0.42, 0.36]) g.fillRect(x, -0.38, 0.06, 0.38);
g.fillStyle = '#4b392c';
for (const x of [-0.48, 0.42]) {
  g.beginPath();
  g.moveTo(x, -0.38);
  g.lineTo(x + 0.07, -0.38);
  g.lineTo(x + 0.06, -0.18);
  g.lineTo(x + 0.075, -0.1);
  g.lineTo(x + 0.055, 0);
  g.lineTo(x + 0.015, 0);
  g.lineTo(x - 0.005, -0.1);
  g.lineTo(x + 0.01, -0.18);
  g.closePath();
  g.fill();
}
g.fillStyle = '#4e3b2e';
g.fillRect(-0.5, -0.42, 1, 0.07);
