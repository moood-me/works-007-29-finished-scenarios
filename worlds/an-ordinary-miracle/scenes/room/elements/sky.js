// An evening before a storm, as the window shows it: a heavy slate-blue cloud low over the mountains, its edge bruised
// violet, under it a band of the last warm amber light along the horizon (0.42); the clouds drift slowly (a layer, its
// ends meeting); far lightning lights them from inside now and then (the layer `flash`, its brightness the lib's
// `flash`, set by animate).
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
// (stops: shares of the run from y −0.35 to 0.6; 0.81 is the horizon)
sky.addColorStop(0, '#3a4560');
sky.addColorStop(0.45, '#56607e');
sky.addColorStop(0.66, '#8a7f98');
sky.addColorStop(0.75, '#e0a670');
sky.addColorStop(0.81, '#f3c47e');
sky.addColorStop(1, '#d99a62');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
// the storm cloud: a dark mass of round heads over a ragged lighter belly, drawn again one width to the left so the
// layer's ends meet as it drifts
const mass = (g, x0, y, w, seed) => {
  for (const dx of [0, -W]) {
    for (const [col, lift, k] of [['#9a8aa0', 0, 1], ['#5e6683', w * 0.03, 0.95], ['#454f6c', w * 0.07, 0.82]]) {
      g.fillStyle = col;
      g.beginPath();
      const n = 9;
      for (let i = 0; i < n; i++) {
        const u = (i + 0.5) / n, px = x0 + dx + (u - 0.5) * w, r = w * 0.11 * (0.7 + 0.6 * L.rnd(i, seed)) * k;
        g.moveTo(px + r, y - r * 0.5 - lift);
        g.arc(px, y - r * 0.5 - lift, r, 0, Math.PI * 2);
      }
      g.fill();
    }
  }
};
e.layer('clouds', { drift: [0.0015, 0], box: [-0.3, -0.35, A + 0.3, 0.36] }, (g) => {
  g.fillStyle = '#454f6c';
  g.fillRect(-0.3, -0.35, W, 0.45);
  for (const [x, y, w, s] of [[0.1, 0.27, 0.9, 50], [0.85, 0.3, 1.1, 51], [1.6, 0.26, 0.8, 52]]) mass(g, x, y, w, s);
  L.dabs(g, 33, -0.3, -0.3, W, 0.4, ['#3c4662', '#5d6684'], 70, 0.05, 0.45, 0.45);
});
// the lightning's light inside the clouds: a pale lilac glow, added
e.layer('flash', { blend: 'add', box: [-0.3, -0.35, A + 0.3, 0.45] }, (g) => {
  const gl = g.createRadialGradient(A * 0.38, 0.22, 0, A * 0.38, 0.22, 0.5);
  gl.addColorStop(0, 'rgba(214, 206, 255, 0.9)');
  gl.addColorStop(0.5, 'rgba(160, 150, 220, 0.35)');
  gl.addColorStop(1, 'rgba(160, 150, 220, 0)');
  g.fillStyle = gl;
  g.fillRect(-0.3, -0.35, W, 0.8);
});
