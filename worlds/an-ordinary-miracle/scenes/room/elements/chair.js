// The best chair, the Master's, at the head of the table with its back to the window wall — the King took it first:
// a tall carved back painted deep green with a golden sun in a ring of red petals at its crest, two turned posts, the
// seat 0.47 m up.
const L = e.lib;
for (const x of [-0.36, 0.36]) {
  g.fillStyle = '#5a3a22';
  g.fillRect(x - 0.045, -1.5, 0.09, 1.5);
  g.fillStyle = '#c9a050';
  g.beginPath();
  g.arc(x, -1.55, 0.06, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#2f5446';
g.beginPath();
g.moveTo(-0.32, -0.62);
g.lineTo(-0.32, -1.28);
g.quadraticCurveTo(-0.32, -1.5, 0, -1.56);
g.quadraticCurveTo(0.32, -1.5, 0.32, -1.28);
g.lineTo(0.32, -0.62);
g.closePath();
g.fill();
L.dabs(g, 161, -0.3, -1.5, 0.6, 0.86, ['#3b6454', '#264538'], 20, 0.05, 0.6, 0.5);
g.fillStyle = '#b5342e';
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2;
  g.beginPath();
  g.ellipse(Math.cos(a) * 0.13, -1.28 + Math.sin(a) * 0.13, 0.045, 0.022, a, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#e9b44c';
g.beginPath();
g.arc(0, -1.28, 0.08, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7a5232';
g.fillRect(-0.4, -0.5, 0.8, 0.05);
