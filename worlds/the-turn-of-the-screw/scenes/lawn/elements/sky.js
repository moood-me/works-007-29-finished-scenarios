// The June evening sky to the east, the sun low behind the viewer: a cool pale blue overhead, the warm rose band of
// the evening along the horizon and a whitish haze under it; a few small clouds lit from below by the sun that sets
// behind us, drifting slowly; the moon, nearly full, risen pale over the avenue. Screen heights; the horizon at 0.5.
const A = e.aspect;
const H = 0.5;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#6f87b4');
sky.addColorStop(0.3, '#93a6c8');
sky.addColorStop(0.62, '#c3c3d6');
sky.addColorStop(0.8, '#e2c9cc');
sky.addColorStop(0.93, '#f1d9c8');
sky.addColorStop(1, '#f4e6d6');
g.fillStyle = sky;
g.fillRect(X0, Y0, W, H - Y0);
g.fillStyle = '#efe2d2';
g.fillRect(X0, H, W, 1.25 - H);
// the moon: a pale disc, its seas a faint grey-blue
const mx = A * 0.74;
const my = 0.24;
const mr = 0.016;
g.fillStyle = 'rgba(244,243,240,0.85)';
g.beginPath();
g.arc(mx, my, mr, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(176,186,204,0.45)';
for (const [dx, dy, r] of [[-0.004, -0.004, 0.005], [0.005, -0.002, 0.004], [0.001, 0.006, 0.0035], [-0.006, 0.004, 0.003]]) {
  g.beginPath();
  g.arc(mx + dx, my + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.at(mx, my, 'moon');
// a small cloud: a few soft round puffs, their undersides warm where the low sun lights them
function cloud(c, x, y, w, alpha) {
  for (let i = 0; i < 6; i++) {
    const px = x + (e.rnd() - 0.5) * w;
    const py = y + (e.rnd() - 0.5) * w * 0.12;
    const r = w * (0.16 + e.rnd() * 0.14);
    const grd = c.createRadialGradient(px, py + r * 0.3, 0, px, py, r);
    grd.addColorStop(0, `rgba(250,214,190,${alpha})`);
    grd.addColorStop(0.55, `rgba(236,214,214,${alpha * 0.6})`);
    grd.addColorStop(1, 'rgba(226,214,222,0)');
    c.fillStyle = grd;
    c.save();
    c.translate(px, py);
    c.scale(1, 0.45);
    c.translate(-px, -py);
    c.beginPath();
    c.arc(px, py, r, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }
}
e.layer('clouds', { drift: [0.0015, 0], box: [X0, Y0, A + 0.3, H] }, c => {
  // each cloud drawn again one width over, so the layer's two ends meet as it drifts
  for (let i = 0; i < 9; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.05 + e.rnd() * 0.33;
    const w = 0.06 + e.rnd() * 0.12 * (0.5 + y);
    const a = 0.55 + 0.35 * e.rnd();
    for (const k of [-W, 0, W]) cloud(c, x + k, y, w, a);
  }
});
