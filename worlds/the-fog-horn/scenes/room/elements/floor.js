// The room's floor from above, metres (its middle the room's, y toward the viewer): boards of scrubbed pine running
// back from the viewer, their ends staggered, a few knots, a paler worn way from the ladder to the table and the
// stove. The wall hides all that lies past its round.
g.fillStyle = '#5c4836';
g.fillRect(-3.2, -3.2, 6.4, 6.4);
const tones = ['#8a6f55', '#836a50', '#90755a', '#7d644c'];
const W = 0.19;
for (let i = 0, x = -3.2; x < 3.2; x += W, i++) {
  let y = -3.2 - e.rnd() * 1.4;
  while (y < 3.2) {
    const len = 1.2 + e.rnd() * 1.6;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.008, y + 0.008, W - 0.016, len - 0.016);
    y += len;
  }
}
// knots and nail heads
for (let i = 0; i < 40; i++) {
  g.fillStyle = 'rgba(92,70,50,0.6)';
  g.beginPath();
  g.ellipse(-3 + e.rnd() * 6, -3 + e.rnd() * 6, 0.02 + e.rnd() * 0.02, 0.035 + e.rnd() * 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
// the worn way: paler where feet go
g.fillStyle = 'rgba(176,150,120,0.22)';
g.beginPath();
g.ellipse(0, -0.95, 1.6, 0.9, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(1.4, -1.6, 0.5, 0.35, 0.6, 0, Math.PI * 2);
g.fill();
