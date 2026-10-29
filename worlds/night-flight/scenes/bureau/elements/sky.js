// The sky outside the bureau's window and door, by the hour (the keys `dusk` and `dawn`, which the scene's script sets
// from the clock's `time`):
// — the night: deep blue overhead, lighter toward the horizon (night is blue here, not black), a few stars; low on the
//   horizon, where the window looks, the storm bank coming up from the south with silent lightning in it (its `flash`
//   layer, flashed by animate);
// — dusk (an evening, a little before eight): the sun just gone, a band of amber and rose low along the horizon under
//   a deepening violet-blue, the first stars high up; no storm;
// — dawn (six in the morning, the storm gone over): a low grey overcast lifting in the east, a cold pale band under it,
//   the cloud's underside faintly pink; no stars.
// Screen heights; the horizon at 0.5.
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
const dusk = e.state.dusk > 0.5;
const dawn = !dusk && e.state.dawn > 0.5;
const STOPS = dusk ? ['#16183a', '#2e3466', '#6a5a88', '#c08a7a'] : dawn ? ['#4a5068', '#6e7488', '#9a9cab', '#c8c4c0'] : ['#101830', '#1d2b4e', '#314677', '#4a5f8f'];
e.layer('night', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, STOPS[0]);
  sky.addColorStop(0.5, STOPS[1]);
  sky.addColorStop(0.85, STOPS[2]);
  sky.addColorStop(1, STOPS[3]);
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H - Y0);
  c.fillStyle = dawn ? '#3a4048' : dusk ? '#262236' : '#1a2135';
  c.fillRect(X0, H, W, 1.25 - H);
  if (dusk) {
    // the afterglow along the horizon, warmest a little left of the window
    glow(c, A * 0.55, H, 0.9, 0.08, '#f0a060', 0.75);
    glow(c, A * 0.55, H, 0.35, 0.03, '#ffd090', 0.7);
    glow(c, A * 0.7, H - 0.06, 1.0, 0.16, '#c07a8a', 0.35);
  }
  if (dawn) {
    // the overcast's heavy underside, the cold light coming under it, a faint pink on the cloud
    for (let i = 0; i < 30; i++) glow(c, X0 + W * e.rnd(), Y0 + 0.1 + 0.55 * e.rnd(), 0.2 + 0.2 * e.rnd(), 0.05 + 0.04 * e.rnd(), e.rnd() > 0.5 ? '#5a5f74' : '#7e8294', 0.5);
    glow(c, A * 0.6, H - 0.02, 1.1, 0.06, '#e8e2da', 0.6);
    glow(c, A * 0.6, H - 0.07, 0.8, 0.05, '#c8a0a0', 0.3);
  }
  const n = dawn ? 0 : dusk ? 40 : 220;
  for (let i = 0; i < n; i++) {
    const y = Y0 + (H - (dusk ? 0.2 : 0.04) - Y0) * e.rnd() ** 1.3;
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
// the storm bank: dark lumps along the horizon, from the window's left edge on past its right — at night only
const S0 = A * 0.5;
const S1 = A * 0.95;
if (!dusk && !dawn) e.layer('storm', { box: [S0 - 0.1, H - 0.16, S1 + 0.1, H + 0.02] }, c => {
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
// the light inside the cloud bank when lightning goes off in it (animate flashes it; empty but at night)
e.layer('flash', { blend: 'add', box: [S0 - 0.1, H - 0.16, S1 + 0.1, H + 0.02] }, c => {
  if (dusk || dawn) return;
  glow(c, A * 0.66, H - 0.03, 0.2, 0.07, '#c9c4f0', 0.55);
  glow(c, A * 0.66, H - 0.04, 0.07, 0.04, '#f0eaff', 0.45);
});
