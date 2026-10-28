// The porch's floor of old flags, worn hollow toward the door (seen from above: x across, y toward the path).
g.fillStyle = '#a49c88';
g.fillRect(-1.5, -1.5, 3, 3);
g.strokeStyle = 'rgba(70,64,54,0.4)';
g.lineWidth = 0.02;
g.beginPath();
for (let y = -1.5; y < 1.5; y += 0.5) {
  g.moveTo(-1.5, y);
  g.lineTo(1.5, y);
  for (let x = -1.5 + e.rnd() * 0.4; x < 1.5; x += 0.45 + e.rnd() * 0.35) {
    g.moveTo(x, y);
    g.lineTo(x, y + 0.5);
  }
}
g.stroke();
