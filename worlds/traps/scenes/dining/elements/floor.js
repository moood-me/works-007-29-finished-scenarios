// The parquet floor from above: oak laid in herringbone, honey-brown, darker along the walls.
const W = 4.4;
const D = 3.3;
g.fillStyle = '#93673f';
g.fillRect(-W, -D, W * 2, D * 2);
g.lineWidth = 0.008;
g.strokeStyle = '#7b5532';
const L = 0.4;
const w = 0.1;
g.beginPath();
for (let col = -W - 0.4; col < W + 0.4; col += L * 0.707 * 2) {
  for (let y = -D - 0.4; y < D + 0.4; y += w * 1.414) {
    g.moveTo(col, y);
    g.lineTo(col + L * 0.707, y - L * 0.707);
    g.moveTo(col + L * 0.707, y - L * 0.707 + w * 1.414);
    g.lineTo(col + L * 1.414, y + w * 1.414);
  }
}
g.stroke();
