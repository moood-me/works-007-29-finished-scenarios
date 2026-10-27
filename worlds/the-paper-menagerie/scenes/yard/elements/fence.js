// The white picket fence along the left side of the yard (seen from inside the yard; x runs away from the viewer):
// pointed pickets on two rails, its posts every two metres, the paint worn at the feet.
g.fillStyle = '#e4e1d6';
g.fillRect(-6, -0.74, 10.5, 0.06);
g.fillRect(-6, -0.3, 10.5, 0.06);
for (let x = -6; x < 4.5; x += 0.15) {
  g.fillStyle = e.rnd() < 0.2 ? '#e3e0d5' : '#efece3';
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -0.86);
  g.lineTo(x + 0.045, -0.94);
  g.lineTo(x + 0.09, -0.86);
  g.lineTo(x + 0.09, 0);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(120,128,100,0.35)';
  g.fillRect(x, -0.08, 0.09, 0.08);
}
g.fillStyle = '#dcd8cc';
for (let x = -6; x < 4.5; x += 2) g.fillRect(x - 0.05, -1.0, 0.1, 1.0);
