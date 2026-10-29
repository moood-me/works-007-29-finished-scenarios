// A spring afternoon over the square: a clear soft blue going milky and warm toward the roofs, a few fair-weather
// clouds drifting slowly to the right (a layer). Screen heights (the horizon at 0.42).
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.46);
sky.addColorStop(0, '#86aede');
sky.addColorStop(0.45, '#aac6e6');
sky.addColorStop(0.8, '#dbe4ec');
sky.addColorStop(1, '#f2e8d6');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
e.layer('clouds', { drift: [0.003, 0], box: [-0.3, -0.35, A + 0.3, 0.4] }, l => {
  const w = A + 0.6;
  for (let i = 0; i < 8; i++) {
    const x = -0.3 + (i / 8) * w + e.rnd() * 0.12,
      y = -0.22 + e.rnd() * 0.4;
    for (let k = 0; k < 8; k++) {
      l.fillStyle = k < 6 ? 'rgba(255,253,248,0.6)' : 'rgba(212,222,238,0.45)';
      l.beginPath();
      l.ellipse(x + (k - 3.5) * 0.034 + e.rnd() * 0.02, y - (k < 6 ? e.rnd() * 0.03 : -0.012), 0.045 + e.rnd() * 0.03, 0.016 + e.rnd() * 0.012, 0, 0, Math.PI * 2);
      l.fill();
    }
  }
});
