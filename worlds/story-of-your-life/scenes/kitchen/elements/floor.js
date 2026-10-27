// The kitchen's linoleum seen from above (metres, y toward the viewer; x −3.05…3.05, the back wall at y −2.3):
// cream and sage checks, worn paler in front of the sink and round the table.
g.fillStyle = '#e5dac2';
g.fillRect(-3.05, -2.35, 6.1, 4.7);
g.fillStyle = '#bcc4aa';
for (let i = 0; i < 21; i++) {
  for (let j = 0; j < 16; j++) {
    if ((i + j) % 2) g.fillRect(-3.05 + i * 0.3, -2.35 + j * 0.3, 0.3, 0.3);
  }
}
g.fillStyle = 'rgba(240,232,214,0.35)';
for (const [x, y, rx, ry] of [[0.6, -1.8, 0.7, 0.4], [0.9, 0.2, 1.1, 0.8], [-1.9, 0.0, 0.6, 0.6]]) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  g.fill();
}
