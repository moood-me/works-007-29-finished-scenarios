// The loose hay fallen off the pile, a low soft drift along its foot where Lennie sits back into it (metres, its foot
// at the middle; up to 0.55 m): the same gold, stalks sticking out every way.
const top = x => -0.55 * Math.sin(Math.max(0, Math.min(1, (x + 2.2) / 4.95)) * Math.PI) * (0.8 + 0.2 * Math.sin(x * 5.3));
g.fillStyle = '#c29d58';
g.beginPath();
g.moveTo(-2.2, 0.1);
for (let x = -2.2; x <= 2.75; x += 0.08) g.lineTo(x, top(x));
g.lineTo(2.75, 0.1);
g.closePath();
g.fill();
g.save();
g.clip();
e.lib.straw(g, -2.2, -0.6, 2.75, 0.1, 700, ['#e0c27a', '#c9a45a', '#a7823f', '#ecd593'], e.rnd);
g.restore();
g.lineWidth = 0.012;
g.strokeStyle = '#d6b66e';
for (let x = -2.1; x < 2.7; x += 0.04) {
  const y = top(x), a = -Math.PI / 2 + (e.rnd() - 0.5) * 2.6, l = 0.05 + e.rnd() * 0.1;
  g.beginPath();
  g.moveTo(x, y + 0.02);
  g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  g.stroke();
}
