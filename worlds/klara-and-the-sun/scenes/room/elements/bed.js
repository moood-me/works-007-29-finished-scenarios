// The top of the bed from above (metres, its middle at distance 3.5; y toward the viewer, the pillow end y −0.9 at the
// west wall): the white sheet, the pillow, the pale-blue quilt pulled up and turned back, and on it Josie's loose
// drawings and a pencil.
g.fillStyle = '#f2eee7';
g.fillRect(-0.5, -0.9, 1.0, 1.8);
g.fillStyle = '#fbf9f5';
g.beginPath();
g.roundRect(-0.38, -0.86, 0.76, 0.32, 0.08);
g.fill();
// the quilt, stitched in soft squares, its top edge turned back
g.fillStyle = '#b9c7d2';
g.fillRect(-0.5, -0.4, 1.0, 1.3);
g.strokeStyle = 'rgba(140,158,172,0.55)';
g.lineWidth = 0.008;
g.beginPath();
for (let x = -0.5; x <= 0.5; x += 0.25) {
  g.moveTo(x, -0.4);
  g.lineTo(x, 0.9);
}
for (let y = -0.15; y < 0.9; y += 0.25) {
  g.moveTo(-0.5, y);
  g.lineTo(0.5, y);
}
g.stroke();
g.fillStyle = '#f2eee7';
g.fillRect(-0.5, -0.45, 1.0, 0.1);
// her drawings, two sheets on the quilt, and a pencil
for (const [x, y, r] of [[-0.18, -0.05, 0.3], [0.05, 0.25, -0.2]]) {
  g.save();
  g.translate(x, y);
  g.rotate(r);
  g.fillStyle = '#f8f5ee';
  g.fillRect(-0.105, -0.15, 0.21, 0.3);
  g.strokeStyle = '#7a746e';
  g.lineWidth = 0.005;
  g.beginPath();
  g.ellipse(0, -0.07, 0.06, 0.035, 0, 0, Math.PI * 2);
  g.moveTo(-0.04, 0.02);
  g.arc(-0.04, 0.03, 0.015, 0, Math.PI * 2);
  g.moveTo(0.04, 0.02);
  g.arc(0.04, 0.03, 0.015, 0, Math.PI * 2);
  g.stroke();
  g.restore();
}
g.strokeStyle = '#d6a43a';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.2, -0.1);
g.lineTo(0.34, -0.02);
g.stroke();
