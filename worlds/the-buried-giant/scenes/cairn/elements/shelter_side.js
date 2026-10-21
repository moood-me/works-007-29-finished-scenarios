// The shelter's right side wall, seen from the side: stones sloping from the back wall's 2 m down to 1.2 m at the
// front post (its +x runs back)
const r = e.lib.rnd(23);
g.fillStyle = '#5c5952';
g.beginPath();
g.moveTo(-1.25, 0);
g.lineTo(-1.25, -1.2);
g.lineTo(1.25, -2.0);
g.lineTo(1.25, 0);
g.closePath();
g.fill();
for (let row = 0; row < 9; row++) {
  const y = -0.12 - row * 0.22;
  for (let i = 0; i < 7; i++) {
    const x = -1.25 + (i + 0.5 + (row % 2) * 0.5) * (2.5 / 7), top = -1.2 - ((x + 1.25) / 2.5) * 0.8;
    if (x > 1.2 || y < top + 0.08) continue;
    g.fillStyle = ['#8d8a80', '#7c796f', '#9a968b', '#6f6c64'][Math.floor(r() * 4)];
    e.lib.stone(g, x, y, 0.15 + r() * 0.04, 0.09 + r() * 0.02, (r() - 0.5) * 0.3, r);
  }
}
