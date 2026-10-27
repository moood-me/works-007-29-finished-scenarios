// The meadow behind the farm, seen from above (1600 by 1000 m, the viewer at its near edge, y = 500 − distance): summer grass, its tussocks
// in broad patches, a worn path from the farm's yard across it. In daylight colours: the moon makes the night of it.
const w = 1600, d = 1000;
g.fillStyle = '#7f9560';
g.fillRect(-w / 2, -d / 2, w, d);
for (let k = 0; k < 160; k++) {
  const x = -60 + 120 * e.rnd(), y = 500 - 150 * e.rnd(), r = 1 + 7 * e.rnd();
  g.fillStyle = e.rnd() < 0.55 ? 'rgba(98, 122, 72, 0.55)' : 'rgba(150, 160, 104, 0.4)';
  g.beginPath();
  g.ellipse(x, y, r * 1.7, r, 0, 0, Math.PI * 2);
  g.fill();
}
// near the eye: small dark tussocks
for (let k = 0; k < 400; k++) {
  const x = -12 + 24 * e.rnd(), y = 500 - 18 * e.rnd(), r = 0.05 + 0.12 * e.rnd();
  g.fillStyle = e.rnd() < 0.6 ? 'rgba(84, 108, 62, 0.7)' : 'rgba(146, 156, 98, 0.6)';
  g.beginPath();
  g.ellipse(x, y, r * 1.5, r, 0, 0, Math.PI * 2);
  g.fill();
}
// the path from the farm's yard (16 m off, 6 m right) across toward the left, worn pale
g.strokeStyle = 'rgba(160, 150, 112, 0.55)';
g.lineWidth = 0.7;
g.lineCap = 'round';
g.beginPath();
g.moveTo(5.6, 500 - 15);
g.bezierCurveTo(4.5, 500 - 11, -2, 500 - 10.5, -6, 500 - 13);
g.bezierCurveTo(-12, 500 - 17, -24, 500 - 22, -40, 500 - 26);
g.stroke();
