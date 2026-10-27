// The ceiling, laid face down from the back wall toward the viewer (y from 0 at the back wall to −5.2 toward the
// viewer): dark old boards under heavy timber beams running across, a sprinkler pipe along the room's length.
g.fillStyle = '#7b6650';
g.fillRect(-3.45, -5.25, 7.1, 5.3);
g.strokeStyle = 'rgba(40,30,24,0.35)';
g.lineWidth = 0.012;
for (let x = -3.45; x < 3.65; x += 0.14) {
  g.beginPath();
  g.moveTo(x, -5.25);
  g.lineTo(x, 0.05);
  g.stroke();
}
for (let y = -0.6; y > -5.25; y -= 1.4) {
  g.fillStyle = '#5b4838';
  g.fillRect(-3.45, y - 0.2, 7.1, 0.2);
  g.fillStyle = 'rgba(255,240,210,0.12)';
  g.fillRect(-3.45, y - 0.2, 7.1, 0.03);
}
g.fillStyle = '#6d6a63';
g.fillRect(-1.6, -5.25, 0.06, 5.3);
g.fillStyle = '#9a3b30';
for (let y = -1.3; y > -5.2; y -= 1.4) g.fillRect(-1.61, y, 0.08, 0.05);
