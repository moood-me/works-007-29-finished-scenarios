// The July evening sky to the east, the sun low behind the viewer: blue above, a rose belt over the hills, a few
// small clouds lit gold on the side toward the sun — they drift slowly (layer clouds).
const W = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#5b82b6');
sky.addColorStop(0.25, '#86a8cf');
sky.addColorStop(0.42, '#c4c4d2');
sky.addColorStop(0.5, '#efcab8');
sky.addColorStop(0.56, '#f3d2b4');
sky.addColorStop(1, '#e3c0a6');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
e.layer('clouds', { drift: [0.0025, 0], box: [-0.3, -0.2, W + 0.3, 0.42] }, c => {
  const puffs = [
    [0.18, 0.16, 0.16],
    [0.62, 0.08, 0.2],
    [1.05, 0.22, 0.13],
    [1.42, 0.12, 0.18],
  ];
  for (const [x0, y0, s] of puffs) {
    for (let i = 0; i < 9; i++) {
      const x = x0 + (e.rnd() - 0.5) * s * 1.6;
      const y = y0 + (e.rnd() - 0.4) * s * 0.25;
      const r = s * (0.18 + e.rnd() * 0.22);
      c.fillStyle = '#d9b9bf';
      c.beginPath();
      c.ellipse(x, y + r * 0.18, r * 1.3, r * 0.55, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#f7dcc2';
      c.beginPath();
      c.ellipse(x - r * 0.15, y, r * 1.1, r * 0.45, 0, 0, Math.PI * 2);
      c.fill();
    }
  }
});
