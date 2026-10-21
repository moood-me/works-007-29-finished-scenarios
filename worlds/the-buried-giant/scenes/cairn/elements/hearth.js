// The shepherd's hearth before the shelter: a ring of stones round a small low fire — its light (hearth_light) the
// one warm light on the pass; its flames and smoke are particles
const r = e.lib.rnd(31);
g.fillStyle = '#4a4540';
g.beginPath();
g.ellipse(0, -0.04, 0.42, 0.08, 0, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 9; i++) {
  const x = -0.42 + i * 0.105;
  g.fillStyle = ['#8d8a80', '#7c796f', '#9a968b'][Math.floor(r() * 3)];
  e.lib.stone(g, x, -0.06 - Math.sin((i / 8) * Math.PI) * 0.02, 0.07, 0.055, r(), r);
}
g.fillStyle = '#c4672f';
g.beginPath();
g.ellipse(0, -0.1, 0.16, 0.04, 0, 0, Math.PI * 2);
g.fill();
e.light(0, -0.16, 0.3, '#ffb066', 0.9);
e.at(0, -0.2, 'fire');
