// The sea from above, 14 m under the window, metres, in its daylight colour (the scene's light makes the hour):
// streaks of the swell lying across, the perspective making the far ones dense. Only its far part is ever seen.
g.fillStyle = '#93a4b2';
g.fillRect(-4000, -1500, 8000, 3000);
for (let i = 0; i < 700; i++) {
  // y toward the viewer: the plane's near edge is y 1500
  const near = Math.pow(e.rnd(), 1.6);
  const y = 1500 - 200 - near * 2800;
  const x = (e.rnd() - 0.5) * 1200 * (0.2 + near * 3);
  const len = 6 + e.rnd() * 20 + near * 40;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(214,224,230,0.35)' : 'rgba(92,112,130,0.3)';
  g.fillRect(x, y, len, 0.5 + e.rnd() * 1.2 + near * 2);
}
