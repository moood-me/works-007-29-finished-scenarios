// The platform before the canvas, its front face (x −1.5…1.3, 0.9 high): boards across on three posts, paint dripped
// down it; at its right end three steps up (x 1.3…1.95).
g.save();
g.beginPath();
g.rect(-1.5, -0.9, 2.8, 0.92);
g.clip();
e.lib.planks(g, e, -1.5, -0.9, 1.3, 0.02, false, ['#7e6c56', '#76644f', '#857260']);
g.restore();
g.fillStyle = '#5a4836';
for (const x of [-1.5, -0.15, 1.2]) g.fillRect(x, -0.9, 0.1, 0.92);
g.fillStyle = '#9a8667';
g.fillRect(-1.55, -0.94, 2.9, 0.06);
const drips = ['#7d9a62', '#c8a058', '#8c8c86', '#e6e0cf'];
for (let i = 0; i < 12; i++) {
  const x = -1.4 + e.rnd() * 2.6;
  g.fillStyle = drips[Math.floor(e.rnd() * drips.length)];
  g.fillRect(x, -0.88, 0.012, 0.05 + e.rnd() * 0.2);
}
// the steps: stringers and three treads
g.fillStyle = '#5a4836';
g.beginPath();
g.moveTo(1.3, -0.92);
g.lineTo(1.4, -0.92);
g.lineTo(1.98, 0.0);
g.lineTo(1.86, 0.02);
g.closePath();
g.fill();
g.fillStyle = '#8a765e';
for (const [x, y] of [[1.42, -0.62], [1.6, -0.32], [1.78, -0.02]]) g.fillRect(x - 0.12, y - 0.04, 0.3, 0.06);
