// The ceiling, laid face down from the back wall toward the viewer (y from 0 at the back wall to −5.2 toward the
// viewer): dark old boards under heavy timber beams running across.
g.fillStyle = '#7b6650';
g.fillRect(-3.65, -5.25, 7.5, 5.3);
g.strokeStyle = 'rgba(40,30,24,0.35)';
g.lineWidth = 0.012;
for (let x = -3.65; x < 3.85; x += 0.14) {
  g.beginPath();
  g.moveTo(x, -5.25);
  g.lineTo(x, 0.05);
  g.stroke();
}
for (let y = -0.6; y > -5.25; y -= 1.4) {
  g.fillStyle = '#5b4838';
  g.fillRect(-3.65, y - 0.2, 7.5, 0.2);
  g.fillStyle = 'rgba(255,240,210,0.12)';
  g.fillRect(-3.65, y - 0.2, 7.5, 0.03);
}
