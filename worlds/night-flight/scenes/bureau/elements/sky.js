// The night outside the bureau's window and door: deep blue overhead, lighter toward the horizon (night is blue here,
// not black), a few stars; low on the horizon, where the window looks, the storm bank coming up from the south with
// silent lightning in it (its `flash` layer, flashed by animate). Screen heights; the horizon at 0.5.
const A = e.aspect;
const H = 0.5;
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
  sky.addColorStop(0, '#101830');
  sky.addColorStop(0.5, '#1d2b4e');
  sky.addColorStop(0.85, '#314677');
  sky.addColorStop(1, '#4a5f8f');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H - Y0);
  c.fillStyle = '#1a2135';
  c.fillRect(X0, H, W, 1.25 - H);
  for (let i = 0; i < 220; i++) {
    const y = Y0 + (H - 0.04 - Y0) * e.rnd() ** 1.3;
    const x = X0 + W * e.rnd();
    const b = e.rnd();
    c.globalAlpha = (0.35 + 0.6 * b) * (1 - 0.6 * ((y - Y0) / (H - Y0)));
    c.fillStyle = b > 0.85 ? '#fff3dc' : '#e8eeff';
    c.beginPath();
    c.arc(x, y, 0.0007 + 0.0015 * b * b, 0, Math.PI * 2);
    c.fill();
  }
  c.globalAlpha = 1;
});
// the storm bank: dark lumps along the horizon, from the window's left edge on past its right
const S0 = A * 0.5;
const S1 = A * 0.95;
e.layer('storm', { box: [S0 - 0.1, H - 0.16, S1 + 0.1, H + 0.02] }, c => {
  for (let i = 0; i < 22; i++) {
    const x = S0 + (S1 - S0) * (i / 21) + 0.02 * (e.rnd() - 0.5);
    const big = 1 - Math.abs(x - A * 0.66) / (A * 0.3);
    const r = 0.02 + 0.035 * Math.max(0, big) * (0.6 + 0.4 * e.rnd());
    glow(c, x, H - r * 0.4, r * 1.7, r, '#262540', 0.95);
  }
  const base = c.createLinearGradient(0, H - 0.03, 0, H + 0.01);
  base.addColorStop(0, 'rgba(34,34,60,0)');
  base.addColorStop(1, 'rgba(30,31,54,0.9)');
  c.fillStyle = base;
  c.fillRect(S0 - 0.1, H - 0.03, S1 - S0 + 0.2, 0.05);
});
// the light inside the cloud bank when lightning goes off in it
e.layer('flash', { blend: 'add', box: [S0 - 0.1, H - 0.16, S1 + 0.1, H + 0.02] }, c => {
  glow(c, A * 0.66, H - 0.03, 0.2, 0.07, '#c9c4f0', 0.55);
  glow(c, A * 0.66, H - 0.04, 0.07, 0.04, '#f0eaff', 0.45);
});
