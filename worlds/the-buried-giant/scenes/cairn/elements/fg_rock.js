// A big rock close before the viewer, lower left: it frames the picture
const r = e.lib.rnd(71);
g.fillStyle = '#7a776e';
e.lib.stone(g, 0, -0.55, 1.3, 0.62, -0.08, r);
g.fillStyle = '#8c897f';
e.lib.stone(g, 0.2, -0.78, 0.9, 0.34, -0.1, r);
g.fillStyle = 'rgba(168,166,112,0.6)';
for (let i = 0; i < 10; i++) {
  g.beginPath();
  g.ellipse(-0.6 + r() * 1.3, -0.95 + r() * 0.3, 0.05 + r() * 0.1, 0.03 + r() * 0.04, 0, 0, Math.PI * 2);
  g.fill();
}
