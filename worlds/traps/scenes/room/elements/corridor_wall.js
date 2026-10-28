// The corridor's far wall, seen through the door: dark red-brown wallpaper, a dado rail, a dim old engraving of a
// courtroom in its frame, the top of the banister going down on the right.
const W = 1.8;
g.fillStyle = '#5a3a32';
g.fillRect(-W, -2.6, W * 2, 2.6);
g.fillStyle = '#4a2f28';
g.fillRect(-W, -0.9, W * 2, 0.9);
g.fillStyle = '#7a5a46';
g.fillRect(-W, -0.93, W * 2, 0.04);
g.fillStyle = '#2e221c';
g.fillRect(-W, -0.1, W * 2, 0.1);
g.fillStyle = '#2a201a';
g.fillRect(-0.55, -1.95, 0.5, 0.62);
g.fillStyle = '#b8ad94';
g.fillRect(-0.5, -1.9, 0.4, 0.52);
g.strokeStyle = '#6a6050';
g.lineWidth = 0.01;
g.beginPath();
for (let x = -0.45; x < -0.12; x += 0.06) {
  g.moveTo(x, -1.75);
  g.lineTo(x, -1.45);
}
g.moveTo(-0.48, -1.78);
g.lineTo(-0.3, -1.86);
g.lineTo(-0.12, -1.78);
g.stroke();
g.fillStyle = '#3a271d';
g.fillRect(0.8, -1.0, 1.0, 0.06);
for (let x = 0.85; x < 1.8; x += 0.12) g.fillRect(x, -0.95, 0.03, 0.95);
