// The rain sky at midday: low, even, pearl-grey, a little lighter downriver, darker bands of rain cloud drifting over
// (a layer). Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#8f989d');
sky.addColorStop(0.55, '#b7bebe');
sky.addColorStop(1, '#d2d4cc');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const bright = g.createRadialGradient(A * 0.8, 0.45, 0.05, A * 0.8, 0.45, 0.9);
bright.addColorStop(0, 'rgba(228,230,222,0.45)');
bright.addColorStop(1, 'rgba(228,230,222,0)');
g.fillStyle = bright;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
e.layer('clouds', { drift: [0.004, 0], box: [-0.3, -0.35, A + 0.3, 0.55] }, c => {
  const W = A + 0.6;
  for (let i = 0; i < 28; i++) {
    const x = -0.3 + e.rnd() * W;
    const y = -0.3 + e.rnd() * 0.75;
    const r = 0.15 + e.rnd() * 0.3;
    for (const dx of [-W, 0, W]) {
      const gr = c.createRadialGradient(x + dx, y, 0, x + dx, y, r);
      gr.addColorStop(0, 'rgba(104,112,118,0.35)');
      gr.addColorStop(1, 'rgba(104,112,118,0)');
      c.fillStyle = gr;
      c.beginPath();
      c.ellipse(x + dx, y, r * 2.2, r * 0.5, 0, 0, Math.PI * 2);
      c.fill();
    }
  }
});
