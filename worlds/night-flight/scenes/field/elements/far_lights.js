// The town's lights along the horizon on the right, a kilometre and a half off: warm and white specks in loose
// strings, denser toward the right, under them the dark line of its roofs.
g.fillStyle = '#232a3b';
g.beginPath();
g.moveTo(-700, 2);
for (let x = -700; x <= 400; x += 12) g.lineTo(x, -2 - 7 * e.rnd() * Math.max(0, (x + 700) / 1100));
g.lineTo(400, 2);
g.closePath();
g.fill();
for (let i = 0; i < 180; i++) {
  const t = e.rnd() ** 0.6;
  const x = -700 + 1100 * t;
  const y = -1 - 7 * e.rnd() * t;
  g.fillStyle = e.rnd() < 0.7 ? '#ffd9a0' : '#e6ecff';
  g.beginPath();
  g.arc(x, y, 0.5 + 0.7 * e.rnd(), 0, Math.PI * 2);
  g.fill();
}
