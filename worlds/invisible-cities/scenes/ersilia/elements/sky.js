// The evening sky over the steppe, the sun just set behind the viewer: deep blue high up, violet lower, a band of
// pink and peach along the horizon where the last light lies; a few long clouds lit warm from below.
const A = e.aspect;
const H = 0.52;
e.layer('air', {}, (g) => {
  const sky = g.createLinearGradient(0, -0.35, 0, H);
  sky.addColorStop(0, '#3e4f86');
  sky.addColorStop(0.4, '#6a70a6');
  sky.addColorStop(0.72, '#b28ca8');
  sky.addColorStop(0.92, '#e8ae98');
  sky.addColorStop(1, '#f2c7a0');
  g.fillStyle = sky;
  g.fillRect(-0.3, -0.35, A + 0.6, H + 0.36);
  g.fillStyle = '#e2b996';
  g.fillRect(-0.3, H, A + 0.6, 1.25 - H);
  for (const [x, y, w, h] of [[A * 0.18, 0.2, 0.42, 0.016], [A * 0.55, 0.13, 0.5, 0.02], [A * 0.82, 0.27, 0.34, 0.012],
    [A * 0.38, 0.33, 0.3, 0.01], [A * 0.95, 0.08, 0.36, 0.014], [A * 0.05, 0.05, 0.3, 0.012]]) {
    g.save();
    g.translate(x, y);
    g.scale(w, h);
    const c = g.createRadialGradient(0, 0.3, 0, 0, 0, 1);
    c.addColorStop(0, 'rgba(250, 196, 160, 0.75)');
    c.addColorStop(0.6, 'rgba(214, 150, 160, 0.35)');
    c.addColorStop(1, 'rgba(180, 140, 170, 0)');
    g.fillStyle = c;
    g.beginPath();
    g.arc(0, 0, 1, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
});
