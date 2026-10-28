// The shelter's back wall: dry-laid stones, 2 m high, turf along its top
const r = e.lib.rnd(21);
g.fillStyle = '#5c5952';
g.fillRect(-2.5, -2.02, 5, 2.02);
for (let row = 0; row < 9; row++) {
  const y = -0.12 - row * 0.22, n = 14;
  for (let i = 0; i < n; i++) {
    const x = -2.5 + (i + 0.5 + (row % 2) * 0.5) * (5 / n);
    if (x > 2.45) continue;
    g.fillStyle = ['#8d8a80', '#7c796f', '#9a968b', '#6f6c64'][Math.floor(r() * 4)];
    e.lib.stone(g, x, y, 0.15 + r() * 0.04, 0.09 + r() * 0.02, (r() - 0.5) * 0.3, r);
  }
}
g.fillStyle = '#6c7352';
g.beginPath();
g.moveTo(-2.6, -1.98);
for (let x = -2.6; x <= 2.6; x += 0.2) g.lineTo(x, -2.06 - r() * 0.1);
g.lineTo(2.6, -1.9);
g.lineTo(-2.6, -1.9);
g.closePath();
g.fill();
