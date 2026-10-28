// A kitchen chair at the table, seen from behind (its back to the room): a bentwood back of two rails, the seat's
// edge, four legs splayed a little, stained dark.
const wood = '#5b3d28';
g.fillStyle = wood;
for (const x of [-0.19, 0.16]) g.fillRect(x, -0.88, 0.035, 0.88);
g.fillRect(-0.17, -0.47, 0.34, 0.04);
for (const y of [-0.86, -0.7]) g.fillRect(-0.19, y, 0.38, 0.05);
g.fillStyle = '#6a4630';
g.fillRect(-0.2, -0.46, 0.4, 0.03);
g.fillStyle = wood;
for (const x of [-0.13, 0.1]) {
  g.beginPath();
  g.moveTo(x, -0.43);
  g.lineTo(x + 0.03, -0.43);
  g.lineTo(x + (x < 0 ? -0.01 : 0.05), 0);
  g.lineTo(x + (x < 0 ? -0.04 : 0.02), 0);
  g.closePath();
  g.fill();
}
g.fillRect(-0.15, -0.18, 0.3, 0.02);
