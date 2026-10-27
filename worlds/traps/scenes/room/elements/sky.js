// The night sky over the garden, seen only through the window: deep blue, lighter low down, clouds silvered by the
// moon that stands above the window, out of sight, and a few stars.
const W = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#0e1630');
sky.addColorStop(0.35, '#1c2a52');
sky.addColorStop(0.55, '#33467a');
sky.addColorStop(1, '#3a4c7c');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
g.fillStyle = 'rgba(176, 192, 228, 0.35)';
for (let i = 0; i < 9; i++) {
  const x = -0.2 + e.rnd() * (W + 0.4);
  const y = 0.05 + e.rnd() * 0.3;
  g.beginPath();
  g.ellipse(x, y, 0.12 + e.rnd() * 0.1, 0.018, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#e8ecf8';
for (let i = 0; i < 40; i++) {
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (W + 0.6), -0.3 + e.rnd() * 0.7, 0.0015 + e.rnd() * 0.0015, 0, Math.PI * 2);
  g.fill();
}
