// The white picket fence along the front of the yard, the gate in it before the window; pointed pickets, two rails.
g.fillStyle = '#e9e6dc';
g.fillRect(-6, -0.72, 12, 0.06);
g.fillRect(-6, -0.3, 12, 0.06);
for (let x = -6; x < 6; x += 0.16) {
  const gate = x > -0.6 && x < 0.4;
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
g.fillStyle = '#dcd8cc';
g.fillRect(-0.7, -1.0, 0.1, 1.0);
g.fillRect(0.38, -1.0, 0.1, 1.0);
g.strokeStyle = '#d6d2c6';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-0.58, -0.3);
g.lineTo(0.34, -0.7);
g.stroke();
e.at(-0.1, -0.6, 'gate');
