// The sky of that country (stage heights; the horizon at 0.58): clear and pale, the warm off-white of the canvas's
// ground low down, a soft grey-blue above; toward `glow` the low sky goes gold and rose. A few long thin clouds drift.
const k = e.state.glow ?? 0;
const mix = (a, b) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
const rgb = c => `rgb(${c[0]},${c[1]},${c[2]})`;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, rgb(mix([146, 172, 194], [128, 132, 170])));
sky.addColorStop(0.35, rgb(mix([186, 204, 214], [196, 176, 186])));
sky.addColorStop(0.56, rgb(mix([234, 230, 212], [244, 206, 168])));
sky.addColorStop(1, rgb(mix([226, 228, 214], [236, 200, 170])));
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, e.aspect + 0.6, 1.6);
e.layer('clouds', { drift: [0.003, 0], box: [-0.3, 0.02, e.aspect + 0.3, 0.42] }, l => {
  for (let i = 0; i < 8; i++) {
    const x = -0.3 + e.rnd() * (e.aspect + 0.6);
    const y = 0.08 + e.rnd() * 0.26;
    const w = 0.14 + e.rnd() * 0.28;
    l.fillStyle = k > 0.5 ? 'rgba(250,214,196,0.4)' : 'rgba(252,250,244,0.45)';
    for (let j = 0; j < 3; j++) {
      l.beginPath();
      l.ellipse(x + (j - 1) * w * 0.4, y + (e.rnd() - 0.5) * 0.01, w * (0.5 + e.rnd() * 0.3), 0.01 + e.rnd() * 0.012, 0, 0, Math.PI * 2);
      l.fill();
    }
  }
});
