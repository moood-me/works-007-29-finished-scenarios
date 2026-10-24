// The long table's top, seen from above: pale scrubbed pine, its planks running the length of it, the grain and the
// marks of years of scrubbing.
g.fillStyle = '#cdb48c';
g.fillRect(-0.45, -1.2, 0.9, 2.4);
const planks = 4, w = 0.9 / planks;
for (let k = 0; k < planks; k++) {
  const x = -0.45 + k * w;
  g.fillStyle = k % 2 ? 'rgba(186, 160, 120, 0.5)' : 'rgba(214, 196, 160, 0.4)';
  g.fillRect(x, -1.2, w, 2.4);
  g.strokeStyle = 'rgba(120, 96, 66, 0.6)';
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(x, -1.2);
  g.lineTo(x, 1.2);
  g.stroke();
  g.strokeStyle = 'rgba(150, 122, 86, 0.25)';
  g.lineWidth = 0.003;
  for (let j = 0; j < 5; j++) {
    const gx = x + w * (0.15 + 0.7 * e.rnd());
    g.beginPath();
    g.moveTo(gx, -1.2);
    g.bezierCurveTo(gx + 0.02, -0.4, gx - 0.02, 0.4, gx + 0.01, 1.2);
    g.stroke();
  }
}
