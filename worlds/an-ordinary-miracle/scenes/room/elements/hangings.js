// What hangs from the near beam (2.75 m up): bundles of dried herbs tied with red thread, strings of onions.
// across, length, kind (0 herbs, 1 onions)
for (const [x, len, kind] of [[-3.2, 0.5, 0], [-2.4, 0.6, 1], [-0.9, 0.42, 0], [1.1, 0.4, 0], [2.9, 0.55, 1]]) {
  g.strokeStyle = '#8a7650';
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, 0.08);
  g.stroke();
  if (kind === 0) {
    for (let i = 0; i < 9; i++) {
      const a = (i / 8 - 0.5) * 0.6;
      g.strokeStyle = ['#7f8a52', '#a39a5c', '#6f7a48'][i % 3];
      g.lineWidth = 0.016;
      g.beginPath();
      g.moveTo(x, 0.08);
      g.lineTo(x + Math.sin(a) * len, 0.08 + Math.cos(a) * len);
      g.stroke();
    }
    g.fillStyle = '#b5342e';
    g.fillRect(x - 0.03, 0.07, 0.06, 0.04);
  } else {
    for (let i = 0; i < 7; i++) {
      const y = 0.12 + i * (len / 7), s = i % 2 ? 1 : -1;
      g.fillStyle = ['#d49a4a', '#c48236', '#e2b060'][i % 3];
      g.beginPath();
      g.ellipse(x + s * 0.035, y, 0.045, 0.05, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
}
