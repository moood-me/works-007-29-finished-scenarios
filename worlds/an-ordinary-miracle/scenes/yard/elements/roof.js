// The roof's front slope, seen from above: rows of silvered wooden shingles, a little moss in them, the ridge board
// along its far edge, a white eaves board along the near. Centre at its middle; y toward the eaves.
const L = e.lib, W = 8.4, D = 3.72, ROWS = 14;
g.fillStyle = '#8f7c66';
g.fillRect(-W / 2, -D / 2, W, D);
for (let r = 0; r < ROWS; r++) {
  const y = -D / 2 + (r * D) / ROWS;
  for (let i = 0; i < W / 0.26; i++) {
    const x = -W / 2 + (r % 2) * 0.13 + i * 0.26, k = L.rnd(i + r * 97, 81);
    g.fillStyle = k < 0.33 ? '#9e8a72' : k < 0.66 ? '#86735e' : '#a8977f';
    g.fillRect(x + 0.01, y + 0.02, 0.24, D / ROWS - 0.03);
  }
  g.fillStyle = '#5f5143';
  g.fillRect(-W / 2, y + D / ROWS - 0.025, W, 0.025);
}
L.dabs(g, 83, -W / 2, -D / 2, W, D, ['#7d8a58', '#6f7b4c'], 40, 0.18, 0.7, 0.35);
g.fillStyle = '#6a5641';
g.fillRect(-W / 2, -D / 2, W, 0.14);
g.fillStyle = '#efe7d2';
g.fillRect(-W / 2, D / 2 - 0.1, W, 0.1);
