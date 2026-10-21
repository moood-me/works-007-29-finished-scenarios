// The old apple tree by the well: a crooked grey-brown trunk forking into boughs, a broad round crown of leaves in
// many greens, the sunlit side yellow-green, apples red and gold among them; the crown moves a little in the wind (a
// layer about the trunk's top).
const L = e.lib;
g.fillStyle = '#6b5644';
g.beginPath();
g.moveTo(-0.22, 0);
g.quadraticCurveTo(-0.12, -1.0, -0.25, -1.8);
g.lineTo(-0.9, -2.9);
g.lineTo(-0.72, -3.0);
g.lineTo(-0.05, -2.2);
g.lineTo(0.2, -3.2);
g.lineTo(0.38, -3.1);
g.lineTo(0.2, -1.9);
g.lineTo(1.0, -2.7);
g.lineTo(1.12, -2.55);
g.lineTo(0.22, -1.5);
g.quadraticCurveTo(0.14, -0.8, 0.26, 0);
g.closePath();
g.fill();
g.fillStyle = '#8a7360';
g.fillRect(-0.16, -1.6, 0.08, 1.55);
e.layer('crown', { pivot: [0, -2.0], wind: { strength: 0.16, gust: 0.5, scale: 8 }, box: [-3.2, -5.6, 3.2, -1.2] }, (g) => {
  const blobs = 34;
  for (const [cols, k, lift] of [[['#3f6b38', '#4a7840'], 1, 0], [['#5f8d45', '#6d9a4b'], 0.86, 0.12], [['#7fa64f', '#8fb257'], 0.6, 0.3]]) {
    for (let i = 0; i < blobs; i++) {
      const a = 6.28 * L.rnd(i, 121), r = 2.2 * Math.sqrt(L.rnd(i, 122)), x = Math.cos(a) * r * 1.15 + lift * 1.6, y = -3.6 + Math.sin(a) * r * 0.78 - lift * 1.2;
      g.fillStyle = cols[i % 2];
      g.beginPath();
      g.arc(x, y, (0.55 + 0.4 * L.rnd(i, 123)) * k, 0, Math.PI * 2);
      g.fill();
    }
  }
  // apples
  for (let i = 0; i < 40; i++) {
    const a = 6.28 * L.rnd(i, 131), r = 2.1 * Math.sqrt(L.rnd(i, 132)), x = Math.cos(a) * r * 1.1, y = -3.5 + Math.sin(a) * r * 0.75;
    g.fillStyle = ['#c8402e', '#d9a43a', '#b8352a'][i % 3];
    g.beginPath();
    g.arc(x, y, 0.075, 0, Math.PI * 2);
    g.fill();
  }
});
