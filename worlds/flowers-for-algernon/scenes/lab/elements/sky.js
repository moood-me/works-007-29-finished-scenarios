// An April sky, seen only through the window over the far building: pale clear blue going whiter toward the roofs;
// a few soft clouds (the layer `clouds`, drifting slowly). Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.7);
sky.addColorStop(0, '#8fb3d6');
sky.addColorStop(0.5, '#b4cde2');
sky.addColorStop(1, '#e6eef0');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
e.layer('clouds', { drift: [0.004, 0], box: [-0.3, -0.35, A + 0.3, 0.6] }, c => {
  const W = A + 0.6;
  for (let i = 0; i < 9; i++) {
    const x = -0.3 + (i / 9) * W + e.rnd() * 0.1;
    const y = -0.15 + e.rnd() * 0.5;
    for (let k = 0; k < 6; k++) {
      const r = 0.03 + e.rnd() * 0.05;
      for (const dx of [-W, 0, W]) {
        c.fillStyle = 'rgba(255,255,255,0.32)';
        c.beginPath();
        c.ellipse(x + dx + (k - 2.5) * 0.04, y + e.rnd() * 0.02, r * 1.8, r * 0.7, 0, 0, Math.PI * 2);
        c.fill();
      }
    }
  }
});
