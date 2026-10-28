// A late October morning, a Sunday: a high, washed blue going milky toward the horizon where the morning's mist
// still lies; long thin veils of high cloud drifting slowly. Screen heights; the horizon at 0.5.
const A = e.aspect;
const H = 0.5;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#7f97ba');
sky.addColorStop(0.4, '#a3b4ca');
sky.addColorStop(0.72, '#ccd3d9');
sky.addColorStop(0.9, '#e2e2dc');
sky.addColorStop(1, '#e9e5da');
g.fillStyle = sky;
g.fillRect(X0, Y0, W, H - Y0);
g.fillStyle = '#e6e2d8';
g.fillRect(X0, H, W, 1.25 - H);
// a veil of high cloud: long soft strokes, the morning's warmth faint on them
function veil(c, x, y, w, alpha) {
  for (let i = 0; i < 4; i++) {
    const px = x + (e.rnd() - 0.5) * w * 0.5;
    const py = y + (e.rnd() - 0.5) * 0.01;
    const rw = w * (0.3 + e.rnd() * 0.35);
    const rh = 0.004 + e.rnd() * 0.006;
    const grd = c.createRadialGradient(px, py, 0, px, py, rw);
    grd.addColorStop(0, `rgba(246,240,230,${alpha})`);
    grd.addColorStop(0.6, `rgba(236,236,236,${alpha * 0.45})`);
    grd.addColorStop(1, 'rgba(230,232,236,0)');
    c.fillStyle = grd;
    c.save();
    c.translate(px, py);
    c.scale(1, rh / rw);
    c.translate(-px, -py);
    c.beginPath();
    c.arc(px, py, rw, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }
}
e.layer('cloud', { drift: [0.0008, 0], box: [X0, Y0, A + 0.3, H] }, c => {
  // each veil drawn again one width over, so the layer's two ends meet as it drifts
  for (let i = 0; i < 7; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.02 + e.rnd() * 0.3;
    const w = 0.3 + e.rnd() * 0.4;
    const a = 0.35 + 0.3 * e.rnd();
    for (const k of [-W, 0, W]) veil(c, x + k, y, w, a);
  }
});
