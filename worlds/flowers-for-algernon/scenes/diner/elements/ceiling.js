// The ceiling, seen from below (the card laid face down, its foot at the back wall, y −5.2 the end nearest the
// viewer): pressed tin in squares, painted cream, a brown moulding at the wall.
g.fillStyle = '#e6d8b9';
g.fillRect(-3.2, -5.2, 6.4, 5.25);
g.strokeStyle = '#cdbd99';
g.lineWidth = 0.015;
g.beginPath();
for (let x = -3.2; x <= 3.2; x += 0.6) {
  g.moveTo(x, -5.2);
  g.lineTo(x, 0);
}
for (let y = 0; y >= -5.2; y -= 0.6) {
  g.moveTo(-3.2, y);
  g.lineTo(3.2, y);
}
g.stroke();
g.strokeStyle = 'rgba(205,189,153,0.5)';
g.lineWidth = 0.008;
for (let x = -2.9; x < 3.2; x += 0.6) {
  for (let y = -0.3; y > -5.2; y -= 0.6) {
    g.beginPath();
    g.arc(x, y, 0.12, 0, Math.PI * 2);
    g.stroke();
  }
}
g.fillStyle = '#5b3b2a';
g.fillRect(-3.2, -0.08, 6.4, 0.1);
