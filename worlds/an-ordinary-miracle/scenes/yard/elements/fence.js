// The wattle fence round the yard: stakes every half metre and willow withies woven between them, grey-brown and
// silvered by weather, from behind the house to the right edge; a gap for the gate (1.4 m across, its leaf open).
const L = e.lib, H = 1.15;
const runs = [[-1.4, 0.65], [2.25, 11.5]];
for (const [x0, x1] of runs) {
  // the withies: bands woven round the stakes
  for (let r = 0; r < 9; r++) {
    const y = -0.12 - r * 0.115;
    g.fillStyle = ['#8f7a5f', '#7d6a52', '#9d896c'][r % 3];
    g.beginPath();
    for (let x = x0; x < x1; x += 0.5) {
      const up = ((Math.round(x * 2) + r) % 2 ? -1 : 1) * 0.018;
      g.moveTo(x, y + up);
      g.quadraticCurveTo(x + 0.25, y - up * 2, x + 0.5, y - up);
      g.lineTo(x + 0.5, y - up + 0.08);
      g.quadraticCurveTo(x + 0.25, y - up * 2 + 0.08, x, y + up + 0.08);
      g.closePath();
    }
    g.fill();
  }
  L.dabs(g, 51 + x0, x0, -1.1, x1 - x0, 1.0, ['#b3a283', '#6d5c47'], (x1 - x0) * 10, 0.05, 0.5, 0.4);
  // the stakes, their tops above the withies
  for (let x = x0; x <= x1 + 0.01; x += 0.5) {
    const t = H + 0.08 * L.rnd(Math.round(x * 2), 53);
    g.fillStyle = '#6a573f';
    g.fillRect(x - 0.035, -t, 0.07, t);
    g.fillStyle = '#a08b6c';
    g.fillRect(x - 0.035, -t, 0.025, t);
  }
}
