// The houses across the street (22 m off, the street 6.6 m under the ballroom's floor), seen from the windows a
// storey higher than the Helmers': their upper floors, tall windows in rows (their light is house_windows), snow on
// the sills and on the roofs, chimneys. Metres, the foot at the street.
const FRONTS = ['#b9ad98', '#aca18c', '#c1b7a5', '#b3a892'];
const ROWS = [-3.8, -6.6];
for (let i = 0; i < 6; i++) {
  const x0 = -9 + i * 3;
  g.fillStyle = FRONTS[i % 4];
  g.fillRect(x0, -8.6, 3, 8.65);
  g.fillStyle = 'rgba(110,98,84,0.35)';
  g.fillRect(x0, -8.65, 3, 0.14);
  g.fillRect(x0, -5.15, 3, 0.08);
  g.fillStyle = '#e4e8ec';
  g.beginPath();
  g.moveTo(x0 - 0.1, -8.55);
  g.lineTo(x0 + 3.1, -8.55);
  g.lineTo(x0 + 2.6, -10.2);
  g.lineTo(x0 + 0.4, -10.2);
  g.closePath();
  g.fill();
  g.fillStyle = '#7d6c60';
  g.fillRect(x0 + (i % 2 ? 0.6 : 2.0), -10.75, 0.32, 0.9);
  g.fillStyle = '#eef1f4';
  g.fillRect(x0 + (i % 2 ? 0.56 : 1.96), -10.8, 0.4, 0.1);
  for (const y of ROWS) {
    for (const dx of [0.55, 1.85]) {
      const x = x0 + dx;
      g.fillStyle = '#434b5a';
      g.fillRect(x, y - 1.5, 0.6, 1.5);
      g.fillStyle = '#e9e3d8';
      g.fillRect(x - 0.06, y - 1.58, 0.72, 0.08);
      g.fillStyle = '#f2f5f8';
      g.fillRect(x - 0.08, y, 0.76, 0.07);
    }
  }
}
