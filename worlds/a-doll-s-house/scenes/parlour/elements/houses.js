// The houses across the street (18 m off, the street 3.2 m under the parlour's floor), as seen from the window: pale
// plastered fronts, tall windows in rows (their light in the evening is house_windows), snow on the sills and on the
// roofs, chimneys. Metres, the foot at the street.
const FRONTS = ['#c3b7a2', '#b4a993', '#c9bfae'];
const ROWS = [-2.9, -5.3];
for (let i = 0; i < 4; i++) {
  const x0 = -6 + i * 3;
  g.fillStyle = FRONTS[i % 3];
  g.fillRect(x0, -6.9, 3, 6.95);
  g.fillStyle = 'rgba(120,108,92,0.35)';
  g.fillRect(x0, -6.95, 3, 0.12);
  g.fillRect(x0, -3.55, 3, 0.08);
  // the roof with its snow, a chimney
  g.fillStyle = '#e6eaee';
  g.beginPath();
  g.moveTo(x0 - 0.1, -6.85);
  g.lineTo(x0 + 3.1, -6.85);
  g.lineTo(x0 + 2.6, -8.6);
  g.lineTo(x0 + 0.4, -8.6);
  g.closePath();
  g.fill();
  g.fillStyle = '#7d6c60';
  g.fillRect(x0 + 2.0, -9.1, 0.32, 0.9);
  g.fillStyle = '#eef1f4';
  g.fillRect(x0 + 1.96, -9.16, 0.4, 0.1);
  // two windows a storey: dark panes (lit in the evening: house_windows), snow on each sill
  for (const y of ROWS) {
    for (const dx of [0.55, 1.85]) {
      const x = x0 + dx;
      g.fillStyle = '#4b5462';
      g.fillRect(x, y - 1.5, 0.6, 1.5);
      g.fillStyle = '#efe9df';
      g.fillRect(x - 0.06, y - 1.58, 0.72, 0.08);
      g.fillStyle = '#f2f5f8';
      g.fillRect(x - 0.08, y, 0.76, 0.07);
    }
  }
}
