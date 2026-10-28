// The green hills before the mountains (half a kilometre): round meadows gone dull green in the storm light, dark fir
// woods in tongues down them.
const L = e.lib;
const crest = x => L.ridge(x, 21, 8, 120, 25);
const path = new Path2D();
path.moveTo(-420, 2);
for (let x = -420; x <= 420; x += 4) path.lineTo(x, -crest(x));
path.lineTo(420, 2);
path.closePath();
g.fillStyle = '#5f7f55';
g.fill(path);
g.save();
g.clip(path);
L.dabs(g, 23, -420, -14, 840, 16, ['#6f8c5c', '#4f6f4a', '#7c9662'], 260, 3, 0.6, 0.5);
for (let i = 0; i < 22; i++) {
  const x = -410 + 820 * L.rnd(i, 25), w = 8 + 22 * L.rnd(i, 26), t = -crest(x);
  g.fillStyle = ['#2f4e3c', '#3a5a44'][i % 2];
  g.beginPath();
  g.moveTo(x - w, 2);
  g.quadraticCurveTo(x - w * 0.5, t * 0.6, x, t * (0.5 + 0.45 * L.rnd(i, 27)));
  g.quadraticCurveTo(x + w * 0.5, t * 0.6, x + w, 2);
  g.fill();
}
g.restore();
