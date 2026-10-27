// A table's top from above (copies: the old man's, the young fishermen's, the old fishermen's small one): three
// planks gone silver, cracked, a knot, rings where tins stood. Metres, its centre at the anchor; 0.9 × 0.8.
g.fillStyle = '#9c8a70';
g.fillRect(-0.45, -0.4, 0.9, 0.8);
g.fillStyle = 'rgba(60,48,36,0.5)';
for (const y of [-0.135, 0.13]) g.fillRect(-0.45, y, 0.9, 0.012);
g.strokeStyle = 'rgba(70,56,42,0.4)';
g.lineWidth = 0.008;
for (const [x, y] of [[-0.2, -0.2], [0.15, 0.05], [0.3, -0.25]]) {
  g.beginPath();
  g.arc(x, y, 0.035, 0, Math.PI * 2);
  g.stroke();
}
g.beginPath();
g.moveTo(-0.4, 0.25);
g.lineTo(-0.1, 0.27);
g.stroke();
g.fillStyle = 'rgba(80,64,48,0.5)';
g.beginPath();
g.ellipse(0.25, 0.28, 0.03, 0.02, 0, 0, Math.PI * 2);
g.fill();
