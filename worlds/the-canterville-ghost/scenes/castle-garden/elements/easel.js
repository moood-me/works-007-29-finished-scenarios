// Virginia's sketching easel on the lawn (1.5 m), there while `easel` is — seen from behind her board, turned toward
// the almond: three light wooden legs, the board's back (a plain panel on its stretcher) clamped at her eye level, a
// little shelf under it with her open box of colours on it. Its point `easel#board`.
if (!e.state.easel) return;
const WOOD = '#9a7a52';
const WOOD_DARK = '#6e5436';
g.lineCap = 'round';
g.strokeStyle = WOOD;
g.lineWidth = 0.03;
for (const [x0, x1] of [[-0.28, -0.04], [0.28, 0.04]]) {
  g.beginPath();
  g.moveTo(x0, 0.02);
  g.lineTo(x1, -1.55);
  g.stroke();
}
g.strokeStyle = WOOD_DARK;
g.beginPath();
g.moveTo(0.02, 0.02);
g.lineTo(0, -1.4);
g.stroke();
// the shelf and the box of colours open on it, its lid up: little cakes of paint in a row
g.fillStyle = WOOD_DARK;
g.fillRect(-0.24, -0.96, 0.48, 0.035);
g.fillStyle = '#2e2a28';
g.fillRect(-0.18, -1.02, 0.36, 0.06);
g.fillRect(-0.18, -1.2, 0.36, 0.18);
for (let i = 0; i < 6; i++) {
  g.fillStyle = ['#c8c2b0', '#3a5a9a', '#d8a838', '#4a7a3a', '#9a6a3a', '#e8e4dc'][i];
  g.fillRect(-0.16 + i * 0.055, -1.015, 0.045, 0.025);
}
// the board's back: a light panel framed by its stretcher, clamped at the top
g.fillStyle = '#b89a70';
g.fillRect(-0.28, -1.58, 0.56, 0.42);
g.strokeStyle = WOOD_DARK;
g.lineWidth = 0.035;
g.strokeRect(-0.26, -1.56, 0.52, 0.38);
g.beginPath();
g.moveTo(0, -1.56);
g.lineTo(0, -1.18);
g.stroke();
g.fillStyle = WOOD_DARK;
g.fillRect(-0.04, -1.64, 0.08, 0.08);
e.at(0, -1.37, 'board');
