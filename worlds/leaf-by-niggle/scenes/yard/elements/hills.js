// The low hills beyond the field (700 m off): long swells, blue-grey under the storm's shadow to the left, greener
// toward the sun; dark copses along their folds.
const swell = (y0, amp, fill, seed) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(-1800, 1);
  for (let x = -1800; x <= 1800; x += 30) {
    const y = y0 + Math.sin(x * 0.003 + seed) * amp + Math.sin(x * 0.008 + seed * 2) * amp * 0.4;
    g.lineTo(x, -y);
  }
  g.lineTo(1800, 1);
  g.closePath();
  g.fill();
};
swell(58, 16, '#8796a0', 0.7);
swell(36, 12, '#8a9a88', 2.1);
for (let i = 0; i < 50; i++) {
  const x = -1800 + e.rnd() * 3600;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(84,98,92,0.55)' : 'rgba(98,112,98,0.5)';
  g.beginPath();
  g.ellipse(x, -(10 + e.rnd() * 30), 20 + e.rnd() * 40, 5 + e.rnd() * 6, 0, 0, Math.PI * 2);
  g.fill();
}
swell(14, 6, '#98a07a', 3.3);
