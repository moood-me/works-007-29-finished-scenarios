// The landing beyond the doorway, its side wall (its +x runs to the front, as the right wall's; x −1.3 at the back,
// where the end wall stands): a warm ochre wall over a dark wainscot, the stairs' banister going down to the Helmers'
// floor — where the guests come up from and where Torvald takes Nora down after the dance.
g.fillStyle = '#c99d63';
g.fillRect(-1.32, -3.0, 2.64, 3.02);
g.fillStyle = '#7d5a35';
g.fillRect(-1.32, -0.9, 2.64, 0.9);
g.fillStyle = '#4a3020';
g.fillRect(-1.32, -0.98, 2.64, 0.08);
// the banister, falling toward the back
g.strokeStyle = '#3a2418';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(1.3, -1.0);
g.lineTo(-1.3, -0.45);
g.stroke();
g.lineWidth = 0.03;
for (let x = -1.2; x < 1.3; x += 0.16) {
  g.beginPath();
  g.moveTo(x, -0.45 - (x + 1.3) * 0.21);
  g.lineTo(x, 0);
  g.stroke();
}
