// The deck seen from above (metres, y toward the viewer; x −3.0…3.0, from the house at y −2.1 to the front edge at
// 2.1): weathered cedar boards running out from the house, the gaps between them, the nail lines over the joists,
// darker and worn where people walk out of the door.
g.fillStyle = '#9c7d5c';
g.fillRect(-3.0, -2.1, 6.0, 4.2);
for (let x = -3.0, k = 0; x < 3.0; x += 0.14, k++) {
  g.fillStyle = k % 3 ? 'rgba(120,92,64,0.25)' : 'rgba(176,148,112,0.25)';
  g.fillRect(x, -2.1, 0.13, 4.2);
  g.fillStyle = 'rgba(52,38,28,0.6)';
  g.fillRect(x + 0.13, -2.1, 0.012, 4.2);
}
g.fillStyle = 'rgba(52,38,28,0.35)';
for (let y = -1.7; y < 2.1; y += 0.4) {
  for (let x = -2.95; x < 3.0; x += 0.14) g.fillRect(x, y, 0.012, 0.012);
}
g.fillStyle = 'rgba(80,60,42,0.22)';
g.beginPath();
g.ellipse(2.15, -1.4, 0.6, 0.6, 0, 0, Math.PI * 2);
g.fill();
