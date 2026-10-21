// The sky seen through the window, in two hours painted once each: the sunset (the sun low over the sea, just in the
// window, a warm haze along the horizon, long bands of cloud) and the blue night (stars, the moon) — cross-faded by
// `night` in its animate. Screen heights; the horizon at 0.405; the window is the stage's middle, x A/2 ± 0.08, y
// 0.33…0.53 — the clouds are painted only round it.
const A = e.aspect;
const H = 0.405;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const SX = A * 0.5 + 0.022;
const SY = 0.372;
const MX = A * 0.5 - 0.035;
const MY = 0.35;
// a soft round glow, stretched (sx, sy: its half-widths), falling off smoothly — no edge to its disc
function glow(c, x, y, sx, sy, color, alpha) {
  c.save();
  c.translate(x, y);
  c.scale(sx, sy);
  const [cr, cg, cb] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16));
  const r = c.createRadialGradient(0, 0, 0, 0, 0, 1);
  for (const u of [0, 0.2, 0.4, 0.6, 0.8, 1]) r.addColorStop(u, `rgba(${cr},${cg},${cb},${(1 - u * u) ** 2})`);
  c.globalAlpha = alpha;
  c.fillStyle = r;
  c.beginPath();
  c.arc(0, 0, 1, 0, Math.PI * 2);
  c.fill();
  c.restore();
}
e.layer('day', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#7d86a2');
  sky.addColorStop(0.55, '#c3a9aa');
  sky.addColorStop(0.85, '#eab48c');
  sky.addColorStop(1, '#f6bf86');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H - Y0);
  c.fillStyle = '#d9b394';
  c.fillRect(X0, H, W, 1.25 - H);
  glow(c, SX, SY + 0.02, 0.7, 0.07, '#f9b77a', 1);
  glow(c, SX, SY, 0.16, 0.12, '#fdd6a4', 0.95);
});
e.layer('sun', { box: [SX - 0.05, SY - 0.05, SX + 0.05, SY + 0.05] }, c => {
  c.fillStyle = '#fff0d6';
  c.beginPath();
  c.arc(SX, SY, 0.013, 0, Math.PI * 2);
  c.fill();
  e.at(SX, SY, 'sun');
  e.light(SX, SY, 0.02, '#ffe2b8', 1, 'sunglow');
});
e.layer('clouds', { drift: [0.002, 0], box: [A * 0.5 - 0.45, 0.15, A * 0.5 + 0.45, H] }, c => {
  // long thin bands lit from below; each drawn again one width over, so the layer's two ends meet as it drifts
  const L = A * 0.5 - 0.45;
  for (let i = 0; i < 9; i++) {
    const x = L + e.rnd() * 0.9;
    const y = 0.26 + e.rnd() * 0.12;
    const w = 0.12 + e.rnd() * 0.2;
    const h = 0.004 + e.rnd() * 0.008;
    const col = e.rnd() < 0.5 ? '#f3c69c' : '#b9a6ad';
    for (const k of [-0.9, 0, 0.9]) glow(c, x + k, y, w, h, col, 0.7 + 0.3 * e.rnd());
  }
});
e.layer('night', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#162039');
  sky.addColorStop(0.6, '#26365a');
  sky.addColorStop(1, '#4a5c82');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H - Y0);
  c.fillStyle = '#3a4a6c';
  c.fillRect(X0, H, W, 1.25 - H);
  glow(c, MX, MY, 0.14, 0.14, '#8fa3cf', 0.5);
  for (let i = 0; i < 60; i++) {
    const y = 0.2 + e.rnd() * 0.18;
    c.globalAlpha = 0.4 + 0.5 * e.rnd();
    c.fillStyle = '#eef1fb';
    c.beginPath();
    c.arc(A * 0.5 - 0.25 + e.rnd() * 0.5, y, 0.0009 + 0.0012 * e.rnd(), 0, Math.PI * 2);
    c.fill();
  }
  c.globalAlpha = 1;
});
e.layer('moon', { box: [MX - 0.04, MY - 0.04, MX + 0.04, MY + 0.04] }, c => {
  c.fillStyle = '#f2efe2';
  c.beginPath();
  c.arc(MX, MY, 0.011, 0, Math.PI * 2);
  c.fill();
  e.at(MX, MY, 'moon');
  e.light(MX, MY, 0.014, '#e8eeff', 0.8, 'moonglow');
});
