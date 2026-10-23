// The high sky over the Gulf in the late afternoon, the sun low behind the viewer's right shoulder: blue overhead, a
// pink band low over the sea, and the great clouds standing on the horizon lit warm on their right; and the same sky
// at dusk (deep blue, a rose band, the first stars) — cross-faded by `dusk` in its animate. A man-of-war bird circles
// high over the water. Screen heights; the horizon at 0.6.
const A = e.aspect;
const H = 0.6;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const { glow } = e.lib;
e.layer('day', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#6f92c0');
  sky.addColorStop(0.45, '#9db8d4');
  sky.addColorStop(0.78, '#d8cad0');
  sky.addColorStop(0.93, '#efd2c0');
  sky.addColorStop(1, '#f3dcc4');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#d9cfc8';
  g.fillRect(X0, H, W, 1.25 - H);
});
e.layer('clouds', { drift: [0.0015, 0], box: [X0, Y0, A + 0.3, H + 0.01] }, g => {
  // the towers on the horizon: each heaped of soft puffs, its shaded foot violet-grey, its sunlit right side and top
  // cream; drawn again one width over, so the layer's two ends meet as it drifts
  const tower = (x, h, w) => {
    for (let i = 0; i < 26; i++) {
      const u = e.rnd();
      const y = H - 0.01 - u * h;
      const r = w * (0.35 + 0.4 * (1 - u)) * (0.6 + 0.5 * e.rnd());
      const cx = x + (e.rnd() - 0.5) * w * (1.2 - 0.6 * u);
      const lit = 0.3 + 0.7 * u;
      for (const k of [-W, 0, W]) {
        glow(g, cx + k, y, r, r * 0.8, '196,182,196', 0.75);
        glow(g, cx + k + r * 0.25, y - r * 0.15, r * 0.8, r * 0.65, '252,232,212', 0.55 * lit);
      }
    }
  };
  tower(0.15, 0.16, 0.12);
  tower(0.62, 0.11, 0.09);
  tower(1.12, 0.24, 0.15);
  tower(1.55, 0.13, 0.1);
  tower(1.95, 0.19, 0.12);
  // long thin streaks high up, pink on their undersides
  for (let i = 0; i < 9; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.02 + e.rnd() * 0.3;
    const w = 0.2 + e.rnd() * 0.35;
    for (const k of [-W, 0, W]) glow(g, x + k, y, w, 0.008 + e.rnd() * 0.01, '246,226,226', 0.5);
  }
  // the low haze along the water
  for (const k of [-W, 0, W]) glow(g, A / 2 + k, H, W * 0.6, 0.03, '240,220,206', 0.8);
});
e.layer('dusk', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#1d2550');
  sky.addColorStop(0.5, '#3e477a');
  sky.addColorStop(0.82, '#8c7ea0');
  sky.addColorStop(0.95, '#d29a92');
  sky.addColorStop(1, '#dca896');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#8f7f98';
  g.fillRect(X0, H, W, 1.25 - H);
  for (let i = 0; i < 120; i++) {
    const y = Y0 + Math.pow(e.rnd(), 1.5) * (H - 0.15 - Y0);
    g.globalAlpha = (0.3 + 0.6 * e.rnd()) * (1 - y / H);
    g.fillStyle = '#f2f1fb';
    g.beginPath();
    g.arc(X0 + e.rnd() * W, y, 0.001 + 0.0015 * e.rnd(), 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
});
// the bird: long bent wings and a forked tail, painted at the edge of the circle it flies, turned round its centre
const BX = A * 0.66;
const BY = 0.2;
const R = 0.05;
e.layer('bird', { pivot: [BX, BY], box: [BX - R - 0.03, BY - R - 0.03, BX + R + 0.03, BY + R + 0.03] }, g => {
  g.save();
  g.translate(BX + R, BY);
  g.rotate(Math.PI / 2);
  g.fillStyle = '#2c2a33';
  g.beginPath();
  g.moveTo(-0.016, 0.002);
  g.quadraticCurveTo(-0.009, -0.004, -0.004, 0.001);
  g.lineTo(0, -0.001);
  g.lineTo(0.004, 0.001);
  g.quadraticCurveTo(0.009, -0.004, 0.016, 0.002);
  g.quadraticCurveTo(0.009, -0.002, 0.003, 0.0025);
  g.lineTo(0.0015, 0.007);
  g.lineTo(0, 0.0045);
  g.lineTo(-0.0015, 0.007);
  g.lineTo(-0.003, 0.0025);
  g.quadraticCurveTo(-0.009, -0.002, -0.016, 0.002);
  g.closePath();
  g.fill();
  g.restore();
});
