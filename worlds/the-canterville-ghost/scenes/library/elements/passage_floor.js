// The passage's floor beyond the doors, from above: the same old oak boards, a strip of runner.
g.fillStyle = '#3a281a';
g.fillRect(-0.95, -1.4, 1.9, 2.8);
g.strokeStyle = '#2a1c12';
g.lineWidth = 0.012;
for (let x = -0.95; x < 0.95; x += 0.22) {
  g.beginPath();
  g.moveTo(x, -1.4);
  g.lineTo(x, 1.4);
  g.stroke();
}
g.fillStyle = '#4e1e1a';
g.fillRect(-0.35, -1.4, 0.7, 2.8);
