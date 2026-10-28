// The lace curtains just inside the glass, drawn back to either side: a scalloped hem, a mesh of little holes,
// gathered toward the casing — thin, the room's lamp through them.
for (const s of [-1, 1]) {
  g.save();
  g.scale(s, 1);
  g.fillStyle = 'rgba(240,232,216,0.66)';
  g.beginPath();
  g.moveTo(-0.56, -1.5);
  g.lineTo(-0.32, -1.5);
  g.bezierCurveTo(-0.34, -1.0, -0.38, -0.5, -0.36, -0.06);
  for (let x = -0.36; x > -0.56; x -= 0.04) g.quadraticCurveTo(x - 0.02, 0.0, x - 0.04, -0.06);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(200,188,170,0.35)';
  for (let y = -1.45; y < -0.1; y += 0.06) {
    for (let x = -0.53; x < -0.36; x += 0.05) {
      g.beginPath();
      g.arc(x + (Math.round(y * 100) % 2) * 0.012, y, 0.01, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = 'rgba(170,156,136,0.4)';
  for (let x = -0.52; x < -0.35; x += 0.06) g.fillRect(x, -1.5, 0.008, 1.42);
  g.restore();
}
