// A golden late-summer evening over the mountains: a clear blue high up, warming to honey and apricot over the
// peaks, the light strongest to the right (the sun is low behind the viewer's right shoulder); a few soft cumulus,
// their tops cream, their bellies rose, drifting slowly (a layer, its ends meeting). The horizon is at 0.45.
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
// (the stops are shares of the run from y −0.35 to 0.6: 0.84 is the horizon)
sky.addColorStop(0, '#4f86c2');
sky.addColorStop(0.25, '#73a3d1');
sky.addColorStop(0.5, '#a9c7dc');
sky.addColorStop(0.68, '#e3dcc0');
sky.addColorStop(0.8, '#f6d9a4');
sky.addColorStop(1, '#f8cf92');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
const warm = g.createRadialGradient(A + 0.25, 0.42, 0, A + 0.25, 0.42, 1.2);
warm.addColorStop(0, 'rgba(255, 214, 150, 0.55)');
warm.addColorStop(1, 'rgba(255, 214, 150, 0)');
g.fillStyle = warm;
g.fillRect(-0.3, -0.35, W, 1.6);
L.dabs(g, 11, -0.3, -0.3, W, 0.7, ['#6c9ccd', '#8db4d6'], 60, 0.06, 0.35, 0.18);
// (a cumulus at x, y, `w` wide: a cluster of round puffs, a flat belly — drawn again one width to the left, so the
// layer's ends meet as it drifts round)
const cloud = (g, x, y, w, seed) => {
  for (const dx of [0, -W]) {
    const n = 7;
    for (const [col, lift, k] of [['#e8b7a4', 0, 1], ['#f7dccb', w * 0.05, 0.9], ['#fff3e4', w * 0.1, 0.72]]) {
      g.fillStyle = col;
      g.beginPath();
      for (let i = 0; i < n; i++) {
        const u = (i + 0.5) / n, px = x + dx + (u - 0.5) * w * 0.9, r = w * 0.17 * (0.6 + 0.8 * Math.sin(u * Math.PI)) * (0.8 + 0.4 * L.rnd(i, seed)) * k;
        g.moveTo(px + r, y - r * 0.6 - lift);
        g.arc(px, y - r * 0.6 - lift, r, 0, Math.PI * 2);
      }
      g.fill();
    }
    g.fillStyle = '#e8b7a4';
    g.beginPath();
    g.ellipse(x + dx, y, w * 0.5, w * 0.04, 0, 0, Math.PI * 2);
    g.fill();
  }
};
e.layer('clouds', { drift: [0.0022, 0], box: [-0.3, -0.35, A + 0.3, 0.4] }, (g) => {
  const C = [[0.12, 0.02, 0.3], [0.6, -0.1, 0.24], [1.08, 0.0, 0.36], [1.52, -0.08, 0.28], [1.88, 0.06, 0.2]];
  C.forEach(([x, y, w], i) => cloud(g, x, y, w, 40 + i));
});
