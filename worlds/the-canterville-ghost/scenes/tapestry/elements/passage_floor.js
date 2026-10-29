// The floor of the narrow way from above (1.2 m by 3 m, y toward the viewer): worn flags, dust.
g.fillStyle = '#1c1813';
g.fillRect(-0.6, -1.5, 1.2, 3.0);
g.strokeStyle = '#120f0c';
g.lineWidth = 0.02;
for (let y = -1.5; y < 1.5; y += 0.45) {
  g.beginPath();
  g.moveTo(-0.6, y);
  g.lineTo(0.6, y);
  g.stroke();
}
