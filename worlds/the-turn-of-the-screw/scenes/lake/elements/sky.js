// A late October afternoon over the lake, the sun low behind the viewer on the left: a high pale blue going whitish
// and warm toward the horizon, long thin bands of cloud lit on their undersides, drifting slowly. Screen heights; the
// horizon at 0.52.
const A = e.aspect;
const H = 0.52;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#7c93b6');
sky.addColorStop(0.35, '#9fb1c9');
sky.addColorStop(0.68, '#c9d0d6');
sky.addColorStop(0.88, '#e6e2d6');
sky.addColorStop(1, '#efe6d4');
g.fillStyle = sky;
g.fillRect(X0, Y0, W, H - Y0);
g.fillStyle = '#ece4d4';
g.fillRect(X0, H, W, 1.25 - H);
// a band of cloud: long soft strokes, pale, warm underneath where the low sun lights them
function band(c, x, y, w, alpha) {
  for (let i = 0; i < 5; i++) {
    const px = x + (e.rnd() - 0.5) * w * 0.6;
    const py = y + (e.rnd() - 0.5) * 0.012;
    const rw = w * (0.3 + e.rnd() * 0.3);
    const rh = 0.006 + e.rnd() * 0.008;
    const grd = c.createRadialGradient(px, py + rh * 0.4, 0, px, py, rw);
    grd.addColorStop(0, `rgba(248,232,214,${alpha})`);
    grd.addColorStop(0.6, `rgba(232,228,226,${alpha * 0.5})`);
    grd.addColorStop(1, 'rgba(226,226,230,0)');
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
e.layer('clouds', { drift: [0.001, 0], box: [X0, Y0, A + 0.3, H] }, c => {
  // each band drawn again one width over, so the layer's two ends meet as it drifts
  for (let i = 0; i < 8; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.08 + e.rnd() * 0.32;
    const w = 0.25 + e.rnd() * 0.35;
    const a = 0.45 + 0.35 * e.rnd();
    for (const k of [-W, 0, W]) band(c, x + k, y, w, a);
  }
});
