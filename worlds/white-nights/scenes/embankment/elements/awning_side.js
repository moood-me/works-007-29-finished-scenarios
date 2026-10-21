// The awning's near end toward the viewer, x −0.8…0.8 from the canal side to the wall: the same scalloped band
g.fillStyle = '#7f8985';
g.beginPath();
g.moveTo(-0.8, -0.3);
g.lineTo(0.8, -0.3);
g.lineTo(0.8, -0.08);
for (let k = 0; k < 8; k++) {
  const x = 0.8 - k * 0.2;
  g.quadraticCurveTo(x - 0.1, 0.04, x - 0.2, -0.08);
}
g.closePath();
g.fill();
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.02;
g.stroke();
