// The sky at dusk over the plateau, seen only through the windows: deep blue overhead going to a cold violet, and low
// along the hill's crest the last warm light, peach fading into grey; a few thin bands of cloud catching it, drifting.
// Screen heights; the horizon at 0.4.
const A = e.aspect;
const H = 0.4;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#1e2c52');
sky.addColorStop(0.4, '#36487a');
sky.addColorStop(0.7, '#7a7fa6');
sky.addColorStop(0.88, '#c9a9a6');
sky.addColorStop(1, '#ecc6a6');
g.fillStyle = sky;
g.fillRect(X0, Y0, W, 1.25 - Y0);
e.layer('bands', { drift: [0.0015, 0], box: [X0, Y0, A + 0.3, H] }, c => {
  for (let i = 0; i < 9; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.12 + e.rnd() * 0.22;
    const w = 0.2 + e.rnd() * 0.35;
    const h = 0.005 + e.rnd() * 0.01;
    for (const k of [-W, 0, W]) {
      c.save();
      c.translate(x + k, y);
      c.scale(w, h);
      const r = c.createRadialGradient(0, 0, 0, 0, 0, 1);
      r.addColorStop(0, 'rgba(214,160,150,0.55)');
      r.addColorStop(1, 'rgba(150,130,160,0)');
      c.fillStyle = r;
      c.beginPath();
      c.arc(0, 0, 1, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
  }
});
