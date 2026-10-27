// The table's near end (x -0.37...0.37, 0.74 m high): the oilcloth hanging a hand's breadth over it, two legs painted
// cream under it.
g.fillStyle = '#e4dcc6';
for (const x of [-0.33, 0.28]) g.fillRect(x, -0.62, 0.05, 0.62);
g.fillStyle = '#d7cfb6';
g.fillRect(-0.33, -0.62, 0.66, 0.06);
const s = 0.05;
for (let x = -0.37, c = 0; x < 0.37; x += s, c++) {
  for (let y = -0.74, r = 0; y < -0.6; y += s, r++) {
    g.fillStyle = r % 2 && c % 2 ? '#6c88b4' : r % 2 || c % 2 ? '#aebfd8' : '#f1efe8';
    g.fillRect(x, y, s, Math.min(s, -0.6 - y));
  }
}
g.fillStyle = 'rgba(60, 70, 90, 0.25)';
g.fillRect(-0.37, -0.615, 0.74, 0.015);
