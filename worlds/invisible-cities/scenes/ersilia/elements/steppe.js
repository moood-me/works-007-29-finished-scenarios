// The steppe from the viewer's feet to the horizon, seen from above: dry grass the colour of straw and ochre, in long
// streaks and patches, finer near. The plane's origin is its centre at distance 1000; y toward the viewer.
g.fillStyle = '#bfa572';
g.fillRect(-2000, -1000, 4000, 2000);
const tones = ['#c8ae7a', '#b29760', '#c4ab80', '#a99263', '#d0b985'];
// far: broad patches
for (let i = 0; i < 260; i++) {
  const x = (e.rnd() - 0.5) * 3000;
  const d = 60 + e.rnd() * 1900;
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.fillRect(x, 1000 - d, 20 + e.rnd() * 120, 2 + d * 0.02);
}
// near: short streaks of grass
for (let i = 0; i < 1400; i++) {
  const x = (e.rnd() - 0.5) * 70;
  const d = 1 + e.rnd() * 60;
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.fillRect(x, 1000 - d, 0.3 + e.rnd() * 1.4, 0.05 + 0.006 * d);
}
