// The far side of the field: a low line of hedges and round-topped trees, blue-green in the distance (metres, 70 m off).
g.fillStyle = '#6f8a6a';
g.beginPath();
g.moveTo(-60, 0.5);
for (let x = -60; x <= 60; x += 1.5) g.lineTo(x, -2.2 - 0.6 * Math.sin(x * 0.7) - 0.4 * e.rnd());
g.lineTo(60, 0.5);
g.closePath();
g.fill();
for (let k = 0; k < 14; k++) {
  const x = -56 + 112 * e.rnd(), h = 4 + 5 * e.rnd(), r = 2 + 2.2 * e.rnd();
  g.fillStyle = k % 3 ? '#62805f' : '#587456';
  g.fillRect(x - 0.15, -h + r, 0.3, h - r);
  g.beginPath();
  g.ellipse(x, -h + r * 0.4, r, r * 0.8, 0, 0, Math.PI * 2);
  g.fill();
}
