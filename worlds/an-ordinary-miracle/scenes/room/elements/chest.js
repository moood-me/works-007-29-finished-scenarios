// The Mistress's chest under the shelf: painted cornflower blue with big red and ochre flowers, bound with dark iron
// straps, a lock plate in the middle (its lid is `chest_top`).
const L = e.lib;
g.fillStyle = '#3f5f9c';
g.fillRect(-0.6, -0.6, 1.2, 0.6);
L.dabs(g, 171, -0.6, -0.6, 1.2, 0.6, ['#4a6aa8', '#34528a'], 24, 0.06, 0.6, 0.5);
for (const [x, y, s] of [[-0.3, -0.32, 1], [0.3, -0.32, 1], [0, -0.22, 0.7]]) {
  g.fillStyle = '#c8402e';
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.beginPath();
    g.ellipse(x + Math.cos(a) * 0.06 * s, y + Math.sin(a) * 0.06 * s, 0.05 * s, 0.03 * s, a, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#e2b048';
  g.beginPath();
  g.arc(x, y, 0.035 * s, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#2e2a28';
for (const x of [-0.5, 0.5]) g.fillRect(x - 0.03, -0.6, 0.06, 0.6);
g.fillRect(-0.6, -0.6, 1.2, 0.04);
g.fillRect(-0.6, -0.05, 1.2, 0.05);
g.fillStyle = '#6b625a';
g.fillRect(-0.06, -0.56, 0.12, 0.12);
g.fillStyle = '#1e1a18';
g.fillRect(-0.012, -0.52, 0.024, 0.05);
