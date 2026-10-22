// The far ridges across the plain, some twenty kilometres of them seen side-on (here 6 km off, their foot at the plain):
// long bare crests, blue-grey stone with snow on their upper slopes. Metres; the foot at y 0.
const top = x => 260 + 150 * Math.sin(x * 0.0009 + 0.7) + 90 * Math.sin(x * 0.0023 + 2.1) + 40 * Math.sin(x * 0.0071) + 18 * Math.sin(x * 0.019 + 1.2);
g.fillStyle = '#8796ab';
g.beginPath();
g.moveTo(-7000, 60);
for (let x = -7000; x <= 7000; x += 40) g.lineTo(x, -top(x));
g.lineTo(7000, 60);
g.closePath();
g.fill();
// snow on the upper slopes: down from the crest, raggedly, more on the higher parts
g.fillStyle = '#dfe6ef';
g.beginPath();
g.moveTo(-7000, -top(-7000));
for (let x = -7000; x <= 7000; x += 40) g.lineTo(x, -top(x));
for (let x = 7000; x >= -7000; x -= 40) {
  const h = top(x);
  const depth = Math.max(0, h - 200) * (0.55 + 0.35 * Math.sin(x * 0.031) * Math.sin(x * 0.0117 + 0.5));
  g.lineTo(x, -h + depth);
}
g.closePath();
g.fill();
// a nearer, lower line of hills at its foot
g.fillStyle = '#9aa5b3';
g.beginPath();
g.moveTo(-7000, 60);
for (let x = -7000; x <= 7000; x += 50) g.lineTo(x, -(70 + 35 * Math.sin(x * 0.0031 + 0.3) + 20 * Math.sin(x * 0.011)));
g.lineTo(7000, 60);
g.closePath();
g.fill();
