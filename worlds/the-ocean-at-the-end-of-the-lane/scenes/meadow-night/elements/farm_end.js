// The farmhouse's left gable end, seen aslant as it goes back (its own metres along it, toward us: −5 at the back, 0 at the front corner): the
// brick, the gable's slope up to the ridge, no windows.
g.fillStyle = '#8c5642';
g.beginPath();
g.moveTo(-5, 0);
g.lineTo(-5, -5.2);
g.lineTo(-2.5, -7.6);
g.lineTo(0, -5.2);
g.lineTo(0, 0);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(200, 180, 160, 0.16)';
g.lineWidth = 0.02;
for (let y = -0.08; y > -5.2; y -= 0.16) {
  g.beginPath();
  g.moveTo(-5, y);
  g.lineTo(0, y);
  g.stroke();
}
