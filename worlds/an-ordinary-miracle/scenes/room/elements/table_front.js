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
  leg(g, -1.17);
  leg(g, 1.17);
}, [-1.32, -0.7, 1.32, 0.02]);
leg(g, -1.17);
leg(g, 1.17);
g.fillStyle = '#a77a4c';
g.fillRect(-1.3, -0.8, 2.6, 0.05);
g.fillStyle = '#8a5f38';
g.beginPath();
g.moveTo(-1.24, -0.75);
g.lineTo(1.24, -0.75);
g.lineTo(1.24, -0.68);
for (let i = 12; i >= 0; i--) {
  const x = -1.24 + (2.48 * i) / 12;
  g.quadraticCurveTo(x + 0.103, -0.63, x, -0.68);
}
g.closePath();
g.fill();
