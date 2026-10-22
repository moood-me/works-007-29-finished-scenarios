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
// the crown: clumps of leaves, each a layer turning about where its branch holds it
const clumps = [[-2.4, -7.2, 1.6], [-0.8, -8.4, 1.8], [1.0, -7.8, 1.7], [2.3, -6.6, 1.3], [-1.6, -5.8, 1.3], [0.4, -6.2, 1.4], [-0.2, -9.6, 1.3]];
const greens = ['#9cc06a', '#b3d17c', '#8bb35e', '#c4dc8e'];
clumps.forEach(([cx, cy, r], i) => {
  e.layer(`leaves${i}`, { pivot: [cx * 0.4, cy + r], wind: { strength: 0.25, gust: 0.4 }, box: [cx - r * 1.4, cy - r * 1.3, cx + r * 1.4, cy + r * 1.2] }, c => {
    for (let k = 0; k < 110; k++) {
      const a = e.rnd() * Math.PI * 2, d = Math.sqrt(e.rnd()) * r;
      c.fillStyle = greens[(k + i) % greens.length];
      c.beginPath();
      c.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.8, 0.1 + e.rnd() * 0.09, 0.07 + e.rnd() * 0.05, e.rnd() * 3, 0, Math.PI * 2);
      c.fill();
    }
  });
});
