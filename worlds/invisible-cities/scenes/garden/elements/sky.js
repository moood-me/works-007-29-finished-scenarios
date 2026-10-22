// The night sky over the water: deep blue at the top, paler toward the horizon, a breath of light about the moon,
// a few long thin clouds; the stars a layer of their own (the shader makes them twinkle), the moon a layer with its
// glow — the point `sky#disc` the moonlight comes from and its path on the water is drawn from.
const A = e.aspect;
const H = 0.42;
const MX = A * 0.3;
const MY = 0.12;
e.layer('air', {}, (g) => {
  const sky = g.createLinearGradient(0, -0.35, 0, H);
  sky.addColorStop(0, '#0e1733');
  sky.addColorStop(0.45, '#1b2a52');
  sky.addColorStop(0.85, '#34477a');
  sky.addColorStop(1, '#55699a');
  g.fillStyle = sky;
  g.fillRect(-0.3, -0.35, A + 0.6, H + 0.36);
  g.fillStyle = '#55699a';
  g.fillRect(-0.3, H, A + 0.6, 1.25 - H);
  // the air about the moon
  const halo = g.createRadialGradient(MX, MY, 0, MX, MY, 0.5);
  halo.addColorStop(0, 'rgba(150, 172, 222, 0.45)');
  halo.addColorStop(0.35, 'rgba(120, 145, 205, 0.16)');
  halo.addColorStop(1, 'rgba(120, 145, 205, 0)');
  g.fillStyle = halo;
  g.fillRect(MX - 0.5, MY - 0.5, 1, 1);
  // long thin clouds, soft, lit a little from the moon's side
  const clouds = [[MX + 0.32, MY + 0.09, 0.34, 0.012], [MX + 0.6, MY + 0.13, 0.26, 0.009], [MX - 0.22, MY + 0.17, 0.3, 0.01],
    [A * 0.78, 0.07, 0.4, 0.012], [A * 0.12, 0.3, 0.36, 0.008]];
  for (const [x, y, w, h] of clouds) {
    g.save();
    g.translate(x, y);
    g.scale(w, h);
    const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    c.addColorStop(0, 'rgba(140, 160, 205, 0.5)');
    c.addColorStop(1, 'rgba(140, 160, 205, 0)');
    g.fillStyle = c;
    g.beginPath();
    g.arc(0, 0, 1, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
});
e.layer('stars', {}, (g) => {
  for (let i = 0; i < 260; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6);
    const y = -0.35 + e.rnd() * (H + 0.3);
    const big = e.rnd();
    const near = Math.hypot(x - MX, y - MY);
    if (near < 0.12) continue;
    const low = Math.min(1, Math.max(0, (H - 0.02 - y) / 0.2));
    g.fillStyle = `rgba(232, 236, 255, ${(0.35 + 0.6 * big) * low})`;
    g.beginPath();
    g.arc(x, y, 0.0011 + big * big * 0.0022, 0, Math.PI * 2);
    g.fill();
  }
});
e.layer('moon', {}, (g) => {
  g.fillStyle = '#f2efe2';
  g.beginPath();
  g.arc(MX, MY, 0.026, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = 'rgba(190, 196, 206, 0.55)';
  for (const [dx, dy, r] of [[-0.008, -0.006, 0.006], [0.006, 0.004, 0.008], [-0.002, 0.012, 0.004]]) {
    g.beginPath();
    g.arc(MX + dx, MY + dy, r, 0, Math.PI * 2);
    g.fill();
  }
  e.light(MX, MY, 0.06, '#dfe6ff', 0.8);
  e.at(MX, MY, 'disc');
});
