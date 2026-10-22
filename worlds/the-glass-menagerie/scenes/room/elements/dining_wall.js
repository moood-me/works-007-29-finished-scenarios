// The dining room's far wall, seen only through the arch: the same paper, browner in the room's shadow, and the
// sideboard with a few plates propped along its back.
e.lib.wallpaper(g, e, -2.2, 2.2, true);
g.fillStyle = '#4c3324';
g.fillRect(-1.0, -0.95, 1.6, 0.95);
g.fillStyle = '#5d4030';
g.fillRect(-1.05, -0.98, 1.7, 0.06);
g.fillStyle = '#3c2819';
g.fillRect(-0.95, -0.85, 0.7, 0.75);
g.fillRect(-0.15, -0.85, 0.7, 0.75);
g.fillStyle = '#b8a58c';
g.fillRect(-0.62, -0.88, 0.02, 0.02);
g.fillRect(0.18, -0.88, 0.02, 0.02);
for (const x of [-0.75, -0.35, 0.05, 0.4]) {
  g.fillStyle = '#e4dccb';
  g.beginPath();
  g.ellipse(x, -1.15, 0.13, 0.15, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#6f88a8';
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(x, -1.15, 0.1, 0.12, 0, 0, Math.PI * 2);
  g.stroke();
}
