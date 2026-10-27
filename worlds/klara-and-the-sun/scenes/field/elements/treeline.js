// The far edge of the field: a long low line of trees, soft blue-green in the haze, rounded crowns of uneven
// heights, a gap here and there (metres; the line 1200 m long, at most 14 m high).
g.fillStyle = '#7f8f72';
g.beginPath();
g.moveTo(-600, 0.5);
let x = -600;
while (x < 600) {
  const w = 6 + e.rnd() * 10;
  const h = e.rnd() < 0.12 ? 2 + e.rnd() * 2 : 7 + e.rnd() * 7;
  g.quadraticCurveTo(x + w / 2, -h * 1.25, x + w, -h * 0.55);
  x += w;
}
g.lineTo(600, 0.5);
g.closePath();
g.fill();
// a nearer, darker band of hedge along the foot
g.fillStyle = '#6e7d60';
g.fillRect(-600, -2.2, 520, 2.7);
