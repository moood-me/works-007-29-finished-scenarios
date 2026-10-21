// The sky over the sea, in two hours painted once each: the pearl-grey evening (a low sun in the haze, long soft
// bands of cloud) and the blue night (stars, the moon) — cross-faded by `night` in its animate. Screen heights; the
// horizon at 0.62.
const A = e.aspect;
const H = 0.62;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const SX = A * 0.5;
const SY = 0.53;
const MX = A * 0.3;
const MY = 0.2;
// a soft round glow, stretched (sx, sy: its half-widths)
function glow(g, x, y, sx, sy, color, alpha) {
  g.save();
  g.translate(x, y);
  g.scale(sx, sy);
  const r = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  r.addColorStop(0, color);
  r.addColorStop(1, 'rgba(0,0,0,0)');
  g.globalAlpha = alpha;
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, 1, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
e.layer('day', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#9fa9bb');
  sky.addColorStop(0.45, '#c2c2cb');
  sky.addColorStop(0.8, '#dacfca');
  sky.addColorStop(1, '#e6d7cb');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#d6d1d0';
  g.fillRect(X0, H, W, 1.25 - H);
  // the warm haze round the low sun, wide along the horizon
  glow(g, SX, SY + 0.02, 0.9, 0.16, '#f6dcbc', 0.75);
  glow(g, SX, SY, 0.28, 0.2, '#fbe6c8', 0.7);
});
e.layer('sun', {}, g => {
  g.fillStyle = '#fff3de';
  g.beginPath();
  g.arc(SX, SY, 0.024, 0, Math.PI * 2);
  g.fill();
  e.at(SX, SY, 'sun');
  e.light(SX, SY, 0.03, '#fff0d8', 1, 'sunglow');
});
e.layer('clouds', { drift: [0.003, 0], box: [X0, Y0, A + 0.3, H] }, g => {
  // long soft bands; each drawn again one width over, so the layer's two ends meet as it drifts
  for (let i = 0; i < 14; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.05 + Math.pow(e.rnd(), 0.8) * 0.42;
    const w = 0.25 + e.rnd() * 0.45;
    const h = 0.012 + e.rnd() * 0.025;
    const c = e.rnd() < 0.45 ? '#efdccc' : '#cacad3';
    for (const k of [-W, 0, W]) glow(g, x + k, y, w, h, c, 0.35 + 0.25 * e.rnd());
  }
});
e.layer('night', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#162039');
  sky.addColorStop(0.6, '#26365a');
  sky.addColorStop(1, '#45577c');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#3a4a6c';
  g.fillRect(X0, H, W, 1.25 - H);
  glow(g, MX, MY, 0.3, 0.3, '#8fa3cf', 0.45);
  glow(g, A * 0.5, H, 1.2, 0.08, '#6a7ca0', 0.6);
  for (let i = 0; i < 180; i++) {
    const y = Y0 + Math.pow(e.rnd(), 1.4) * (H - 0.08 - Y0);
    g.globalAlpha = 0.35 + 0.6 * e.rnd() * (1 - y / H);
    g.fillStyle = '#eef1fb';
    g.beginPath();
    g.arc(X0 + e.rnd() * W, y, 0.0012 + 0.0016 * e.rnd(), 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
});
e.layer('moon', {}, g => {
  g.fillStyle = '#f2efe2';
  g.beginPath();
  g.arc(MX, MY, 0.022, 0, Math.PI * 2);
  g.fill();
  e.at(MX, MY, 'moon');
  e.light(MX, MY, 0.025, '#e8eeff', 0.8, 'moonglow');
});
