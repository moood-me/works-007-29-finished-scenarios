// The hall's floor from above (2.2 m by 2.4 m): painted boards, a worn runner from the front door to the parlour.
g.fillStyle = '#5a4030';
g.fillRect(-1.1, -1.2, 2.2, 2.4);
g.strokeStyle = '#4a3326';
g.lineWidth = 0.01;
for (let x = -1.1; x < 1.1; x += 0.14) {
  g.beginPath();
  g.moveTo(x, -1.2);
  g.lineTo(x, 1.2);
  g.stroke();
}
g.fillStyle = '#6b4a3a';
g.fillRect(-0.2, -1.2, 0.7, 2.4);
g.fillStyle = '#8a6a4a';
g.fillRect(-0.2, -1.2, 0.04, 2.4);
g.fillRect(0.46, -1.2, 0.04, 2.4);
