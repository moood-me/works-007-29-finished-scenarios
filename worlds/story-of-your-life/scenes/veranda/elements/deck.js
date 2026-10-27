// The deck seen from above (metres, y toward the viewer; x −3.9…3.9, from the house at y −1.9 to the front edge at
// 1.9): weathered cedar boards running out from the house, the gaps between them, the nail lines over the joists,
// darker and worn where people walk out of the door.
g.fillStyle = '#9c7d5c';
g.fillRect(-3.9, -1.9, 7.8, 3.8);
for (let x = -3.9, k = 0; x < 3.9; x += 0.14, k++) {
  g.fillStyle = k % 3 ? 'rgba(120,92,64,0.25)' : 'rgba(176,148,112,0.25)';
  g.fillRect(x, -1.9, 0.13, 3.8);
  g.fillStyle = 'rgba(52,38,28,0.6)';
  g.fillRect(x + 0.13, -1.9, 0.012, 3.8);
}
g.fillStyle = 'rgba(52,38,28,0.35)';
for (let y = -1.5; y < 1.9; y += 0.4) {
  for (let x = -3.85; x < 3.9; x += 0.14) g.fillRect(x, y, 0.012, 0.012);
}
g.fillStyle = 'rgba(80,60,42,0.22)';
g.beginPath();
g.ellipse(2.05, -1.2, 0.7, 0.6, 0, 0, Math.PI * 2);
g.fill();
