// The night sky, seen only through the little window: a deep moonlit blue, paler low down toward the moon, a scatter
// of stars.
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#0e1630');
sky.addColorStop(0.45, '#1e2c52');
sky.addColorStop(0.62, '#3a4c78');
sky.addColorStop(1, '#2a3656');
g.fillStyle = sky;
g.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
g.fillStyle = '#e8eefc';
for (let i = 0; i < 160; i++) {
  g.globalAlpha = 0.3 + e.rnd() * 0.6;
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (e.aspect + 0.6), -0.3 + e.rnd() * 0.85, 0.0012 + e.rnd() * 0.0018, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
