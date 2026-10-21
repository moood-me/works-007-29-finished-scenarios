// A rounded grey boulder, lichen on its crown (copies): about the path and the near ground, and the big one in the
// near right corner
const r = e.lib.rnd(47);
g.fillStyle = '#77746d';
e.lib.stone(g, 0, -0.5, 1.0, 0.55, 0, r);
g.fillStyle = '#8b8880';
e.lib.stone(g, -0.12, -0.7, 0.72, 0.32, 0.1, r);
g.fillStyle = 'rgba(166,162,116,0.6)';
for (let i = 0; i < 7; i++) {
  g.beginPath();
  g.ellipse(-0.6 + r() * 1.1, -0.86 + r() * 0.25, 0.06 + r() * 0.08, 0.03 + r() * 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
