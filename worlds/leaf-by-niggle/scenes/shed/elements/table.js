// The paint table by the platform: a rough deal table, on it a palette crusted with greens, jars of brushes and
// water, tubes, a rag; a pot under it.
g.fillStyle = '#5a4836';
g.fillRect(-0.55, -0.78, 0.06, 0.8);
g.fillRect(0.49, -0.78, 0.06, 0.8);
g.fillStyle = '#806b53';
g.fillRect(-0.62, -0.84, 1.24, 0.07);
g.fillStyle = '#6a5642';
g.fillRect(-0.62, -0.77, 1.24, 0.03);
// the palette
g.fillStyle = '#b89b70';
g.beginPath();
g.ellipse(-0.25, -0.86, 0.22, 0.035, 0, 0, Math.PI * 2);
g.fill();
for (const [x, c] of [[-0.4, '#6f9440'], [-0.32, '#9fb453'], [-0.24, '#e6e0cf'], [-0.16, '#8c8c86'], [-0.1, '#c8a058']]) {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, -0.885, 0.025, 0.012, 0, 0, Math.PI * 2);
  g.fill();
}
// jars of brushes and of water
g.fillStyle = 'rgba(190,200,190,0.85)';
g.fillRect(0.08, -1.04, 0.1, 0.2);
g.fillStyle = 'rgba(150,170,140,0.7)';
g.fillRect(0.24, -0.98, 0.12, 0.14);
g.strokeStyle = '#c9b48a';
g.lineWidth = 0.01;
for (const [x, t] of [[0.1, -1.3], [0.13, -1.26], [0.16, -1.33]]) {
  g.beginPath();
  g.moveTo(x, -0.9);
  g.lineTo(x + (x - 0.13) * 1.5, t);
  g.stroke();
}
// a rag
g.fillStyle = '#c7bca6';
g.beginPath();
g.moveTo(0.38, -0.85);
g.quadraticCurveTo(0.45, -0.95, 0.56, -0.86);
g.lineTo(0.6, -0.72);
g.quadraticCurveTo(0.5, -0.78, 0.42, -0.7);
g.closePath();
g.fill();
// a pot under it
g.fillStyle = '#6b6258';
g.fillRect(-0.3, -0.24, 0.26, 0.24);
g.fillStyle = '#4f4740';
g.fillRect(-0.32, -0.26, 0.3, 0.04);
