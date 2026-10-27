// The loft's front edge (metres from its top at the middle, 3.0 m up; y down): the edge beam, hay heaped along over
// it, and stalks of it hanging down over the beam (the layer `wisps`, stirring in the air of the barn).
g.fillStyle = '#4f3f2f';
g.fillRect(-4.95, 0, 9.9, 0.28);
g.fillStyle = '#3e3125';
g.fillRect(-4.95, 0.24, 9.9, 0.04);
g.fillStyle = '#b8984f';
g.beginPath();
g.moveTo(-4.95, 0.02);
for (let x = -4.95; x <= 4.95; x += 0.18) g.lineTo(x, -0.12 - 0.22 * (0.5 + 0.5 * Math.sin(x * 1.7)) * e.rnd());
g.lineTo(4.95, 0.02);
g.closePath();
g.fill();
e.layer('wisps', { pivot: [0, 0.05], wind: { strength: 0.15, gust: 0.5 } }, g => {
  g.lineWidth = 0.008;
  // in tufts where the hay over the beam is heaped most, a few long stalks, many short ones
  for (let t = 0; t < 22; t++) {
    const cx = -4.8 + e.rnd() * 9.6, n = 3 + Math.floor(e.rnd() * 7);
    for (let i = 0; i < n; i++) {
      const x = cx + (e.rnd() - 0.5) * 0.25, l = 0.05 + e.rnd() * e.rnd() * 0.3;
      g.strokeStyle = ['#c4a45e', '#a98c4c', '#d6bb76'][Math.floor(e.rnd() * 3)];
      g.beginPath();
      g.moveTo(x, 0.02);
      g.quadraticCurveTo(x + (e.rnd() - 0.5) * 0.1, 0.02 + l * 0.5, x + (e.rnd() - 0.5) * 0.16, 0.02 + l);
      g.stroke();
    }
  }
});
