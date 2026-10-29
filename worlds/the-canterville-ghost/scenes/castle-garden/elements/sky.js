// The sky over the garden. By day (the painting): a clear fresh morning — blue overhead, paling to a warm haze low
// down over the woods, a few soft fair-weather clouds. By night (layers the animate brings in by the key `night`):
// deep blue going black overhead, small stars, the moon high on the right with its halo (`sky#disc`), and the dark
// clouds about it that it comes out from behind (key `clouds`).
const X0 = -0.3;
const W = e.aspect + 0.6;
const day = g.createLinearGradient(0, -0.35, 0, 1.25);
day.addColorStop(0, '#5f8fc2');
day.addColorStop(0.28, '#86aed6');
day.addColorStop(0.45, '#bcd2e2');
day.addColorStop(0.53, '#e8e4d4');
day.addColorStop(1, '#ddd6c2');
g.fillStyle = day;
g.fillRect(X0, -0.35, W, 1.6);
// fair-weather clouds: soft white heaps with a grey-blue underside, drifting low over the woods
for (const [cx, cy, w] of [[0.18, 0.2, 0.34], [0.62, 0.12, 0.26], [1.12, 0.26, 0.4], [1.5, 0.16, 0.28], [0.02, 0.32, 0.26]]) {
  const x = cx * e.aspect / 1.78;
  for (let i = 0; i < 9; i++) {
    const px = x + (e.rnd() - 0.5) * w;
    const py = cy + (e.rnd() - 0.5) * 0.04;
    const r = w * (0.12 + e.rnd() * 0.12);
    const puff = g.createRadialGradient(px, py - r * 0.2, 0, px, py, r);
    puff.addColorStop(0, 'rgba(255,255,252,0.85)');
    puff.addColorStop(0.6, 'rgba(236,240,246,0.55)');
    puff.addColorStop(1, 'rgba(200,214,232,0)');
    g.fillStyle = puff;
    g.fillRect(px - r, py - r, r * 2, r * 2);
  }
}
const mx = e.aspect * 0.8;
const my = 0.15;
// the night: deep blue going black overhead, paler low over the woods, a scatter of small stars
e.layer('night', {}, c => {
  const sky = c.createLinearGradient(0, -0.35, 0, 1.25);
  sky.addColorStop(0, '#05080f');
  sky.addColorStop(0.3, '#0e1729');
  sky.addColorStop(0.48, '#22304e');
  sky.addColorStop(0.58, '#384a70');
  sky.addColorStop(1, '#2c3a5a');
  c.fillStyle = sky;
  c.fillRect(X0, -0.35, W, 1.6);
  for (let i = 0; i < 260; i++) {
    const x = X0 + 0.02 + e.rnd() * (W - 0.04);
    const y = -0.35 + e.rnd() * 0.85;
    const near = Math.hypot(x - mx, y - my);
    const a = Math.min(1, near / 0.45) * (1 - Math.max(0, (y - 0.3) / 0.25)) * (0.35 + e.rnd() * 0.65);
    if (a <= 0.02) continue;
    c.fillStyle = `rgba(226,234,255,${a.toFixed(3)})`;
    c.beginPath();
    c.arc(x, y, 0.0012 + e.rnd() * 0.0022, 0, Math.PI * 2);
    c.fill();
  }
});
// the moon: a wide pale halo, the cold white disc with its faint grey seas
e.layer('moon', {}, c => {
  const halo = c.createRadialGradient(mx, my, 0, mx, my, 0.4);
  halo.addColorStop(0, 'rgba(200,214,240,0.5)');
  halo.addColorStop(0.18, 'rgba(150,170,210,0.22)');
  halo.addColorStop(1, 'rgba(90,110,160,0)');
  c.fillStyle = halo;
  c.fillRect(mx - 0.42, my - 0.42, 0.84, 0.84);
  const R = 0.055;
  const disc = c.createRadialGradient(mx - R * 0.25, my - R * 0.25, 0, mx, my, R);
  disc.addColorStop(0, '#fbfcff');
  disc.addColorStop(0.8, '#e6ecf6');
  disc.addColorStop(1, '#cdd6e6');
  c.fillStyle = disc;
  c.beginPath();
  c.arc(mx, my, R, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = 'rgba(160,172,196,0.16)';
  for (const [dx, dy, r] of [[-0.016, -0.011, 0.014], [0.011, 0.009, 0.02], [0.021, -0.018, 0.009], [-0.007, 0.023, 0.011]]) {
    c.beginPath();
    c.arc(mx + dx, my + dy, r, 0, Math.PI * 2);
    c.fill();
  }
  e.light(mx, my, R * 2.2, '#dfe8ff', 0.8, 'glow');
  e.at(mx, my, 'disc');
});
// the clouds the moon comes out from behind: dark heavy banks over it, their edges silvered
e.layer('clouds', {}, c => {
  for (let i = 0; i < 26; i++) {
    const px = mx + (e.rnd() - 0.5) * 0.7;
    const py = my + (e.rnd() - 0.5) * 0.16;
    const r = 0.05 + e.rnd() * 0.07;
    const bank = c.createRadialGradient(px, py, 0, px, py, r);
    bank.addColorStop(0, 'rgba(40,50,76,0.95)');
    bank.addColorStop(0.75, 'rgba(56,68,100,0.85)');
    bank.addColorStop(0.92, 'rgba(120,136,176,0.5)');
    bank.addColorStop(1, 'rgba(60,72,104,0)');
    c.fillStyle = bank;
    c.fillRect(px - r, py - r, r * 2, r * 2);
  }
});
