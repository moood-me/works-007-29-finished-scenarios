// The green hills before the mountains (six hundred metres): round, sunlit meadows in bright yellow-green, fir woods
// in dark tongues down them, a pale path zigzagging up toward the pass.
const L = e.lib;
const path = new Path2D();
path.moveTo(-900, 10);
for (let x = -900; x <= 900; x += 8) path.lineTo(x, -L.ridge(x, 21, 72, 160, 30));
path.lineTo(900, 10);
path.closePath();
g.fillStyle = '#8fb164';
g.fill(path);
g.save();
g.clip(path);
L.dabs(g, 23, -900, -110, 1800, 120, ['#a8c374', '#7ea258', '#b9cd7d'], 380, 10, 0.6, 0.5);
// fir woods: dark tongues
for (let i = 0; i < 26; i++) {
  const x = -880 + 1760 * L.rnd(i, 25), w = 20 + 50 * L.rnd(i, 26), t = -L.ridge(x, 21, 72, 160, 30);
  g.fillStyle = ['#3f6a4a', '#4b7652'][i % 2];
  g.beginPath();
  g.moveTo(x - w, 10);
  g.quadraticCurveTo(x - w * 0.5, t * 0.6, x, t * (0.4 + 0.5 * L.rnd(i, 27)));
  g.quadraticCurveTo(x + w * 0.5, t * 0.6, x + w, 10);
  g.fill();
}
// the path to the pass, up the hill on the right
g.strokeStyle = '#e1d2a6';
g.lineWidth = 2.2;
g.beginPath();
g.moveTo(120, 5);
g.lineTo(190, -14);
g.lineTo(140, -26);
g.lineTo(215, -40);
g.lineTo(175, -52);
g.lineTo(240, -64);
g.stroke();
g.restore();
