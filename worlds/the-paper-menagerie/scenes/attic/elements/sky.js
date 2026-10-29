// The spring afternoon outside, seen only through the little gable window: pale blue, warm toward the sun low beyond
// it, a few soft white clouds (screen heights, the horizon at 0.4).
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.5);
sky.addColorStop(0, '#8fb3dc');
sky.addColorStop(0.5, '#b9d0ea');
sky.addColorStop(0.85, '#f1e6cf');
sky.addColorStop(1, '#f8eed8');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 8; i++) {
  g.fillStyle = 'rgba(255,255,255,0.7)';
  g.beginPath();
  g.ellipse(-0.3 + e.rnd() * (A + 0.6), 0.05 + e.rnd() * 0.25, 0.08 + e.rnd() * 0.15, 0.02 + e.rnd() * 0.02, 0, 0, Math.PI * 2);
  g.fill();
}
