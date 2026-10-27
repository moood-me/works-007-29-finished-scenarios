// The room's floor from above (metres; its middle at distance 3.2, y toward the viewer): square red clay tiles, a
// quarter metre each, laid straight from the back wall, each its own shade, worn pale where feet go — door to stove,
// stove to table, the table to the bed — and swept; dark in the gaps.
g.fillStyle = '#6a3c2a';
g.fillRect(-2.5, -2.6, 5.0, 5.2);
const T = 0.25;
for (let y = -2.6; y < 2.6; y += T) {
  for (let x = -2.5; x < 2.5; x += T) {
    const r = e.rnd();
    g.fillStyle = r < 0.3 ? '#a85e43' : r < 0.6 ? '#b26a4c' : r < 0.85 ? '#9c5640' : '#bb7656';
    g.fillRect(x + 0.008, y + 0.008, T - 0.016, T - 0.016);
    if (e.rnd() < 0.25) {
      g.fillStyle = 'rgba(70,40,30,0.25)';
      g.fillRect(x + 0.02 + e.rnd() * 0.1, y + 0.02 + e.rnd() * 0.1, 0.05 + e.rnd() * 0.1, 0.02 + e.rnd() * 0.05);
    }
  }
}
// worn paths
g.fillStyle = 'rgba(222,178,148,0.22)';
for (const [x, y, rx, ry, a] of [[-1.6, -0.1, 0.9, 0.35, 0.6], [0.4, -0.5, 1.1, 0.4, -0.3], [-0.7, -1.2, 0.8, 0.3, 0.1], [1.6, -0.7, 0.5, 0.6, 0]]) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, a, 0, Math.PI * 2);
  g.fill();
}
// a few chips of ash by the stove
for (let i = 0; i < 18; i++) {
  g.fillStyle = 'rgba(120,112,104,0.5)';
  g.beginPath();
  g.arc(0.75 + (e.rnd() - 0.5) * 0.9, -2.05 + (e.rnd() - 0.5) * 0.4, 0.008 + e.rnd() * 0.02, 0, Math.PI * 2);
  g.fill();
}
