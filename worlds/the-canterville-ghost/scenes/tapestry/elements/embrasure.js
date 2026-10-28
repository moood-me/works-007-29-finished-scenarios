// A side of the window's embrasure (0.5 m deep, from the wall's face back to the glass; two copies, one each side): dressed stone, worn smooth.
g.fillStyle = '#7d7366';
g.fillRect(-0.25, -2.72, 0.5, 2.74);
g.strokeStyle = '#675e53';
g.lineWidth = 0.012;
for (let y = -0.5; y > -2.7; y -= 0.32) {
  g.beginPath();
  g.moveTo(-0.25, y);
  g.lineTo(0.25, y);
  g.stroke();
}
