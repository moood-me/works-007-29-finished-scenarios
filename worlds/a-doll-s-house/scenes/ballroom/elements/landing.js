// The landing beyond the doorway (its +x runs to the front, as the right wall's): a warm ochre wall, the stairs' dark
// banister going down to the Helmers' floor, a wall lamp (its light the glow `lamp`) — where the guests come up from
// and where Torvald takes Nora down after the dance. Its lamp lights the landing as the light "landing", before it.
g.fillStyle = '#c99d63';
g.fillRect(-1.0, -3.0, 2.0, 3.02);
g.fillStyle = '#7d5a35';
g.fillRect(-1.0, -0.9, 2.0, 0.9);
g.fillStyle = '#4a3020';
g.fillRect(-1.0, -0.98, 2.0, 0.08);
// the banister, falling to the left
g.strokeStyle = '#3a2418';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(-1.0, -0.7);
g.lineTo(0.9, -1.1);
g.stroke();
g.lineWidth = 0.03;
for (let x = -0.9; x < 0.9; x += 0.16) {
  g.beginPath();
  g.moveTo(x, -0.7 - (x + 1.0) * 0.21);
  g.lineTo(x, 0);
  g.stroke();
}
// the wall lamp: a brass bracket, a frosted globe
g.fillStyle = '#b8924a';
g.fillRect(0.38, -2.05, 0.04, 0.22);
g.fillStyle = '#ffe9be';
g.beginPath();
g.arc(0.4, -2.12, 0.09, 0, Math.PI * 2);
g.fill();
e.light(0.4, -2.12, 0.12, '#ffd28a', 0.8, 'lamp');
