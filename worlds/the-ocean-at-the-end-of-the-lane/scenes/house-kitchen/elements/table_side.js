// The table's right side (x -0.72 near ... 0.72 at the far end): the oilcloth's hanging edge, two cream legs, a
// drawer's knob under the cloth.
g.fillStyle = '#e4dcc6';
for (const x of [-0.68, 0.63]) g.fillRect(x, -0.62, 0.05, 0.62);
g.fillStyle = '#d7cfb6';
g.fillRect(-0.68, -0.62, 1.36, 0.06);
const s = 0.05;
for (let x = -0.72, c = 0; x < 0.72; x += s, c++) {
  for (let y = -0.74, r = 0; y < -0.6; y += s, r++) {
    g.fillStyle = r % 2 && c % 2 ? '#6c88b4' : r % 2 || c % 2 ? '#aebfd8' : '#f1efe8';
    g.fillRect(x, y, Math.min(s, 0.72 - x), Math.min(s, -0.6 - y));
  }
}
g.fillStyle = 'rgba(60, 70, 90, 0.25)';
g.fillRect(-0.72, -0.615, 1.44, 0.015);
