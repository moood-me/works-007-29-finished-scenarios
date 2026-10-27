// The hall's floor seen from above (x -1.0...1.0, y -0.7 far ... 0.7 at the doorway): dark-stained boards, a red
// runner along them toward the stairs, a brass threshold strip at the doorway.
g.fillStyle = '#5a3f2c';
g.fillRect(-1.0, -0.7, 2.0, 1.4);
g.strokeStyle = 'rgba(40, 26, 18, 0.6)';
g.lineWidth = 0.008;
for (let x = -1.0; x < 1.0; x += 0.12) {
  g.beginPath();
  g.moveTo(x, -0.7);
  g.lineTo(x, 0.7);
  g.stroke();
}
g.fillStyle = '#8c3a32';
g.fillRect(-0.85, -0.55, 1.4, 1.2);
g.fillStyle = '#c9a24c';
g.fillRect(0.6, -0.7, 0.04, 1.4);
g.strokeStyle = '#d2b26a';
g.lineWidth = 0.02;
g.strokeRect(-0.8, -0.5, 1.3, 1.1);
g.fillStyle = '#b9a06a';
g.fillRect(-0.45, 0.62, 0.9, 0.05);
