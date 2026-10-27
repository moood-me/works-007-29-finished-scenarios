// The sky over the Gulf at sundown, seen from under the Terrace's roof: the sun about to touch the sea ahead and to the
// right (where the light `sun` comes from: bearing 28°, 3° up), the sky gold round it, rose and violet above; long
// low banks of cloud lying over the horizon, gilded underneath; and the same sky after the sun has gone — deep blue, a
// dying rose band, the first stars — cross-faded by `dusk` in the animate. Screen heights; the horizon at 0.42.
const A = e.aspect;
const H = 0.42;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const SX = A / 2 + Math.tan((28 * Math.PI) / 180);
const SY = H - Math.tan((3 * Math.PI) / 180);
const { glow } = e.lib;
e.layer('day', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#4a5c94');
  sky.addColorStop(0.4, '#7f86b6');
  sky.addColorStop(0.68, '#c99aa8');
  sky.addColorStop(0.86, '#eea47c');
  sky.addColorStop(1, '#f2ae70');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#e8b892';
  g.fillRect(X0, H, W, 1.25 - H);
  // the gold round the sun, wide along the horizon
  glow(g, SX, SY, 0.9, 0.22, '252,190,120', 0.7);
  glow(g, SX, SY, 0.25, 0.09, '255,210,150', 0.7);
});
e.layer('dusk', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#1a2150');
  sky.addColorStop(0.5, '#3a3f74');
  sky.addColorStop(0.8, '#7a6a96');
  sky.addColorStop(0.94, '#c8868a');
  sky.addColorStop(1, '#dc9878');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#8a7290';
  g.fillRect(X0, H, W, 1.25 - H);
  glow(g, SX, H, 0.8, 0.08, '236,150,110', 0.6);
  for (let i = 0; i < 140; i++) {
    const y = Y0 + Math.pow(e.rnd(), 1.4) * (H - 0.1 - Y0);
    g.globalAlpha = (0.3 + 0.6 * e.rnd()) * (1 - y / H);
    g.fillStyle = '#f2f1fb';
    g.beginPath();
    g.arc(X0 + e.rnd() * W, y, 0.001 + 0.0015 * e.rnd(), 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
});
// the sun: a low disc flattened a little by the air, and its glow (the light the sea's mirror draws its path from)
e.layer('sun', { box: [SX - 0.06, SY - 0.06, SX + 0.06, SY + 0.06] }, g => {
  glow(g, SX, SY, 0.06, 0.05, '255,236,190', 1);
  g.fillStyle = '#fff8e2';
  g.beginPath();
  g.ellipse(SX, SY, 0.024, 0.021, 0, 0, Math.PI * 2);
  g.fill();
  e.light(SX, SY, 0.04, '#ffd59a', 8, 'sun');
});
e.layer('clouds', { drift: [0.001, 0], box: [X0, Y0, A + 0.3, H + 0.01] }, g => {
  // long banks lying low over the sea: violet-grey bodies, their undersides gilded by the sun below them — brightest
  // near it; drawn again one width over, so the layer's two ends meet as it drifts
  const bank = (x, y, w, h) => {
    for (const k of [-W, 0, W]) {
      const cx = x + k;
      const near = Math.max(0, 1 - Math.abs(cx - SX) / 0.9);
      g.fillStyle = '#9a8aa8';
      g.beginPath();
      g.moveTo(cx - w / 2, y);
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        g.lineTo(cx - w / 2 + w * u, y - h * Math.sin(Math.PI * u) * (0.6 + 0.4 * Math.sin(u * 17 + x * 9)));
      }
      g.closePath();
      g.fill();
      g.fillStyle = near > 0.3 ? '#ffd9a0' : '#e9b39c';
      g.globalAlpha = 0.55 + 0.45 * near;
      g.beginPath();
      g.moveTo(cx - w * 0.47, y);
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        g.lineTo(cx - w * 0.47 + w * 0.94 * u, y - h * 0.28 * Math.sin(Math.PI * u));
      }
      g.closePath();
      g.fill();
      g.globalAlpha = 1;
    }
  };
  bank(0.25, H - 0.03, 0.7, 0.025);
  bank(0.95, H - 0.055, 0.5, 0.018);
  bank(1.55, H - 0.085, 0.8, 0.02);
  bank(2.05, H - 0.02, 0.45, 0.015);
  // thin streaks higher up, rose underneath
  for (let i = 0; i < 10; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.02 + e.rnd() * 0.24;
    const w = 0.2 + e.rnd() * 0.35;
    for (const k of [-W, 0, W]) glow(g, x + k, y, w, 0.006 + e.rnd() * 0.008, '246,206,206', 0.55);
  }
  for (const k of [-W, 0, W]) glow(g, A / 2 + k, H, W * 0.6, 0.025, '246,214,186', 0.8);
});
