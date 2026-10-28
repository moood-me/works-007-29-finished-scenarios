// The October rain sky: low, pearl-grey, a little lighter toward the east where the dawn is behind the clouds, and
// darker bands of rain cloud drifting over (a layer). Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#8e979c');
sky.addColorStop(0.6, '#b4bbbb');
sky.addColorStop(1, '#cfd0c8');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
e.layer('clouds', { drift: [0.004, 0], box: [-0.3, -0.35, A + 0.3, 0.6] }, c => {
  for (let i = 0; i < 26; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6);
    const y = -0.3 + e.rnd() * 0.8;
    const r = 0.15 + e.rnd() * 0.3;
    const gr = c.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(110,118,124,0.35)');
    gr.addColorStop(1, 'rgba(110,118,124,0)');
    c.fillStyle = gr;
    c.beginPath();
    c.ellipse(x, y, r * 2.2, r * 0.5, 0, 0, Math.PI * 2);
    c.fill();
  }
});
