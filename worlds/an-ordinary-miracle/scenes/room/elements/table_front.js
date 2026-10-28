// The table's front: the top's thick edge and the apron under it with a carved scallop, two stout turned legs at its
// ends; the two back legs 0.85 m behind (a part, at their own depth).
const leg = (g, x) => {
  g.fillStyle = '#9a6c40';
  g.fillRect(x - 0.05, -0.68, 0.1, 0.68);
  g.fillStyle = '#b5844f';
  for (const y of [-0.5, -0.3]) {
    g.beginPath();
    g.ellipse(x, y, 0.065, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#7a5232';
  g.fillRect(x - 0.05, -0.68, 0.025, 0.68);
};
e.part(0, 0.85, (g) => {
  leg(g, -0.98);
  leg(g, 0.98);
}, [-1.12, -0.7, 1.12, 0.02]);
leg(g, -0.98);
leg(g, 0.98);
g.fillStyle = '#a77a4c';
g.fillRect(-1.1, -0.8, 2.2, 0.05);
g.fillStyle = '#8a5f38';
g.beginPath();
g.moveTo(-1.04, -0.75);
g.lineTo(1.04, -0.75);
g.lineTo(1.04, -0.68);
for (let i = 10; i >= 0; i--) {
  const x = -1.04 + (2.08 * i) / 10;
  g.quadraticCurveTo(x + 0.104, -0.63, x, -0.68);
}
g.closePath();
g.fill();
