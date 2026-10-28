// The night over the lake: deep blue at the top, paler toward the horizon over the city, a breath of light about the
// moon; the stars a layer of their own (the shader makes them twinkle), the moon a layer with its glow — the point
// `sky#disc` the moonlight comes from. High on the right, so its double lies in the water right of the city's.
const A = e.aspect;
const H = 0.45;
const MX = A * 0.76;
const MY = 0.17;
e.layer('air', {}, (g) => {
  const sky = g.createLinearGradient(0, -0.35, 0, H);
  sky.addColorStop(0, '#111b3a');
  sky.addColorStop(0.45, '#1f2f5a');
  sky.addColorStop(0.85, '#3a4e84');
  sky.addColorStop(1, '#5b70a2');
  g.fillStyle = sky;
  g.fillRect(-0.3, -0.35, A + 0.6, H + 0.36);
  g.fillStyle = '#5b70a2';
  g.fillRect(-0.3, H, A + 0.6, 1.25 - H);
  const halo = g.createRadialGradient(MX, MY, 0, MX, MY, 0.45);
  halo.addColorStop(0, 'rgba(155, 176, 226, 0.45)');
  halo.addColorStop(0.35, 'rgba(120, 145, 205, 0.15)');
  halo.addColorStop(1, 'rgba(120, 145, 205, 0)');
  g.fillStyle = halo;
  g.fillRect(MX - 0.45, MY - 0.45, 0.9, 0.9);
  // a few long thin clouds, soft
  for (const [x, y, w, h] of [[MX - 0.3, MY + 0.08, 0.32, 0.01], [MX + 0.25, MY + 0.12, 0.24, 0.008], [A * 0.2, 0.12, 0.38, 0.011], [A * 0.42, 0.3, 0.3, 0.008]]) {
    g.save();
    g.translate(x, y);
    g.scale(w, h);
    const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    c.addColorStop(0, 'rgba(140, 160, 205, 0.45)');
    c.addColorStop(1, 'rgba(140, 160, 205, 0)');
    g.fillStyle = c;
    g.beginPath();
    g.arc(0, 0, 1, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
});
e.layer('stars', {}, (g) => {
  for (let i = 0; i < 240; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6);
    const y = -0.35 + e.rnd() * (H + 0.3);
    const big = e.rnd();
    if (Math.hypot(x - MX, y - MY) < 0.12) continue;
    const low = Math.min(1, Math.max(0, (H - 0.04 - y) / 0.2));
    g.fillStyle = `rgba(232, 236, 255, ${(0.35 + 0.6 * big) * low})`;
    g.beginPath();
    g.arc(x, y, 0.0011 + big * big * 0.0022, 0, Math.PI * 2);
    g.fill();
  }
});
e.layer('moon', {}, (g) => {
  g.fillStyle = '#f2efe2';
  g.beginPath();
  g.arc(MX, MY, 0.024, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = 'rgba(190, 196, 206, 0.55)';
  for (const [dx, dy, r] of [[-0.007, -0.005, 0.006], [0.006, 0.004, 0.007], [-0.002, 0.011, 0.004]]) {
    g.beginPath();
    g.arc(MX + dx, MY + dy, r, 0, Math.PI * 2);
    g.fill();
  }
  e.light(MX, MY, 0.08, '#e4eaff', 1.2);
  e.at(MX, MY, 'disc');
});
