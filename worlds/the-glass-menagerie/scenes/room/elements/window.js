// The window onto the fire escape: a cream-painted double-hung sash, two panes over two, the glass itself clear (the
// alley's night beyond), and thin lace curtains drawn to either side.
g.fillStyle = '#ddd0b9';
g.fillRect(-0.55, -1.5, 1.1, 0.06);
g.fillRect(-0.55, -0.05, 1.1, 0.05);
g.fillRect(-0.55, -1.5, 0.06, 1.5);
g.fillRect(0.49, -1.5, 0.06, 1.5);
g.fillRect(-0.55, -0.79, 1.1, 0.07);
g.fillRect(-0.02, -1.5, 0.04, 1.5);
// the lace: a scalloped hem, a mesh of little holes, gathered toward the casing
for (const s of [-1, 1]) {
  g.save();
  g.scale(s, 1);
  g.fillStyle = 'rgba(240,232,216,0.62)';
  g.beginPath();
  g.moveTo(-0.56, -1.5);
  g.lineTo(-0.3, -1.5);
  g.bezierCurveTo(-0.32, -1.0, -0.36, -0.5, -0.34, -0.06);
  for (let x = -0.34; x > -0.56; x -= 0.044) g.quadraticCurveTo(x - 0.022, 0.0, x - 0.044, -0.06);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(200,188,170,0.35)';
  for (let y = -1.45; y < -0.1; y += 0.06) {
    for (let x = -0.53; x < -0.33; x += 0.05) {
      g.beginPath();
      g.arc(x + ((y * 100) % 2) * 0.012, y, 0.01, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = 'rgba(170,156,136,0.4)';
  for (let x = -0.52; x < -0.32; x += 0.06) g.fillRect(x, -1.5, 0.008, 1.42);
  g.restore();
}
e.at(0, -0.75, 'window');
