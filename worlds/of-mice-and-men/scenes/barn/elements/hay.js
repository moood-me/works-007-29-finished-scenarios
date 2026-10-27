// The pile of new hay at the back right (metres, its foot at the middle): heaped against the back and the right
// walls, highest in the corner (2.5 m), sloping off to the left; loose and soft, gold with paler sun-bleached tops,
// stalks sticking out of it every way.
const top = x => -2.5 * Math.pow(Math.max(0, Math.min(1, (x + 2.7) / 4.6)), 0.8) * (1 - 0.06 * Math.sin(x * 4.1));
g.fillStyle = '#b89350';
g.beginPath();
g.moveTo(-2.7, 0.1);
for (let x = -2.7; x <= 2.45; x += 0.1) g.lineTo(x, top(x));
g.lineTo(2.45, 0.1);
g.closePath();
g.fill();
g.save();
g.clip();
for (let i = 0; i < 26; i++) {
  const x = -2.6 + e.rnd() * 5, y = top(x) * (0.2 + e.rnd() * 0.8);
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(214,184,112,0.55)' : 'rgba(150,118,62,0.45)';
  g.beginPath();
  g.ellipse(x, y, 0.3 + e.rnd() * 0.5, 0.12 + e.rnd() * 0.15, (e.rnd() - 0.5) * 0.6, 0, Math.PI * 2);
  g.fill();
}
e.lib.straw(g, -2.7, -2.6, 2.45, 0.1, 1500, ['#e0c27a', '#c9a45a', '#a7823f', '#ecd593'], e.rnd);
g.restore();
g.lineWidth = 0.012;
g.strokeStyle = '#d6b66e';
for (let x = -2.6; x < 2.4; x += 0.05) {
  const y = top(x), a = -Math.PI / 2 + (e.rnd() - 0.5) * 2.4, l = 0.06 + e.rnd() * 0.12;
  g.beginPath();
  g.moveTo(x, y + 0.02);
  g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  g.stroke();
}
