// The first sapling, planted at the dug ground's far edge (1.5 m high, about its foot): a straight young stem out of
// a ring of fresh earth, a few small branches in leaf; its crown stirs in the wind.
g.fillStyle = '#5e4c38';
g.beginPath();
g.ellipse(0, 0, 0.3, 0.06, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#6d5c48';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0.01, -0.85);
g.stroke();
e.layer('crown', { pivot: [0, -0.8], wind: { strength: 0.25, gust: 0.5 } }, l => {
  l.strokeStyle = '#6d5c48';
  l.lineWidth = 0.022;
  l.beginPath();
  l.moveTo(0.01, -0.85);
  l.lineTo(0.0, -1.45);
  for (const [y, dx] of [[-0.95, -0.28], [-1.05, 0.3], [-1.22, -0.22], [-1.3, 0.2]]) {
    l.moveTo(0.005, y);
    l.lineTo(dx, y - 0.16);
  }
  l.stroke();
  const tones = ['#6d8a4c', '#7f9b56', '#93a862'];
  tones.forEach((c, t) => {
    l.fillStyle = c;
    l.beginPath();
    for (let i = 0; i < 14; i++) {
      const x = (e.rnd() - 0.5) * 0.6;
      const y = -0.95 - e.rnd() * 0.55;
      e.lib.leafPath(l, x, y, 0.08 + e.rnd() * 0.04, e.rnd() * Math.PI * 2 + t);
    }
    l.fill();
  });
});
