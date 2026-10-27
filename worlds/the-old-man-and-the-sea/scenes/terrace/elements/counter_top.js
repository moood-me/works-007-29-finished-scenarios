// The counter's top from above: dark worn planks along it, rings where tins stood. Metres, its centre at the anchor.
g.fillStyle = '#6a5642';
g.fillRect(-0.3, -1.95, 0.6, 3.9);
g.fillStyle = 'rgba(40,32,24,0.4)';
for (const x of [-0.1, 0.1]) g.fillRect(x, -1.95, 0.01, 3.9);
g.strokeStyle = 'rgba(40,32,24,0.35)';
g.lineWidth = 0.01;
for (let i = 0; i < 9; i++) {
  g.beginPath();
  g.arc(-0.2 + 0.4 * e.rnd(), -1.8 + 3.6 * e.rnd(), 0.035, 0, Math.PI * 2);
  g.stroke();
}
