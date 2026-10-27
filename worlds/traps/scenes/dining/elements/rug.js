// The carpet under the table from above: a deep red field, an ochre border with a dark meander, a pale medallion in
// the middle mostly under the table.
const W = 2.9;
const D = 1.4;
g.fillStyle = '#6f2a2a';
g.fillRect(-W, -D, W * 2, D * 2);
g.strokeStyle = '#c99a52';
g.lineWidth = 0.16;
g.strokeRect(-W + 0.18, -D + 0.18, W * 2 - 0.36, D * 2 - 0.36);
g.strokeStyle = '#3e2420';
g.lineWidth = 0.025;
g.beginPath();
for (let x = -W + 0.2; x < W - 0.2; x += 0.16) {
  for (const y of [-D + 0.18, D - 0.18]) {
    g.moveTo(x, y - 0.04);
    g.lineTo(x + 0.08, y - 0.04);
    g.lineTo(x + 0.08, y + 0.04);
    g.lineTo(x + 0.16, y + 0.04);
  }
}
g.stroke();
g.fillStyle = '#b8835a';
g.beginPath();
g.ellipse(0, 0, 1.1, 0.6, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6f2a2a';
g.beginPath();
g.ellipse(0, 0, 0.8, 0.4, 0, 0, Math.PI * 2);
g.fill();
