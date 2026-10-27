// A thwart, the plank seat across the skiff, from above: worn grey wood, its grain along it.
g.fillStyle = '#9a8769';
g.fillRect(-0.12, -0.75, 0.24, 1.5);
g.strokeStyle = 'rgba(70,56,42,0.35)';
g.lineWidth = 0.008;
for (const x of [-0.07, -0.01, 0.06]) {
  g.beginPath();
  g.moveTo(x, -0.75);
  g.lineTo(x, 0.75);
  g.stroke();
}
