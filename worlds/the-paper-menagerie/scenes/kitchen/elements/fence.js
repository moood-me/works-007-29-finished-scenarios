// The white picket fence along the back of the yard, its gate a little left; pointed pickets, two rails.
g.fillStyle = '#e9e6dc';
g.fillRect(-5, -0.72, 10, 0.06);
g.fillRect(-5, -0.3, 10, 0.06);
for (let x = -5; x < 5; x += 0.16) {
  const gate = x > -1.2 && x < -0.2;
  g.fillStyle = gate ? '#f1eee5' : '#ebe8de';
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -0.86);
  g.lineTo(x + 0.05, -0.94);
  g.lineTo(x + 0.1, -0.86);
  g.lineTo(x + 0.1, 0);
  g.closePath();
  g.fill();
}
// the gate's posts and its diagonal brace
g.fillStyle = '#dcd8cc';
g.fillRect(-1.3, -1.0, 0.1, 1.0);
g.fillRect(-0.22, -1.0, 0.1, 1.0);
g.strokeStyle = '#d6d2c6';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-1.18, -0.3);
g.lineTo(-0.26, -0.7);
g.stroke();
e.at(-0.7, -0.6, 'gate');
