// The spring morning, seen over the roof and the trees: a clear pale blue going warm and milky toward the rooftops,
// a few soft fair-weather clouds drifting slowly to the right (a layer). Screen heights (the horizon at 0.46).
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.5);
sky.addColorStop(0, '#8fb3dc');
sky.addColorStop(0.45, '#b4cce6');
sky.addColorStop(0.8, '#dfe6ea');
sky.addColorStop(1, '#f3ead8');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
e.layer('clouds', { drift: [0.004, 0], box: [-0.3, -0.35, A + 0.3, 0.45] }, l => {
  const w = A + 0.6;
  for (let i = 0; i < 9; i++) {
    const x = -0.3 + (i / 9) * w + e.rnd() * 0.1,
      y = -0.2 + e.rnd() * 0.42;
    for (let k = 0; k < 7; k++) {
      l.fillStyle = k < 5 ? 'rgba(255,253,248,0.55)' : 'rgba(214,222,236,0.45)';
      l.beginPath();
      l.ellipse(x + (k - 3) * 0.035 + e.rnd() * 0.02, y - (k < 5 ? e.rnd() * 0.03 : -0.012), 0.045 + e.rnd() * 0.03, 0.016 + e.rnd() * 0.012, 0, 0, Math.PI * 2);
      l.fill();
    }
  }
});
// The spring dusk over the same roofs (1.4, and a year on, 3.4–3.6): deep blue above going lavender, then pink and
// peach low over the trees, a few long pink clouds, the first star — a layer over the morning that animate fades in
// by `dusk`, the morning's clouds fading out under it.
e.layer('dusk', {}, l => {
  const d = l.createLinearGradient(0, -0.35, 0, 0.5);
  d.addColorStop(0, '#3e4a86');
  d.addColorStop(0.35, '#6467a6');
  d.addColorStop(0.62, '#ad90bc');
  d.addColorStop(0.84, '#eaaaa8');
  d.addColorStop(1, '#f6cf9f');
  l.fillStyle = d;
  l.fillRect(-0.3, -0.35, A + 0.6, 1.6);
  for (let i = 0; i < 9; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6),
      y = 0.08 + e.rnd() * 0.24,
      w = 0.12 + e.rnd() * 0.3;
    l.fillStyle = i % 2 ? 'rgba(246,186,176,0.55)' : 'rgba(226,160,170,0.45)';
    l.beginPath();
    l.ellipse(x, y, w, 0.006 + e.rnd() * 0.008, 0, 0, Math.PI * 2);
    l.fill();
  }
  l.fillStyle = 'rgba(255,248,230,0.9)';
  l.beginPath();
  l.arc(A * 0.62, -0.02, 0.0022, 0, Math.PI * 2);
  l.fill();
});
