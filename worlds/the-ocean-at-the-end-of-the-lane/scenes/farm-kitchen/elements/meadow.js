// The field behind the farm, seen from above: summer grass, greener near the pond, a worn path toward it.
const w = 400, d = 228;
g.fillStyle = '#9aa86a';
g.fillRect(-w / 2, -d / 2, w, d);
// broad patches of lighter and darker grass
for (let k = 0; k < 60; k++) {
  const x = -w / 2 + w * e.rnd(), y = -d / 2 + d * e.rnd(), r = 3 + 12 * e.rnd();
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(122, 146, 84, 0.5)' : 'rgba(178, 176, 110, 0.4)';
  g.beginPath();
  g.ellipse(x, y, r * 1.6, r, 0, 0, Math.PI * 2);
  g.fill();
}
// the trodden path from the house down to the pond (its near edge at x 3.5, y 102.5 in the field's metres)
g.strokeStyle = 'rgba(176, 156, 112, 0.7)';
g.lineWidth = 0.9;
g.beginPath();
g.moveTo(1, 110);
g.quadraticCurveTo(1.5, 105, 3.5, 102.5);
g.stroke();
