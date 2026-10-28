// The evening sky to the east, over the Gabilan mountains: blue above, a rose band low, warm at the horizon — the sun
// is behind the viewer, going down. A few long thin clouds drift (layer `clouds`); the dusk after the sun is down is a
// layer of its own over it all, shown as `dusk` grows (its animate).
const W = e.aspect, x0 = -0.3, x1 = W + 0.3, y0 = -0.35, y1 = 1.25, hz = 0.42;
const sky = g.createLinearGradient(0, y0, 0, hz);
sky.addColorStop(0, '#5a6c9e');
sky.addColorStop(0.42, '#8796bf');
sky.addColorStop(0.72, '#c7a6b8');
sky.addColorStop(0.9, '#ebc2aa');
sky.addColorStop(1, '#f2d4b6');
g.fillStyle = sky;
g.fillRect(x0, y0, x1 - x0, hz - y0);
g.fillStyle = '#f2d4b6';
g.fillRect(x0, hz, x1 - x0, y1 - hz);
// long thin clouds, their undersides warm: drawn twice a box apart, so the drift wraps unseen
const span = x1 - x0;
e.layer('clouds', { drift: [0.0015, 0], box: [x0, 0.02, x1, 0.36] }, g => {
  for (let i = 0; i < 9; i++) {
    const cx = x0 + e.rnd() * span, cy = 0.08 + e.rnd() * 0.24, w = 0.18 + e.rnd() * 0.35, h = 0.006 + e.rnd() * 0.012;
    for (const dx of [-span, 0, span]) {
      g.fillStyle = '#e9b9a6';
      g.beginPath();
      g.ellipse(cx + dx, cy, w, h, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#f6d9c6';
      g.beginPath();
      g.ellipse(cx + dx - w * 0.1, cy - h * 0.35, w * 0.7, h * 0.55, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
});
// the dusk: the blue hour after the sun is down — deep blue above, violet at the horizon
e.layer('dusk', {}, g => {
  const d = g.createLinearGradient(0, y0, 0, hz);
  d.addColorStop(0, '#1f2a4a');
  d.addColorStop(0.6, '#3b4670');
  d.addColorStop(1, '#7a6d8e');
  g.fillStyle = d;
  g.fillRect(x0, y0, x1 - x0, hz - y0);
  g.fillStyle = '#7a6d8e';
  g.fillRect(x0, hz, x1 - x0, y1 - hz);
});
