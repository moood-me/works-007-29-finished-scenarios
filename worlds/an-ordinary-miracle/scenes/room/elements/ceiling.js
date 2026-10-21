// The ceiling, 3 m up (x across, y toward the viewer): boards laid across, smoked darker over the hearth (left, at the
// back); the stair's hatch dark in the right back corner.
const L = e.lib;
for (let i = 0, y = -1.55; y < 1.55; i++, y += 0.32) {
  g.fillStyle = ['#a47546', '#9a6c40', '#ad7d4c'][i % 3];
  g.fillRect(-4.7, y, 9.4, 0.32);
  g.fillStyle = '#5e3e24';
  g.fillRect(-4.7, y, 9.4, 0.02);
}
const soot = g.createRadialGradient(-2.0, -0.95, 0, -2.0, -0.95, 1.6);
soot.addColorStop(0, 'rgba(60, 40, 28, 0.55)');
soot.addColorStop(1, 'rgba(60, 40, 28, 0)');
g.fillStyle = soot;
g.fillRect(-4.7, -1.55, 9.4, 3.1);
L.dabs(g, 85, -4.7, -1.55, 9.4, 3.1, ['#b88a58', '#8a5e36'], 90, 0.25, 0.4, 0.25);
g.fillStyle = '#3a2618';
g.fillRect(3.6, -1.55, 1.1, 0.85);
