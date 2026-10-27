// A hazy afternoon over the city (screen heights), seen only through the storeroom's window: a pale washed blue high
// up going warm and golden toward the roofs, where the smoke of the chimneys lies in a low brown band; the sun is
// high to the left, out of the window's reach — the sky brighter that way.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.75);
sky.addColorStop(0, '#8ea3c0');
sky.addColorStop(0.45, '#b9c2cc');
sky.addColorStop(0.72, '#e6d6b4');
sky.addColorStop(0.86, '#e9c897');
sky.addColorStop(1, '#c9a27a');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the sun's side: the sky paler and warmer up to the left
const sun = g.createRadialGradient(A * 0.3, -0.25, 0.02, A * 0.3, -0.25, 0.9);
sun.addColorStop(0, 'rgba(255,244,214,0.75)');
sun.addColorStop(1, 'rgba(255,244,214,0)');
g.fillStyle = sun;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the smoke band over the roofs, and long thin clouds drifting very slowly
const band = g.createLinearGradient(0, 0.3, 0, 0.5);
band.addColorStop(0, 'rgba(170,130,95,0)');
band.addColorStop(0.6, 'rgba(170,130,95,0.35)');
band.addColorStop(1, 'rgba(170,130,95,0.15)');
g.fillStyle = band;
g.fillRect(-0.3, 0.3, A + 0.6, 0.95);
e.layer('clouds', { drift: [0.002, 0], box: [-0.3, -0.05, A + 0.3, 0.3] }, c => {
  const W = A + 0.6;
  for (let i = 0; i < 10; i++) {
    const x = -0.3 + (i / 10) * W + e.rnd() * 0.08;
    const y = 0.02 + e.rnd() * 0.24;
    const s = c.createRadialGradient(0, 0, 0, 0, 0, 1);
    s.addColorStop(0, 'rgba(250,240,222,0.45)');
    s.addColorStop(1, 'rgba(250,240,222,0)');
    c.save();
    c.translate(x, y);
    c.scale(0.12 + e.rnd() * 0.1, 0.014 + e.rnd() * 0.01);
    c.fillStyle = s;
    c.fillRect(-1, -1, 2, 2);
    c.restore();
  }
});
