// The storm come over the field at three in the morning, seen through the office's window: low cloud overhead, dark
// slate with a violet cast, heavier masses hanging lower, a little lighter toward the horizon where the town's glow
// lies under it far on the left; the lightning now and then lighting the cloud from inside (its `flash` layer,
// flashed by animate). Screen heights; the horizon at 0.5.
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
e.layer('cloud', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#13172a');
  sky.addColorStop(0.5, '#1f2540');
  sky.addColorStop(0.85, '#343c5c');
  sky.addColorStop(1, '#4a5274');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H - Y0 + 0.01);
  c.fillStyle = '#1c2132';
  c.fillRect(X0, H, W, 1.25 - H);
  // the cloud's underside: heavy lumps, darker where they hang lowest
  for (let i = 0; i < 46; i++) {
    const y = Y0 + 0.08 + (H - 0.06 - Y0) * e.rnd() ** 0.8;
    const x = X0 + W * e.rnd();
    const s = 0.05 + 0.12 * e.rnd();
    glow(c, x, y, s * 2.2, s * 0.7, e.rnd() > 0.5 ? '#151a2c' : '#2b3150', 0.6);
  }
  // the town's glow far on the left, under the cloud, on the horizon
  glow(c, A * 0.18, H - 0.005, 0.32, 0.05, '#8a6e66', 0.45);
  glow(c, A * 0.18, H - 0.002, 0.1, 0.015, '#d0a070', 0.5);
});
// the lightning's light inside the cloud
e.layer('flash', { blend: 'add' }, c => {
  glow(c, A * 0.62, 0.28, 0.5, 0.2, '#b9b4f0', 0.45);
  glow(c, A * 0.62, 0.3, 0.15, 0.08, '#f0eaff', 0.4);
});
