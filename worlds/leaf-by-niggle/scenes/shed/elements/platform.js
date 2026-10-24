// The platform before the canvas, its front face (x −1.5…1.3, 0.9 high): boards across on three posts, paint dripped
// down it; at its right end two steps down (x 1.3…1.76).
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
// the steps: three boxed treads going down to the right, their risers boards, their edges worn light
for (const [x, top] of [[1.3, -0.6], [1.52, -0.3]]) {
  g.save();
  g.beginPath();
  g.rect(x, top, 0.24, -top + 0.02);
  g.clip();
  e.lib.planks(g, e, x, top, x + 0.24, 0.02, true, ['#6f5e4a', '#76644f', '#6a5a46']);
  g.restore();
}
g.fillStyle = '#5a4836';
g.fillRect(1.3, -0.9, 0.02, 0.92);
g.fillStyle = '#9a8667';
for (const [x, y] of [[1.3, -0.64], [1.52, -0.34]]) g.fillRect(x - 0.02, y, 0.28, 0.05);
