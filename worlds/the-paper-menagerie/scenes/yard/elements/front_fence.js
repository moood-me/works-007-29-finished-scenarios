// The white picket fence along the front of the yard, seen from the street side (the card faces the yard: its x runs
// to the right of one looking at it from the street eye, world across −x): pointed pickets on two rails, posts every
// two metres, and the gap of the open gate (world across −0.9…0.4) between two square posts, the gate itself swung in
// against the fence inside.
const gate = [-0.4, 0.9];
g.fillStyle = '#e4e1d6';
for (const [a, b] of [[-12, gate[0]], [gate[1], 12]]) {
  g.fillRect(a, -0.74, b - a, 0.06);
  g.fillRect(a, -0.3, b - a, 0.06);
  for (let x = a; x < b - 0.05; x += 0.15) {
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
  g.fillStyle = '#e4e1d6';
}
g.fillStyle = '#dcd8cc';
for (let x = -12; x < 12; x += 2) if (x < gate[0] - 0.2 || x > gate[1] + 0.2) g.fillRect(x - 0.05, -1.0, 0.1, 1.0);
for (const x of gate) {
  g.fillStyle = '#e8e5db';
  g.fillRect(x - 0.07, -1.12, 0.14, 1.12);
  g.fillStyle = '#d2cdc0';
  g.fillRect(x - 0.09, -1.16, 0.18, 0.05);
}
e.at((gate[0] + gate[1]) / 2, -0.5, 'gate');
