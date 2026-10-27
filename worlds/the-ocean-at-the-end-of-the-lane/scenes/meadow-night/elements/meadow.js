// The meadow behind the farm, seen from above (400 by 200 m, the viewer at its near edge): summer grass, its tussocks
// in broad patches, a worn path from the farm's yard across it. In daylight colours: the moon makes the night of it.
const w = 400, d = 200;
g.fillStyle = '#7f9560';
g.fillRect(-w / 2, -d / 2, w, d);
for (let k = 0; k < 140; k++) {
  const x = -w / 2 + w * e.rnd(), y = -d / 2 + d * Math.pow(e.rnd(), 0.6) * (e.rnd() < 0.5 ? 1 : 1), r = 1 + 7 * e.rnd();
  g.fillStyle = e.rnd() < 0.55 ? 'rgba(98, 122, 72, 0.55)' : 'rgba(150, 160, 104, 0.4)';
  g.beginPath();
  g.ellipse(x, y, r * 1.7, r, 0, 0, Math.PI * 2);
  g.fill();
}
// near the eye: small dark tussocks
for (let k = 0; k < 400; k++) {
  const x = -12 + 24 * e.rnd(), y = 100 - 18 * e.rnd(), r = 0.05 + 0.12 * e.rnd();
  g.fillStyle = e.rnd() < 0.6 ? 'rgba(84, 108, 62, 0.7)' : 'rgba(146, 156, 98, 0.6)';
  g.beginPath();
  g.ellipse(x, y, r * 1.5, r, 0, 0, Math.PI * 2);
  g.fill();
}
// the path from the farm's yard (16 m off, 5 m right) across toward the left, worn pale
g.strokeStyle = 'rgba(160, 150, 112, 0.55)';
g.lineWidth = 0.7;
g.lineCap = 'round';
g.beginPath();
g.moveTo(4.2, 100 - 15);
g.bezierCurveTo(3.5, 100 - 11, -2, 100 - 10.5, -6, 100 - 13);
g.bezierCurveTo(-12, 100 - 17, -24, 100 - 22, -40, 100 - 26);
g.stroke();
