// The far green hills between the meadow and the Mountains (1.4 km off): soft long swells in blue-greens, woods
// dark along their folds.
const swell = (y0, amp, fill, seed) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(-2600, 1);
  for (let x = -2600; x <= 2600; x += 40) {
    const y = y0 + Math.sin(x * 0.0021 + seed) * amp + Math.sin(x * 0.0057 + seed * 2) * amp * 0.4;
    g.lineTo(x, -y);
  }
  g.lineTo(2600, 1);
  g.closePath();
  g.fill();
};
swell(110, 34, '#93a9a0', 1.3);
swell(70, 26, '#86a08a', 0.2);
// woods along the folds: dark soft rounds
for (let i = 0; i < 70; i++) {
  const x = -2600 + e.rnd() * 5200;
  const y = -(18 + e.rnd() * 50);
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(92,116,100,0.6)' : 'rgba(104,128,108,0.55)';
  g.beginPath();
  g.ellipse(x, y, 30 + e.rnd() * 60, 8 + e.rnd() * 10, 0, 0, Math.PI * 2);
  g.fill();
}
swell(30, 12, '#8eaa7e', 2.4);
