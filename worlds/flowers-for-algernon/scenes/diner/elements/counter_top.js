// The counter's top from above (metres, its middle; y toward the room): pale green linoleum with fine darker specks,
// a chrome edge along the front and back, a few wet rings where glasses stood.
g.fillStyle = '#cfdccf';
g.fillRect(-1.5, -0.28, 3.0, 0.56);
g.fillStyle = 'rgba(80,110,90,0.25)';
for (let i = 0; i < 160; i++) g.fillRect(-1.5 + e.rnd() * 3.0, -0.26 + e.rnd() * 0.52, 0.01, 0.004);
g.fillStyle = '#c8cbc7';
g.fillRect(-1.5, 0.24, 3.0, 0.04);
g.fillRect(-1.5, -0.28, 3.0, 0.03);
g.strokeStyle = 'rgba(120,140,128,0.35)';
g.lineWidth = 0.006;
for (const [x, y] of [[-0.6, 0.05], [0.2, -0.08], [0.9, 0.1]]) {
  g.beginPath();
  g.arc(x, y, 0.035, 0, Math.PI * 2);
  g.stroke();
}
