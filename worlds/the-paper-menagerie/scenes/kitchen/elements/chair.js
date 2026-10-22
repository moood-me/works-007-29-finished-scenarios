// A wooden kitchen chair pushed in at the table's far end, seen side-on: seat, the back's spindles, splayed legs.
g.fillStyle = '#8a6648';
g.fillRect(-0.21, -0.47, 0.42, 0.04);
for (const x of [-0.18, 0.15]) {
  g.beginPath();
  g.moveTo(x, -0.45);
  g.lineTo(x + 0.03, -0.45);
  g.lineTo(x + 0.035 + (x > 0 ? 0.02 : -0.02), 0);
  g.lineTo(x - 0.005 + (x > 0 ? 0.02 : -0.02), 0);
  g.closePath();
  g.fill();
}
g.fillRect(0.16, -0.95, 0.04, 0.5);
g.fillStyle = '#7a583c';
g.fillRect(0.15, -0.95, 0.06, 0.08);
g.fillRect(-0.15, -0.2, 0.3, 0.02);
