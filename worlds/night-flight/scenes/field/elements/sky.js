// The night over the field: deep blue overhead, lighter toward the horizon (night is blue here, not black), the stars;
// to the left — the south — a low bank of storm cloud on the horizon where silent lightning flickers (its `flash`
// layer, flashed by animate); to the right the faint glow of the town. Screen heights; the horizon at 0.55.
const A = e.aspect;
const H = 0.55;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
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
e.layer('night', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#111a33');
  sky.addColorStop(0.45, '#1f2e52');
  sky.addColorStop(0.8, '#34497a');
  sky.addColorStop(1, '#4f6593');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H - Y0);
  c.fillStyle = '#1b2236';
  c.fillRect(X0, H, W, 1.25 - H);
  // the town's glow low on the right
  glow(c, A * 0.95, H, 0.7, 0.09, '#8a86a0', 0.55);
  // the stars, thinning toward the horizon
  for (let i = 0; i < 260; i++) {
    const y = Y0 + (H - 0.06 - Y0) * e.rnd() ** 1.4;
    const x = X0 + W * e.rnd();
    const b = e.rnd();
    c.globalAlpha = (0.35 + 0.6 * b) * (1 - 0.7 * ((y - Y0) / (H - Y0)));
    c.fillStyle = b > 0.85 ? '#fff3dc' : '#e8eeff';
    c.beginPath();
    c.arc(x, y, 0.0007 + 0.0016 * b * b, 0, Math.PI * 2);
    c.fill();
  }
  c.globalAlpha = 1;
});
// the cloud bank itself: dark lumps along the horizon, their tops a little lighter
e.layer('storm', { box: [X0, H - 0.2, A * 0.55, H + 0.02] }, c => {
  for (let i = 0; i < 26; i++) {
    const x = X0 + (A * 0.55 - X0) * (i / 25) + 0.03 * (e.rnd() - 0.5);
    const big = 1 - Math.abs(x - A * 0.12) / (A * 0.5);
    const r = 0.03 + 0.05 * Math.max(0, big) * (0.6 + 0.4 * e.rnd());
    glow(c, x, H - r * 0.4, r * 1.6, r, '#2a2948', 0.95);
  }
  const base = c.createLinearGradient(0, H - 0.04, 0, H + 0.01);
  base.addColorStop(0, 'rgba(36,36,64,0)');
  base.addColorStop(1, 'rgba(32,33,58,0.9)');
  c.fillStyle = base;
  c.fillRect(X0, H - 0.04, A * 0.55 - X0, 0.06);
});
// the storm far to the south: the light inside the cloud bank when lightning goes off in it
e.layer('flash', { blend: 'add', box: [X0, H - 0.2, A * 0.55, H + 0.02] }, c => {
  glow(c, A * 0.12, H - 0.04, 0.3, 0.09, '#c9c4f0', 0.5);
  glow(c, A * 0.12, H - 0.05, 0.1, 0.05, '#f0eaff', 0.4);
});
