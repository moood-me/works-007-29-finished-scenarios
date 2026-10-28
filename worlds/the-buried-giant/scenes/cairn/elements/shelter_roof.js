// The turf roof seen from above: grass and moss, its front edge ragged, a few stones holding it down
const r = e.lib.rnd(27);
g.fillStyle = '#6e7553';
g.fillRect(-2.6, -1.35, 5.2, 2.7);
for (let i = 0; i < 160; i++) {
  g.fillStyle = ['#7a8160', '#636a4a', '#858766', '#6b6455'][Math.floor(r() * 4)];
  g.beginPath();
  g.ellipse(-2.5 + r() * 5, -1.3 + r() * 2.6, 0.08 + r() * 0.18, 0.05 + r() * 0.1, r() * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#8a877e';
for (let i = 0; i < 6; i++) e.lib.stone(g, -2.2 + i * 0.85 + r() * 0.2, -0.2 + r() * 0.5, 0.16, 0.12, r(), r);
