// A wall of shelving packed with shoeboxes, floor to ceiling (metres along the wall from its anchor, y up
// negative): grey-painted steel uprights every 0.9 m, shelves every 0.4 m, each filled with box ends three high —
// the warehouse's own pattern. Both side walls are this painting (left and right).
const X0 = -2.6;
const X1 = 2.6;
const T = -3.9;
g.fillStyle = '#4a4038';
g.fillRect(X0, T, X1 - X0, -T + 0.02);
for (let y = -0.12; y > T + 0.3; y -= 0.4) {
  e.lib.boxes(g, e, X0, X1, y - 0.36, y);
  g.fillStyle = '#7d7b72';
  g.fillRect(X0, y, X1 - X0, 0.035);
  g.fillStyle = 'rgba(30,24,20,0.5)';
  g.fillRect(X0, y + 0.035, X1 - X0, 0.012);
}
g.fillStyle = '#7d7b72';
g.fillRect(X0, -0.12, X1 - X0, 0.14);
for (let x = X0 + 0.05; x < X1; x += 0.9) {
  g.fillStyle = '#6f6d65';
  g.fillRect(x, T, 0.06, -T + 0.02);
  g.fillStyle = 'rgba(30,26,22,0.45)';
  for (let y = T + 0.05; y < 0; y += 0.05) g.fillRect(x + 0.02, y, 0.02, 0.012);
}
