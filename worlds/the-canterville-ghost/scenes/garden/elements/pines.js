// The pine woods far off beyond the garden (70 m away, 300 m wide): a ragged band of dark pointed crowns against the
// paler sky low down, one behind another.
for (const [tone, base, h] of [['#1a2434', 9, 11], ['#141c29', 5, 9]]) {
  g.fillStyle = tone;
  g.fillRect(-150, -base, 300, base + 0.5);
  for (let x = -150; x <= 150; x += 2.2 + e.rnd() * 2) {
    const top = base + h * (0.55 + e.rnd() * 0.45);
    const w = 1.6 + e.rnd() * 1.6;
    g.beginPath();
    g.moveTo(x - w, -base + 0.2);
    for (let k = 0; k <= 6; k++) {
      const u = k / 6;
      const y = -base - (top - base) * u;
      const ww = w * (1 - u) * (k % 2 ? 0.7 : 1);
      g.lineTo(x - ww, y);
    }
    for (let k = 6; k >= 0; k--) {
      const u = k / 6;
      const y = -base - (top - base) * u;
      const ww = w * (1 - u) * (k % 2 ? 0.7 : 1);
      g.lineTo(x + ww, y);
    }
    g.closePath();
    g.fill();
  }
}
