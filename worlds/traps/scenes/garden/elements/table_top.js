// The table under the chestnut, from above: a white linen cloth, five places laid — plates, knives and forks, folded
// napkins — and in the middle the cheese board, a bowl of cherries, the bread on its board.
g.fillStyle = '#f1ebdf';
g.fillRect(-1.3, -0.55, 2.6, 1.1);
g.strokeStyle = '#ddd2bf';
g.lineWidth = 0.02;
g.strokeRect(-1.2, -0.45, 2.4, 0.9);
const place = (x, y, a) => {
  g.fillStyle = '#e8e2d6';
  g.beginPath();
  g.arc(x, y, 0.13, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#fbf8f2';
  g.beginPath();
  g.arc(x, y, 0.1, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#9fa3a6';
  const cx = Math.cos(a);
  const sy = Math.sin(a);
  for (const s of [-1, 1]) {
    const px = x + s * 0.18 * -sy;
    const py = y + s * 0.18 * cx;
    g.save();
    g.translate(px, py);
    g.rotate(a);
    g.fillRect(-0.01, -0.1, 0.02, 0.2);
    g.restore();
  }
  g.fillStyle = '#c94a42';
  g.fillRect(x + 0.2 * cx - 0.05, y + 0.2 * sy - 0.05, 0.1, 0.1);
};
place(-0.75, -0.3, Math.PI / 2);
place(0.45, -0.3, Math.PI / 2);
place(-0.3, 0.3, -Math.PI / 2);
place(0.6, 0.3, -Math.PI / 2);
place(1.08, 0, Math.PI);
// the cheese board and its cheese
g.fillStyle = '#a77a4c';
g.beginPath();
g.arc(0.05, 0, 0.17, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#efcf7a';
g.beginPath();
g.moveTo(0.05, 0);
g.arc(0.05, 0, 0.13, -0.4, 4.6);
g.closePath();
g.fill();
// the bowl of cherries
g.fillStyle = '#e9e3d7';
g.beginPath();
g.arc(-0.5, 0.02, 0.12, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9a1f2b';
for (let i = 0; i < 16; i++) {
  g.beginPath();
  g.arc(-0.5 + (e.rnd() - 0.5) * 0.15, 0.02 + (e.rnd() - 0.5) * 0.15, 0.022, 0, Math.PI * 2);
  g.fill();
}
// the bread on its board
g.fillStyle = '#8d6a45';
g.fillRect(-1.05, -0.08, 0.3, 0.18);
g.fillStyle = '#c99a5a';
g.beginPath();
g.ellipse(-0.9, 0.01, 0.12, 0.07, 0, 0, Math.PI * 2);
g.fill();
