// The summer morning sky over Omelas, looking out to sea: clear blue above, paler and warmer down to the horizon; a
// few thin high clouds drift (layer `clouds`). The festival evening is a layer of its own over it all — deep blue
// above, the afterglow low over the sea — shown as `evening` grows (its animate).
const W = e.aspect, x0 = -0.3, x1 = W + 0.3, y0 = -0.35, y1 = 1.25, hz = 0.42;
const sky = g.createLinearGradient(0, y0, 0, hz);
sky.addColorStop(0, '#5f8fc4');
sky.addColorStop(0.45, '#8db3d8');
sky.addColorStop(0.8, '#c4d9e8');
sky.addColorStop(1, '#eef0ea');
g.fillStyle = sky;
g.fillRect(x0, y0, x1 - x0, hz - y0);
g.fillStyle = '#eef0ea';
g.fillRect(x0, hz, x1 - x0, y1 - hz);
// thin high clouds, drawn three times a box apart, so the drift wraps unseen
const span = x1 - x0;
e.layer('clouds', { drift: [0.0012, 0], box: [x0, 0.0, x1, 0.32] }, g => {
  for (let i = 0; i < 8; i++) {
    const cx = x0 + e.rnd() * span, cy = 0.05 + e.rnd() * 0.22, w = 0.14 + e.rnd() * 0.3, h = 0.005 + e.rnd() * 0.01;
    for (const dx of [-span, 0, span]) {
      g.fillStyle = '#e6eef5';
      g.beginPath();
      g.ellipse(cx + dx, cy, w, h, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#f7f9fa';
      g.beginPath();
      g.ellipse(cx + dx - w * 0.12, cy - h * 0.3, w * 0.65, h * 0.5, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
});
// the festival evening: deep blue above, rose and amber low over the sea
e.layer('evening', {}, g => {
  const d = g.createLinearGradient(0, y0, 0, hz);
  d.addColorStop(0, '#1d2a4e');
  d.addColorStop(0.55, '#3e4f80');
  d.addColorStop(0.85, '#b08399');
  d.addColorStop(1, '#efb98a');
  g.fillStyle = d;
  g.fillRect(x0, y0, x1 - x0, hz - y0);
  g.fillStyle = '#efb98a';
  g.fillRect(x0, hz, x1 - x0, y1 - hz);
});
