// The autumn sky of a late afternoon (stage heights; the horizon at 0.4): pale gold low down, warming toward dusk,
// clearing upward into a soft grey-blue; long thin clouds drifting.
const d = e.state.dusk ?? 0;
const mix = (a, b) => a.map((v, i) => Math.round(v + (b[i] - v) * d));
const rgb = c => `rgb(${c[0]},${c[1]},${c[2]})`;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, rgb(mix([150, 168, 190], [96, 102, 140])));
sky.addColorStop(0.45, rgb(mix([196, 204, 210], [176, 150, 160])));
sky.addColorStop(0.68, rgb(mix([240, 222, 180], [236, 170, 120])));
sky.addColorStop(1, rgb(mix([236, 214, 170], [214, 150, 110])));
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, e.aspect + 0.6, 1.6);
e.layer('clouds', { drift: [0.004, 0], box: [-0.3, 0.05, e.aspect + 0.3, 0.42] }, l => {
  for (let i = 0; i < 9; i++) {
    const x = -0.3 + e.rnd() * (e.aspect + 0.6);
    const y = 0.12 + e.rnd() * 0.24;
    const w = 0.15 + e.rnd() * 0.3;
    l.fillStyle = d > 0.5 ? 'rgba(220,160,140,0.35)' : 'rgba(250,240,225,0.4)';
    l.beginPath();
    l.ellipse(x, y, w, 0.012 + e.rnd() * 0.015, 0, 0, Math.PI * 2);
    l.fill();
  }
});
