// A grey boulder, rounded, lichen on its crown — standing in many places of the pass (copies)
const r = e.lib.rnd(41);
g.fillStyle = '#7d7a72';
e.lib.stone(g, 0, -0.5, 1.0, 0.55, 0, r);
g.fillStyle = '#8f8c83';
e.lib.stone(g, -0.15, -0.68, 0.7, 0.32, 0.1, r);
g.fillStyle = 'rgba(170,168,118,0.6)';
for (let i = 0; i < 7; i++) {
  g.beginPath();
  g.ellipse(-0.6 + r() * 1.1, -0.85 + r() * 0.25, 0.06 + r() * 0.08, 0.03 + r() * 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
