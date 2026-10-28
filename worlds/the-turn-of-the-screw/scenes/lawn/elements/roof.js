// The roof, seen from above (metres: x along the house, y toward the front edge): grey slates in courses, a lead
// ridge along its far edge.
g.fillStyle = '#71717b';
g.fillRect(-18.7, -2.8, 37.4, 5.6);
for (let y = -2.6, k = 0; y < 2.8; y += 0.28, k++) {
  g.fillStyle = 'rgba(46,46,54,0.35)';
  g.fillRect(-18.7, y, 37.4, 0.03);
  for (let x = -18.7 + (k % 2) * 0.15; x < 18.7; x += 0.3) {
    if (e.rnd() < 0.25) {
      g.fillStyle = e.rnd() < 0.5 ? 'rgba(96,98,110,0.6)' : 'rgba(84,80,82,0.5)';
      g.fillRect(x, y + 0.03, 0.29, 0.25);
    }
  }
}
// lichen, yellow-grey, in patches
for (let i = 0; i < 30; i++) {
  g.fillStyle = 'rgba(170,160,110,0.35)';
  g.beginPath();
  g.ellipse(-18 + e.rnd() * 36, -2.4 + e.rnd() * 5, 0.4 + e.rnd() * 0.8, 0.2 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#5b5b62';
g.fillRect(-18.7, -2.8, 37.4, 0.25);
