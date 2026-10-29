// The yellow school bus, side on, its nose to the right of one looking from the yard (it comes from the left and
// stops at the stop): the long yellow body with its black rub rails, the row of windows, the folding door behind the
// nose (point `door`), the red stop arm folded, black wheels.
const Y1 = '#f0b424',
  Y2 = '#d79d18';
g.fillStyle = Y1;
g.beginPath();
g.moveTo(-5.3, -0.45);
g.lineTo(-5.3, -2.75);
g.quadraticCurveTo(-5.3, -2.95, -5.0, -2.95);
g.lineTo(3.3, -2.95);
g.quadraticCurveTo(3.6, -2.95, 3.6, -2.7);
g.lineTo(3.65, -1.6);
g.lineTo(5.0, -1.45);
g.quadraticCurveTo(5.3, -1.4, 5.3, -1.1);
g.lineTo(5.3, -0.45);
g.closePath();
g.fill();
g.fillStyle = Y2;
g.fillRect(-5.3, -0.75, 10.6, 0.3);
g.fillStyle = '#1e1e20';
for (const y of [-1.0, -1.35, -1.75]) g.fillRect(-5.3, y, 8.9, 0.06);
g.fillRect(3.6, -1.0, 1.7, 0.06);
// the windows
g.fillStyle = '#4b5866';
for (let x = -4.9; x < 2.2; x += 0.95) g.fillRect(x, -2.65, 0.8, 0.7);
g.fillStyle = 'rgba(200,215,225,0.35)';
for (let x = -4.9; x < 2.2; x += 0.95) g.fillRect(x + 0.05, -2.6, 0.25, 0.6);
// the door
g.fillStyle = '#3b4652';
g.fillRect(2.6, -2.7, 0.85, 2.2);
g.fillStyle = Y2;
g.fillRect(3.0, -2.7, 0.04, 2.2);
// the stop arm, folded, and the lights
g.fillStyle = '#c33a2e';
g.fillRect(-4.6, -2.05, 0.4, 0.4);
g.fillStyle = '#e45a3a';
for (const x of [-5.1, 3.35]) {
  g.beginPath();
  g.arc(x, -2.83, 0.07, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#f6eab0';
g.fillRect(5.15, -1.3, 0.12, 0.14);
for (const x of [-3.4, 3.9]) {
  g.fillStyle = '#1d1d20';
  g.beginPath();
  g.arc(x, -0.45, 0.48, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#8f9399';
  g.beginPath();
  g.arc(x, -0.45, 0.2, 0, Math.PI * 2);
  g.fill();
}
e.at(3.0, -1.6, 'door');
