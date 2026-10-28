// The game as it stands: a few pieces on the board, each at its own square (parts at their depth) — pale and dark,
// pawns, a tower, a horse's head, the tall king
const s = 0.46 / 8;
const at = (i, j) => [-0.42 + (i + 0.5) * s, (j + 0.5) * s - 0.23];
const pale = '#e2d6bc';
const dark = '#2b211b';
const pawn = (g, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(-0.018, 0);
  g.lineTo(-0.012, -0.012);
  g.lineTo(-0.007, -0.03);
  g.arc(0, -0.036, 0.01, Math.PI * 0.7, Math.PI * 2.3);
  g.lineTo(0.012, -0.012);
  g.lineTo(0.018, 0);
  g.closePath();
  g.fill();
};
const tower = (g, c) => {
  g.fillStyle = c;
  g.fillRect(-0.016, -0.045, 0.032, 0.045);
  g.fillRect(-0.02, -0.055, 0.04, 0.012);
};
const king = (g, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(-0.02, 0);
  g.lineTo(-0.01, -0.06);
  g.lineTo(-0.014, -0.068);
  g.lineTo(0.014, -0.068);
  g.lineTo(0.01, -0.06);
  g.lineTo(0.02, 0);
  g.closePath();
  g.fill();
  g.fillRect(-0.003, -0.085, 0.006, 0.018);
  g.fillRect(-0.009, -0.079, 0.018, 0.005);
};
const horse = (g, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(-0.018, 0);
  g.lineTo(-0.012, -0.03);
  g.lineTo(-0.016, -0.05);
  g.lineTo(0.004, -0.058);
  g.lineTo(0.018, -0.04);
  g.lineTo(0.006, -0.036);
  g.lineTo(0.012, -0.012);
  g.lineTo(0.018, 0);
  g.closePath();
  g.fill();
};
const game = [[1, 1, king, dark], [2, 2, pawn, dark], [4, 2, pawn, dark], [5, 1, tower, dark], [3, 4, horse, dark],
  [6, 6, king, pale], [5, 5, pawn, pale], [2, 6, pawn, pale], [6, 4, horse, pale], [0, 7, tower, pale]];
for (const [i, j, draw, c] of game) {
  const [x, z] = at(i, j);
  e.part(x, -z, (g) => draw(g, c), [-0.03, -0.1, 0.03, 0.005]);
}
