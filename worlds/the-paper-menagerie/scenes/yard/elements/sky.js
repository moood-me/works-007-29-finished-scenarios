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
