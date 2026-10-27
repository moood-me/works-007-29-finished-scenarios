// The back yard seen from above (metres, y toward the viewer; the plane's centre 10 m off — a distance d is
// y = 10 − d): mown grass, mottled, a worn path from the porch steps out to the left, a dark bed along the fence.
g.fillStyle = '#5d7a46';
g.fillRect(-22, -13, 44, 26);
for (let i = 0; i < 160; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(70,96,52,0.5)' : 'rgba(118,142,84,0.35)';
  g.beginPath();
  g.ellipse(-22 + e.rnd() * 44, -13 + e.rnd() * 26, 0.4 + e.rnd() * 1.4, 0.2 + e.rnd() * 0.6, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(150,140,110,0.45)';
g.beginPath();
g.moveTo(-0.2, 10 - 3.3);
g.quadraticCurveTo(-2.5, 10 - 5.5, -6.5, 10 - 9.5);
g.lineTo(-7.3, 10 - 9.2);
g.quadraticCurveTo(-3.2, 10 - 5.0, 0.8, 10 - 3.0);
g.closePath();
g.fill();
g.fillStyle = '#3e4a32';
g.fillRect(-22, 10 - 13.6, 44, 0.7);
