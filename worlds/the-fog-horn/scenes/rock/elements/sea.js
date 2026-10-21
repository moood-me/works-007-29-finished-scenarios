// The sea from above, metres, in its daylight colour (the scene's light makes the hour): streaks of the swell lying
// across — more of them near the rock, where the eye sees them close; the perspective makes the far ones dense.
g.fillStyle = '#93a4b2';
g.fillRect(-4000, -1500, 8000, 3000);
for (let i = 0; i < 900; i++) {
  // y toward the viewer: the plane's near edge (the rock) is y 1500
  const near = Math.pow(e.rnd(), 2.2);
  const y = 1500 - near * 3000;
  const x = (e.rnd() - 0.5) * 900 * (0.15 + near * 6);
  const len = 2 + e.rnd() * 9 + near * 30;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(214,224,230,0.35)' : 'rgba(92,112,130,0.3)';
  g.fillRect(x, y, len, 0.12 + e.rnd() * 0.3 + near * 1.5);
}
