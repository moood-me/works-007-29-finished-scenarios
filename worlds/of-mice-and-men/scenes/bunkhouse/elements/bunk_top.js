// A bunk seen from above (metres, its middle; x along it, y toward the viewer): the burlap ticking of the mattress, a
// grey army blanket pulled up and folded back, the pillow at the head (left), a lumpy patch where a man lay.
g.fillStyle = '#b9a47e';
g.fillRect(-0.95, -0.4, 1.9, 0.8);
g.strokeStyle = 'rgba(120,100,70,0.35)';
g.lineWidth = 0.012;
for (let y = -0.36; y < 0.4; y += 0.08) {
  g.beginPath();
  g.moveTo(-0.95, y);
  g.lineTo(0.95, y);
  g.stroke();
}
g.fillStyle = '#e4ddcd';
g.beginPath();
g.roundRect(-0.9, -0.3, 0.4, 0.6, 0.08);
g.fill();
g.fillStyle = '#7b7a72';
g.beginPath();
g.moveTo(-0.4, -0.42);
g.lineTo(0.97, -0.42);
g.lineTo(0.97, 0.42);
g.lineTo(-0.3, 0.42);
g.bezierCurveTo(-0.38, 0.2, -0.32, -0.2, -0.4, -0.42);
g.closePath();
g.fill();
g.fillStyle = '#8d8b82';
g.beginPath();
g.moveTo(-0.4, -0.42);
g.lineTo(-0.12, -0.42);
g.bezierCurveTo(-0.06, -0.1, -0.12, 0.2, -0.02, 0.42);
g.lineTo(-0.3, 0.42);
g.bezierCurveTo(-0.38, 0.2, -0.32, -0.2, -0.4, -0.42);
g.closePath();
g.fill();
g.fillStyle = 'rgba(60,58,52,0.25)';
g.fillRect(-0.4, -0.15, 1.37, 0.03);
