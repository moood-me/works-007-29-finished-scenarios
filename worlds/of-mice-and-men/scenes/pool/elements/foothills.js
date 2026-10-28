// The foothills a kilometre off: low round hills of dry golden grass, live oaks dark on them
const A = e.anim;
const crest = x => 70 + 45 * Math.sin(x / 420 + 0.8) + 25 * Math.sin(x / 170 + 2.4);
g.fillStyle = '#c9a068';
g.beginPath();
g.moveTo(-3200, 10);
for (let x = -3200; x <= 3200; x += 25) g.lineTo(x, -crest(x));
g.lineTo(3200, 10);
g.closePath();
g.fill();
// live oaks: dark round crowns, more of them low down
for (let i = 0; i < 260; i++) {
  const x = -3150 + A.hash(i, 7) * 6300, top = -crest(x), y = top * (0.05 + 0.85 * A.hash(i, 8) ** 1.6), r = 6 + 9 * A.hash(i, 9);
  g.fillStyle = A.hash(i, 10) < 0.5 ? '#5f623f' : '#6d6c45';
  g.beginPath();
  g.ellipse(x, y - r * 0.6, r, r * 0.7, 0, 0, Math.PI * 2);
  g.fill();
}
