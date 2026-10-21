// The two bunks along the wall, one over the other, built in: a solid head board and foot board, front rails, grey
// wool blankets hanging over them, a pillow at the head of each — the upper Johnny's, the lower McDunn's.
const WOOD = '#6a5039';
const DARK = '#5a4330';
// head board (the far end) and foot board (the near end), solid to the top
g.fillStyle = DARK;
g.fillRect(-0.99, -1.8, 0.1, 1.8);
g.fillStyle = WOOD;
g.fillRect(0.86, -1.8, 0.13, 1.8);
g.fillStyle = '#76593f';
g.fillRect(0.88, -1.76, 0.03, 1.72);
const bunk = (y, blanket, fold) => {
  // the blanket over the mattress, hanging over the front rail
  g.fillStyle = blanket;
  g.beginPath();
  g.moveTo(-0.89, y - 0.17);
  g.lineTo(0.86, y - 0.17);
  g.lineTo(0.86, y + 0.2);
  g.lineTo(-0.5, y + 0.22);
  g.lineTo(-0.55, y);
  g.lineTo(-0.89, y);
  g.closePath();
  g.fill();
  // a stripe woven near its edge
  g.fillStyle = '#4f5660';
  g.fillRect(-0.5, y + 0.15, 1.36, 0.025);
  // the turned-down end
  g.fillStyle = fold;
  g.fillRect(-0.55, y - 0.17, 0.1, 0.38);
  // the pillow
  g.fillStyle = '#bfb8a8';
  g.beginPath();
  g.moveTo(-0.88, y - 0.17);
  g.quadraticCurveTo(-0.88, y - 0.27, -0.78, y - 0.27);
  g.lineTo(-0.64, y - 0.26);
  g.quadraticCurveTo(-0.57, y - 0.25, -0.59, y - 0.17);
  g.closePath();
  g.fill();
  // the front rail
  g.fillStyle = WOOD;
  g.fillRect(-0.89, y, 0.36, 0.12);
  g.fillRect(-0.89, y + 0.2, 1.75, 0.06);
};
bunk(-0.42, '#6f6a66', '#7c7672');
bunk(-1.35, '#6a7078', '#767c84');
// the top rail
g.fillStyle = WOOD;
g.fillRect(-0.99, -1.8, 1.98, 0.06);
