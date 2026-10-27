// The bed from above (metres; its middle 0.5 m over the floor; the head on the left): the grey blanket pulled straight,
// its stripes, the turned-down sheet and the pillow at the head.
g.fillStyle = '#6e6b64';
g.fillRect(-0.95, -0.42, 1.9, 0.84);
g.fillStyle = '#e0dbd0';
g.fillRect(-0.95, -0.42, 0.45, 0.84);
g.fillStyle = '#e8e3d8';
g.beginPath();
g.ellipse(-0.75, 0, 0.16, 0.34, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#4a4844';
g.fillRect(0.7, -0.42, 0.03, 0.84);
g.fillRect(0.76, -0.42, 0.015, 0.84);
for (let i = 0; i < 6; i++) {
  g.fillStyle = 'rgba(40,38,34,0.2)';
  g.fillRect(-0.45 + e.rnd() * 1.3, -0.4 + e.rnd() * 0.8, 0.3 + e.rnd() * 0.3, 0.015);
}
