// The garden gate in the hedge: two stone posts with ball caps and a wrought-iron gate standing a little open.
for (const x of [-0.72, 0.72]) {
  g.fillStyle = '#cbbfa9';
  g.fillRect(x - 0.16, -1.95, 0.32, 1.95);
  g.fillStyle = '#b9ac95';
  g.fillRect(x - 0.2, -2.02, 0.4, 0.1);
  g.beginPath();
  g.arc(x, -2.14, 0.13, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#2c2a28';
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.56, -0.1);
g.lineTo(0.1, -0.1);
g.moveTo(-0.56, -1.3);
g.quadraticCurveTo(-0.23, -1.55, 0.1, -1.3);
for (let x = -0.52; x <= 0.1; x += 0.08) {
  g.moveTo(x, -0.1);
  g.lineTo(x, -1.3 - 0.2 * Math.sin(((x + 0.56) / 0.66) * Math.PI));
}
g.stroke();
