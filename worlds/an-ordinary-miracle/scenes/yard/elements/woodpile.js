// The woodpile against the house's front: split logs stacked end-on, pale yellow wood with bark rims, a board laid
// over the top against the rain — the young man's work (he chops wood for the house).
const L = e.lib, W = 2.2, H = 1.35, R = 0.085;
g.fillStyle = '#5a4130';
g.fillRect(-W / 2, -H, W, H);
for (let row = 0; row * R * 1.8 < H - 0.1; row++) {
  const y = -R - row * R * 1.8;
  for (let i = 0; (i + 0.5) * R * 2.05 < W; i++) {
    const x = -W / 2 + R + (row % 2) * R + i * R * 2.05, k = L.rnd(i + row * 31, 101);
    if (x > W / 2 - R * 0.8) continue;
    g.fillStyle = '#6e4c33';
    g.beginPath();
    g.arc(x, y, R * (0.92 + 0.12 * k), 0, Math.PI * 2);
    g.fill();
    g.fillStyle = k < 0.5 ? '#e3c28a' : '#d6b47c';
    g.beginPath();
    g.arc(x, y, R * 0.78, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#b8955f';
    g.lineWidth = R * 0.08;
    g.beginPath();
    g.arc(x, y, R * 0.42, 0, Math.PI * 2);
    g.stroke();
  }
}
g.fillStyle = '#7c6a55';
g.fillRect(-W / 2 - 0.08, -H - 0.06, W + 0.16, 0.07);
