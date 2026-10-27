// The circle of dark grass the boy is put in (3 m across, seen from above): the grass in it darker and lower, as if
// pressed, with a soft edge where it meets the meadow.
const r = 1.5;
const fill = g.createRadialGradient(0, 0, r * 0.6, 0, 0, r);
fill.addColorStop(0, 'rgba(46, 62, 44, 1)');
fill.addColorStop(0.85, 'rgba(52, 68, 46, 1)');
fill.addColorStop(1, 'rgba(70, 88, 56, 0)');
g.fillStyle = fill;
g.beginPath();
g.arc(0, 0, r, 0, Math.PI * 2);
g.fill();
for (let k = 0; k < 90; k++) {
  const a = Math.PI * 2 * e.rnd(), q = Math.sqrt(e.rnd()) * r * 0.9, s = 0.04 + 0.08 * e.rnd();
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(34, 48, 34, 0.7)' : 'rgba(64, 80, 52, 0.6)';
  g.beginPath();
  g.ellipse(Math.cos(a) * q, Math.sin(a) * q, s * 1.6, s, a, 0, Math.PI * 2);
  g.fill();
}
