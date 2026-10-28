// The back fence along the bottom of the yard, from its foot (metres): weathered pickets, two rails.
g.fillStyle = '#b6ad99';
for (let x = -12; x < 12; x += 0.2) {
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -1.25);
  g.lineTo(x + 0.04, -1.32);
  g.lineTo(x + 0.08, -1.25);
  g.lineTo(x + 0.08, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = '#9d9482';
g.fillRect(-12, -1.0, 24, 0.07);
g.fillRect(-12, -0.35, 24, 0.07);
