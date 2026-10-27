// The night over the city (screen heights): deep blue overhead going violet and warmer down toward the roofs (the
// city's glow), a few faint stars, and the moon — nearly full, pale — low in the gap past the building's corner,
// a thin band of cloud drifting under it. Its point `disc`: the moon's light comes from it.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#0f1630');
sky.addColorStop(0.5, '#1f2a55');
sky.addColorStop(0.82, '#3c4278');
sky.addColorStop(1, '#5e4f7e');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 80; i++) {
  g.fillStyle = `rgba(230,232,255,${0.2 + e.rnd() * 0.5})`;
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (A + 0.6), -0.3 + e.rnd() * 0.65, 0.0008 + e.rnd() * 0.0012, 0, Math.PI * 2);
  g.fill();
}
// the moon: a soft halo, the disc, its grey seas
const mx = 0.34;
const my = 0.15;
const halo = g.createRadialGradient(mx, my, 0.02, mx, my, 0.16);
halo.addColorStop(0, 'rgba(200,210,255,0.35)');
halo.addColorStop(1, 'rgba(200,210,255,0)');
g.fillStyle = halo;
g.fillRect(mx - 0.16, my - 0.16, 0.32, 0.32);
g.fillStyle = '#f1eedf';
g.beginPath();
g.arc(mx, my, 0.028, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,160,170,0.35)';
for (const [dx, dy, r] of [[-0.008, -0.006, 0.009], [0.009, 0.004, 0.007], [-0.002, 0.012, 0.005]]) {
  g.beginPath();
  g.arc(mx + dx, my + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.light(mx, my, 0.04, '#e9ecff', 0.5, 'disc');
e.at(mx, my, 'disc');
// a long thin band of cloud a little under the moon, drifting slowly to the right (its ends meet)
e.layer('cloud', { drift: [0.003, 0], box: [-0.3, 0.12, A + 0.3, 0.26] }, c => {
  const W = A + 0.6;
  for (let i = 0; i < 9; i++) {
    const x = -0.3 + (i / 9) * W;
    const band = c.createRadialGradient(0, 0, 0, 0, 0, 1);
    band.addColorStop(0, 'rgba(120,124,170,0.32)');
    band.addColorStop(1, 'rgba(120,124,170,0)');
    c.save();
    c.translate(x + e.rnd() * 0.1, 0.19 + e.rnd() * 0.03);
    c.scale(0.16 + e.rnd() * 0.1, 0.012 + e.rnd() * 0.008);
    c.fillStyle = band;
    c.fillRect(-1, -1, 2, 2);
    c.restore();
  }
});
