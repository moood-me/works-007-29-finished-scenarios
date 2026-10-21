// The two bunks along the wall, one over the other: plain wooden frames, grey wool blankets hanging over the rails,
// a pillow at the head of each — the upper one Johnny's, made tidily; the lower McDunn's.
const WOOD = '#6a5039';
// the posts
g.fillStyle = WOOD;
g.fillRect(-0.99, -1.8, 0.07, 1.8);
g.fillRect(0.92, -1.8, 0.07, 1.8);
const bunk = (y, blanket, fold) => {
  // the mattress and the blanket over it, hanging over the front rail
  g.fillStyle = blanket;
  g.fillRect(-0.92, y - 0.16, 1.84, 0.16);
  g.beginPath();
  g.moveTo(-0.6, y);
  g.lineTo(0.92, y);
  g.lineTo(0.92, y + 0.2);
  g.lineTo(-0.58, y + 0.22);
  g.closePath();
  g.fill();
  // a stripe woven near its edge
  g.fillStyle = '#5a626c';
  g.fillRect(-0.59, y + 0.15, 1.51, 0.025);
  // the turned-down end
  g.fillStyle = fold;
  g.fillRect(-0.6, y - 0.16, 0.12, 0.38);
  // the pillow
  g.fillStyle = '#c9c2b2';
  g.beginPath();
  g.moveTo(-0.9, y - 0.16);
  g.quadraticCurveTo(-0.9, y - 0.27, -0.8, y - 0.26);
  g.lineTo(-0.66, y - 0.25);
  g.quadraticCurveTo(-0.6, y - 0.24, -0.62, y - 0.16);
  g.closePath();
  g.fill();
  // the front rail under it
  g.fillStyle = WOOD;
  g.fillRect(-0.92, y, 0.32, 0.12);
};
bunk(-0.45, '#6f6a66', '#7c7672');
bunk(-1.38, '#6a7078', '#767c84');
// the top rails
g.fillStyle = '#6c5440';
g.fillRect(-0.99, -1.8, 1.98, 0.05);
