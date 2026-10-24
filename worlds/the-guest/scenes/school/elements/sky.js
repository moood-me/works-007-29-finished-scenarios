// The winter sky over the plateau after the snow: deep cold blue overhead, paling to a clear whitish blue along the
// horizon; the sun behind the viewer, so no disc here — only a few thin high streaks of cloud, drifting slowly. Screen
// heights; the horizon at 0.55.
const A = e.aspect;
const H = 0.55;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#1f4b8c');
sky.addColorStop(0.35, '#3c6eb0');
sky.addColorStop(0.75, '#86aed6');
sky.addColorStop(0.93, '#c4d8ea');
sky.addColorStop(1, '#dbe6ef');
g.fillStyle = sky;
g.fillRect(X0, Y0, W, H - Y0);
g.fillStyle = '#dbe6ef';
g.fillRect(X0, H, W, 1.25 - H);
// a soft streak: a long thin ellipse fading out at its ends
function streak(c, x, y, w, h, alpha) {
  c.save();
  c.translate(x, y);
  c.rotate(-0.04);
  c.scale(w, h);
  const r = c.createRadialGradient(0, 0, 0, 0, 0, 1);
  r.addColorStop(0, `rgba(244,247,251,${alpha})`);
  r.addColorStop(0.5, `rgba(240,244,250,${alpha * 0.55})`);
  r.addColorStop(1, 'rgba(236,242,250,0)');
  c.fillStyle = r;
  c.beginPath();
  c.arc(0, 0, 1, 0, Math.PI * 2);
  c.fill();
  c.restore();
}
e.layer('cirrus', { drift: [0.002, 0], box: [X0, Y0, A + 0.3, H] }, c => {
  // each streak drawn again one width over, so the layer's two ends meet as it drifts
  for (let i = 0; i < 11; i++) {
    const x = X0 + e.rnd() * W;
    const y = -0.05 + Math.pow(e.rnd(), 0.9) * 0.4;
    const w = 0.18 + e.rnd() * 0.4;
    const h = 0.006 + e.rnd() * 0.012;
    const a = 0.35 + 0.35 * e.rnd();
    for (const k of [-W, 0, W]) streak(c, x + k, y, w, h, a);
  }
});
