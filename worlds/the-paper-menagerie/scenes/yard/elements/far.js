// Far off all round (110 m): the town's other gardens and roofs, low, soft blue-green with the morning's haze —
// rounded tree crowns, a roof or two between them.
for (let i = 0; i < 120; i++) {
  const x = -300 + i * 5 + e.rnd() * 3,
    r = 3 + e.rnd() * 4;
  g.fillStyle = i % 3 ? '#9fb59a' : '#8aa48a';
  g.beginPath();
  g.ellipse(x, -r * 0.6, r, r * 0.9, 0, 0, Math.PI * 2);
  g.fill();
  if (i % 7 === 3) {
    g.fillStyle = '#a7a3a8';
    g.beginPath();
    g.moveTo(x - 4, -2);
    g.lineTo(x, -5);
    g.lineTo(x + 4, -2);
    g.closePath();
    g.fill();
  }
}
g.fillStyle = '#9fb59a';
g.fillRect(-300, -2.5, 600, 2.55);
