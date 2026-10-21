// The low bench by the hearth where the young man dries himself (1.3 m long, its seat 0.45 m up): a thick plank on
// splayed legs, a sheepskin thrown over its left end. (Its top is `bench_top`.)
g.fillStyle = '#7a5232';
g.fillRect(-0.65, -0.45, 1.3, 0.07);
g.fillStyle = '#5a3a24';
for (const [x, s] of [[-0.5, -1], [0.5, 1]]) {
  g.beginPath();
  g.moveTo(x - 0.04, -0.38);
  g.lineTo(x + 0.04, -0.38);
  g.lineTo(x + 0.04 + s * 0.06, 0);
  g.lineTo(x - 0.04 + s * 0.06, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = '#e6dcc4';
g.beginPath();
g.moveTo(-0.68, -0.47);
g.quadraticCurveTo(-0.45, -0.52, -0.2, -0.46);
g.quadraticCurveTo(-0.24, -0.3, -0.3, -0.18);
g.quadraticCurveTo(-0.5, -0.12, -0.7, -0.2);
g.closePath();
g.fill();
e.lib.dabs(g, 431, -0.7, -0.5, 0.5, 0.35, ['#f2ead6', '#cfc2a4'], 30, 0.03, 0.8, 0.8);
