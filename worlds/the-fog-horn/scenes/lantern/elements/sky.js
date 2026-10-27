// The sky over the sea at night, in two airs painted once each: the clear night (deep blue, stars, the moon high on the
// right) and the fog (pale, thick, lit grey-blue, the moon only a blur in it) — cross-faded by `fog` in its animate.
// Screen heights; the horizon at 0.43 (the eye 18.7 m over the water).
const A = e.aspect;
const H = 0.43;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const MX = A * 0.7;
const MY = 0.12;
// a soft round glow, stretched (sx, sy: its half-widths), falling off smoothly — no edge to its disc
function glow(g, x, y, sx, sy, color, alpha) {
  g.save();
  g.translate(x, y);
  g.scale(sx, sy);
  const [cr, cg, cb] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16));
  const r = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  for (const u of [0, 0.2, 0.4, 0.6, 0.8, 1]) r.addColorStop(u, `rgba(${cr},${cg},${cb},${(1 - u * u) ** 2})`);
  g.globalAlpha = alpha;
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, 1, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
e.layer('night', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#1c2948');
  sky.addColorStop(0.6, '#2f4268');
  sky.addColorStop(1, '#53668f');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#46587e';
  g.fillRect(X0, H, W, 1.25 - H);
  glow(g, MX, MY, 0.32, 0.32, '#93a7d2', 0.5);
  glow(g, A * 0.5, H, 1.2, 0.08, '#7385aa', 0.6);
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
e.layer('fog', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, 1.25);
  sky.addColorStop(0, '#6f7c99');
  sky.addColorStop(0.45, '#97a2ba');
  sky.addColorStop(1, '#a3adc3');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, 1.25 - Y0);
  // the moon a wide pale blur in the fog
  glow(g, MX, MY, 0.4, 0.36, '#c9d1e2', 0.7);
  glow(g, MX, MY, 0.1, 0.1, '#e1e6f0', 0.6);
});
