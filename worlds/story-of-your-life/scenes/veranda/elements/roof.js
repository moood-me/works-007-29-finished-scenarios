// The roof's slope over the eave, leaned back (metres from the eave; its ridge 2.8 m up the slope): dark asphalt
// shingles in courses, the drip edge.
g.fillStyle = '#4a4a50';
g.fillRect(-4.5, -2.8, 9.6, 2.82);
g.strokeStyle = 'rgba(28,28,34,0.6)';
g.lineWidth = 0.02;
for (let y = -0.2, k = 0; y > -2.8; y -= 0.2, k++) {
  g.beginPath();
  g.moveTo(-4.5, y);
  g.lineTo(5.1, y);
  g.stroke();
  for (let x = -4.5 + (k % 2) * 0.17; x < 5.1; x += 0.34) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y + 0.2);
    g.stroke();
  }
}
g.fillStyle = '#d9d8d2';
g.fillRect(-4.5, -0.05, 9.6, 0.07);
