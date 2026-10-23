// The long table's top, seen from above: pale scrubbed pine, its planks running the length of it, the grain and the
// marks of years of scrubbing.
g.fillStyle = '#cdb48c';
g.fillRect(-0.475, -1.45, 0.95, 2.9);
const planks = 4, w = 0.95 / planks;
for (let k = 0; k < planks; k++) {
  const x = -0.475 + k * w;
  g.fillStyle = k % 2 ? 'rgba(186, 160, 120, 0.5)' : 'rgba(214, 196, 160, 0.4)';
  g.fillRect(x, -1.45, w, 2.9);
  g.strokeStyle = 'rgba(120, 96, 66, 0.6)';
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(x, -1.45);
  g.lineTo(x, 1.45);
  g.stroke();
  g.strokeStyle = 'rgba(150, 122, 86, 0.25)';
  g.lineWidth = 0.003;
  for (let j = 0; j < 5; j++) {
    const gx = x + w * (0.15 + 0.7 * e.rnd());
    g.beginPath();
    g.moveTo(gx, -1.45);
    g.bezierCurveTo(gx + 0.02, -0.4, gx - 0.02, 0.4, gx + 0.01, 1.45);
    g.stroke();
  }
}
