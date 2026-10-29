// The office's floor just through its door: the same worn boards as the bureau's.
g.fillStyle = '#6b4f38';
g.fillRect(-0.9, -0.6, 1.8, 1.2);
g.strokeStyle = 'rgba(40,28,20,0.5)';
g.lineWidth = 0.01;
for (let x = -0.9; x < 0.9; x += 0.14) {
  g.beginPath();
  g.moveTo(x, -0.6);
  g.lineTo(x, 0.6);
  g.stroke();
}
