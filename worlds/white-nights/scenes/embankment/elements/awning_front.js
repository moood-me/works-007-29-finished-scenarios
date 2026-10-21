// The awning's front edge toward the canal, x −1.5…1.5 along the house: a band of the same sheet iron 0.3 m deep, its
// lower edge cut in small scallops; its foot the scallops' points
g.fillStyle = '#7f8985';
g.beginPath();
g.moveTo(-1.5, -0.3);
g.lineTo(1.5, -0.3);
g.lineTo(1.5, -0.08);
for (let k = 0; k < 12; k++) {
  const x = 1.5 - k * 0.25;
  g.quadraticCurveTo(x - 0.125, 0.04, x - 0.25, -0.08);
}
g.closePath();
g.fill();
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.02;
g.stroke();
