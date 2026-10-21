// The counter's top seen from above (1.64 × 0.5 m): worn oak, rings left by mugs.
const L = e.lib;
g.fillStyle = '#8a6038';
g.fillRect(-0.82, -0.25, 1.64, 0.5);
L.dabs(g, 411, -0.82, -0.25, 1.64, 0.5, ['#9a6c40', '#7a5232'], 30, 0.08, 0.4, 0.4);
g.strokeStyle = 'rgba(70, 40, 20, 0.4)';
g.lineWidth = 0.008;
for (const [x, y] of [[-0.3, 0.05], [0.25, -0.08], [0.4, 0.1]]) {
  g.beginPath();
  g.arc(x, y, 0.045, 0, Math.PI * 2);
  g.stroke();
}
