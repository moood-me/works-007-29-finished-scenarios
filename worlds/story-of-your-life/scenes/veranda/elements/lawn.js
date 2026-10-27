// The back yard seen from above (metres, y toward the viewer; the plane's centre 15 m off — a distance d is
// y = 15 − d): mown grass, mottled, a worn path from the deck's corner out to the gate on the left, a dark bed along
// the back fence, the neighbours' grass beyond it.
const Y = d => 15 - d;
g.fillStyle = '#5d7a46';
g.fillRect(-22, -20, 44, 40);
for (let i = 0; i < 200; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(70,96,52,0.5)' : 'rgba(118,142,84,0.35)';
  g.beginPath();
  g.ellipse(-22 + e.rnd() * 44, -20 + e.rnd() * 40, 0.4 + e.rnd() * 1.4, 0.2 + e.rnd() * 0.6, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(150,140,110,0.45)';
g.beginPath();
g.moveTo(-3.6, Y(2.6));
g.quadraticCurveTo(-5.5, Y(6.5), -7.4, Y(13.3));
g.lineTo(-8.2, Y(13.3));
g.quadraticCurveTo(-6.4, Y(6.5), -3.6, Y(1.8));
g.closePath();
g.fill();
g.fillStyle = '#3e4a32';
g.fillRect(-22, Y(13.4), 44, 0.7);
g.fillStyle = '#4f6a3e';
g.fillRect(-22, -20, 44, Y(13.4) + 20);
