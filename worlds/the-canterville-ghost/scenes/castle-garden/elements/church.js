// The little parish church beyond the churchyard (side on, 34 m away): a long low nave of grey stone under a slate
// roof, three lancet windows, a porch, and at its east end a square tower with battlements and a belfry window.
const STONE = '#9a958a';
const STONE_DARK = '#7c776d';
const SLATE = '#555963';
const GLASS = '#2e3038';
// the nave and its roof
g.fillStyle = STONE;
g.fillRect(-8.5, -5, 10.5, 5.1);
g.fillStyle = SLATE;
g.beginPath();
g.moveTo(-8.9, -4.9);
g.lineTo(-8.2, -8);
g.lineTo(2, -8);
g.lineTo(2, -4.9);
g.closePath();
g.fill();
g.strokeStyle = '#4a4e57';
g.lineWidth = 0.06;
for (let y = -5.3; y > -8; y -= 0.45) {
  g.beginPath();
  g.moveTo(-8.8 + (-4.9 - y) * 0.22, y);
  g.lineTo(2, y);
  g.stroke();
}
// buttresses and the courses of stone
g.fillStyle = STONE_DARK;
for (const x of [-8.5, -5.2, -1.9]) g.fillRect(x, -4.2, 0.5, 4.3);
g.strokeStyle = STONE_DARK;
g.lineWidth = 0.04;
for (let y = -0.6; y > -5; y -= 0.6) {
  g.beginPath();
  g.moveTo(-8.5, y);
  g.lineTo(2, y);
  g.stroke();
}
// the lancet windows
g.fillStyle = GLASS;
for (const x of [-6.6, -3.5, -0.4]) {
  g.beginPath();
  g.moveTo(x - 0.4, -1.2);
  g.lineTo(x - 0.4, -3.2);
  g.quadraticCurveTo(x, -4.1, x + 0.4, -3.2);
  g.lineTo(x + 0.4, -1.2);
  g.closePath();
  g.fill();
}
// the porch, gabled, its door dark
g.fillStyle = STONE;
g.fillRect(-5.0, -3.0, 2.0, 3.1);
g.fillStyle = SLATE;
g.beginPath();
g.moveTo(-5.2, -3.0);
g.lineTo(-4.0, -4.0);
g.lineTo(-2.8, -3.0);
g.closePath();
g.fill();
g.fillStyle = '#3a3026';
g.beginPath();
g.moveTo(-4.45, 0);
g.lineTo(-4.45, -1.8);
g.quadraticCurveTo(-4.0, -2.4, -3.55, -1.8);
g.lineTo(-3.55, 0);
g.closePath();
g.fill();
// the tower: a square of stone, a belfry window, battlements
g.fillStyle = STONE;
g.fillRect(2, -13.5, 4.4, 13.6);
g.fillStyle = STONE_DARK;
g.fillRect(2, -13.6, 4.4, 0.35);
for (let x = 2; x < 6.4; x += 0.88) g.fillRect(x, -14.4, 0.5, 0.85);
g.fillRect(2, -0.3, 4.4, 0.4);
g.strokeStyle = STONE_DARK;
for (let y = -0.8; y > -13.4; y -= 0.6) {
  g.beginPath();
  g.moveTo(2, y);
  g.lineTo(6.4, y);
  g.stroke();
}
g.fillStyle = GLASS;
g.beginPath();
g.moveTo(3.7, -9.8);
g.lineTo(3.7, -11.4);
g.quadraticCurveTo(4.2, -12.2, 4.7, -11.4);
g.lineTo(4.7, -9.8);
g.closePath();
g.fill();
g.strokeStyle = STONE_DARK;
g.lineWidth = 0.08;
for (let y = -10.1; y > -11.5; y -= 0.3) {
  g.beginPath();
  g.moveTo(3.7, y);
  g.lineTo(4.7, y);
  g.stroke();
}
g.fillStyle = GLASS;
g.fillRect(3.9, -5.4, 0.6, 1.4);
