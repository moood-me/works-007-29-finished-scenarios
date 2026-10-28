// The autumn dusk, seen only through the window: deep blue above going violet, then rose and a pale peach low over the
// town; long thin clouds lit pink from below, the first star. Screen heights (the horizon at 0.36).
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.42);
sky.addColorStop(0, '#26305e');
sky.addColorStop(0.35, '#465290');
sky.addColorStop(0.6, '#8a7fb2');
sky.addColorStop(0.82, '#d99aa6');
sky.addColorStop(1, '#efc3a0');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 10; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = 0.1 + e.rnd() * 0.2,
    w = 0.1 + e.rnd() * 0.28;
  g.fillStyle = i % 2 ? 'rgba(232,170,178,0.5)' : 'rgba(196,150,180,0.42)';
  g.beginPath();
  g.ellipse(x, y, w, 0.005 + e.rnd() * 0.008, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(255,248,232,0.9)';
g.beginPath();
g.arc(A * 0.3, 0.05, 0.0022, 0, Math.PI * 2);
g.fill();
