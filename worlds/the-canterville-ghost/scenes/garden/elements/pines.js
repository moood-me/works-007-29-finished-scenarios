// The pine woods far off beyond the garden (70 m away, 300 m wide): one long dark wood against the paler sky low down,
// its edge ragged with the pointed crowns of pines of every height, crowded together.
for (const [tone, base, h, step] of [['#202a3a', 8, 5, 1.6], ['#18202e', 5, 4.5, 1.3]]) {
  g.fillStyle = tone;
  g.fillRect(-150, -base - 1, 300, base + 1.5);
  for (let x = -150; x <= 150; x += step * (0.6 + e.rnd() * 0.8)) {
    const top = base + h * (0.3 + e.rnd() * 0.7);
    const w = 1.3 + e.rnd() * 1.3;
    // a crown: a narrow ragged cone, its sides notched by the whorls of its branches
    g.beginPath();
    g.moveTo(x - w * 1.3, -base + 0.5);
    const n = 5;
    for (let k = 1; k <= n; k++) {
      const u = k / n;
      g.lineTo(x - w * (1 - u) - w * 0.35 * (1 - u), -base - (top - base) * (u - 0.08));
      g.lineTo(x - w * (1 - u) * 0.6, -base - (top - base) * u);
    }
    for (let k = n; k >= 1; k--) {
      const u = k / n;
      g.lineTo(x + w * (1 - u) * 0.6, -base - (top - base) * u);
      g.lineTo(x + w * (1 - u) + w * 0.35 * (1 - u), -base - (top - base) * (u - 0.08));
    }
    g.lineTo(x + w * 1.3, -base + 0.5);
    g.closePath();
    g.fill();
  }
}
