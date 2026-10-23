// A row of houses far down the city: eight houses wall to wall, white and painted (the copy's tint varies them), their
// red roofs at different heights
const A = e.anim;
for (let i = 0; i < 8; i++) {
  const x = -40 + i * 10, h = 7 + 4 * A.hash(i, 1);
  g.fillStyle = ['#f2ece2', '#efdcc4', '#f1e4d6', '#e7e3dc'][i % 4];
  g.fillRect(x, -h, 10, h);
  g.fillStyle = i % 2 ? '#b8563e' : '#c4674a';
  g.beginPath();
  g.moveTo(x - 0.4, -h);
  g.lineTo(x + 5, -h - 2.6);
  g.lineTo(x + 10.4, -h);
  g.closePath();
  g.fill();
  g.fillStyle = '#5a5248';
  for (let k = 0; k < 3; k++) g.fillRect(x + 1.5 + k * 2.8, -h + 1.6, 1, 1.4);
}
