// The clear morning sky an hour after sunrise: deep blue overhead, paling to a clear whitish blue along the horizon and
// warmer on the left, toward the low sun in the east (off the frame to the left); a few thin high streaks drifting.
// Screen heights; the horizon at 0.34.
const A = e.aspect;
const H = 0.34;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#24538f');
sky.addColorStop(0.4, '#4579b5');
sky.addColorStop(0.78, '#92b6d8');
sky.addColorStop(0.94, '#cddcea');
sky.addColorStop(1, '#e2e9ee');
// one fill down past the horizon: no seam at the horizon
g.fillStyle = sky;
g.fillRect(X0, Y0, W, 1.25 - Y0);
// the sun's side: a warm pale glow low on the left
const sun = g.createRadialGradient(X0 - 0.2, H - 0.12, 0, X0 - 0.2, H - 0.12, 1.3);
sun.addColorStop(0, 'rgba(255,240,214,0.75)');
sun.addColorStop(0.35, 'rgba(246,232,214,0.32)');
sun.addColorStop(1, 'rgba(240,232,222,0)');
g.fillStyle = sun;
g.fillRect(X0, Y0, W, 1.25 - Y0);
// a soft streak: a long thin ellipse fading out at its ends
function streak(c, x, y, w, h, alpha) {
  c.save();
  c.translate(x, y);
  c.rotate(-0.05);
  c.scale(w, h);
  const r = c.createRadialGradient(0, 0, 0, 0, 0, 1);
  r.addColorStop(0, `rgba(246,247,250,${alpha})`);
  r.addColorStop(0.5, `rgba(242,244,249,${alpha * 0.55})`);
  r.addColorStop(1, 'rgba(238,242,249,0)');
  c.fillStyle = r;
  c.beginPath();
  c.arc(0, 0, 1, 0, Math.PI * 2);
  c.fill();
  c.restore();
}
e.layer('cirrus', { drift: [0.0015, 0], box: [X0, Y0, A + 0.3, H] }, c => {
  // each streak drawn again one width over, so the layer's two ends meet as it drifts
  for (let i = 0; i < 7; i++) {
    const x = X0 + e.rnd() * W;
    const y = -0.08 + Math.pow(e.rnd(), 0.9) * 0.32;
    const w = 0.2 + e.rnd() * 0.45;
    const h = 0.005 + e.rnd() * 0.01;
    const a = 0.3 + 0.3 * e.rnd();
    for (const k of [-W, 0, W]) streak(c, x + k, y, w, h, a);
  }
});
