// A plane tree on the lawn below in its April leaf: a pale bark trunk, and a crown of young light-green leaves seen
// through the window — the crown's clumps are layers that sway, each its own, in the spring wind. Metres from the
// foot of the trunk (on the campus land, 4 m below the floor).
g.fillStyle = '#9c968a';
g.beginPath();
g.moveTo(-0.3, 0);
g.lineTo(-0.2, -4.2);
g.lineTo(-1.6, -6.6);
g.lineTo(-1.4, -6.7);
g.lineTo(0.0, -4.8);
g.lineTo(0.9, -7.0);
g.lineTo(1.1, -6.9);
g.lineTo(0.2, -4.2);
g.lineTo(0.3, 0);
g.closePath();
g.fill();
g.fillStyle = 'rgba(210,205,190,0.6)';
for (let i = 0; i < 12; i++) {
  g.beginPath();
  g.ellipse(-0.15 + e.rnd() * 0.3, -0.5 - e.rnd() * 3.5, 0.08, 0.14, 0, 0, Math.PI * 2);
  g.fill();
}
// the crown: clumps of small young leaves, each clump a layer turning about where its branch holds it — darker
// leaves inside and below, lighter ones on top where the sun is (each shade one path: a few fills a clump)
const clumps = [[-2.4, -7.2, 1.6], [-0.8, -8.4, 1.8], [1.0, -7.8, 1.7], [2.3, -6.6, 1.3], [-1.6, -5.8, 1.3], [0.4, -6.2, 1.4], [-0.2, -9.6, 1.3]];
const greens = ['#7fa553', '#94b862', '#a9c972', '#c2db8c'];
clumps.forEach(([cx, cy, r], i) => {
  e.layer(`leaves${i}`, { pivot: [cx * 0.4, cy + r], wind: { strength: 0.25, gust: 0.4 }, box: [cx - r * 1.2, cy - r * 1.1, cx + r * 1.2, cy + r * 1.0] }, c => {
    const paths = greens.map(() => new Path2D());
    for (let k = 0; k < 520; k++) {
      const a = e.rnd() * Math.PI * 2, d = Math.sqrt(e.rnd()) * r, x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.8;
      // (the shade by where the leaf is in the clump: up and out — lighter)
      const lit = Math.max(0, Math.min(3, Math.floor((0.5 - (y - cy) / (r * 1.6) + (d / r) * 0.4 + e.rnd() * 0.9) * 2.2)));
      const w = 0.05 + e.rnd() * 0.04, t = e.rnd() * 3;
      paths[lit].moveTo(x + w * Math.cos(t), y + w * Math.sin(t));
      paths[lit].ellipse(x, y, w, w * 0.6, t, 0, Math.PI * 2);
    }
    paths.forEach((p, j) => {
      c.fillStyle = greens[j];
      c.fill(p);
    });
  });
});
