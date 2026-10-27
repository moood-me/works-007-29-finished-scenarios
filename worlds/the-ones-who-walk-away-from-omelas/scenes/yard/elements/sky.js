// The early-morning sky over Omelas: a clear soft blue above, warming to a pale gold low over the land where the sun
// has just come up; a few thin high clouds drift (layer `clouds`)
const W = e.aspect, x0 = -0.3, x1 = W + 0.3, y0 = -0.35, y1 = 1.25, hz = 0.4;
const sky = g.createLinearGradient(0, y0, 0, hz);
sky.addColorStop(0, '#6a98c8');
sky.addColorStop(0.5, '#9bbedc');
sky.addColorStop(0.82, '#d3e0e6');
sky.addColorStop(1, '#f4ead6');
g.fillStyle = sky;
g.fillRect(x0, y0, x1 - x0, hz - y0);
g.fillStyle = '#f4ead6';
g.fillRect(x0, hz, x1 - x0, y1 - hz);
// thin high clouds, drawn three times a box apart, so the drift wraps unseen
const span = x1 - x0;
e.layer('clouds', { drift: [0.0012, 0], box: [x0, 0.0, x1, 0.32] }, g => {
  for (let i = 0; i < 8; i++) {
    const cx = x0 + e.rnd() * span, cy = 0.04 + e.rnd() * 0.22, w = 0.14 + e.rnd() * 0.3, h = 0.005 + e.rnd() * 0.01;
    for (const dx of [-span, 0, span]) {
      g.fillStyle = '#f1e6da';
      g.beginPath();
      g.ellipse(cx + dx, cy, w, h, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#fbf6ee';
      g.beginPath();
      g.ellipse(cx + dx - w * 0.12, cy - h * 0.3, w * 0.65, h * 0.5, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
});
