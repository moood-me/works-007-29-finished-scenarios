// An evening before a storm, as the window shows it: a heavy slate-blue cloud deck low over the mountains, its belly
// bruised violet, under it a band of the last warm amber light along the horizon (0.42); the clouds drift slowly (a
// layer, its ends meeting); far lightning lights them from inside now and then (the layer `flash`, its brightness the lib's
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
// the storm cloud: a low dark deck over the whole sky, its ragged belly of many uneven lumps, their undersides warm
// where the last light catches them, grey veils of rain hanging slanted under it far off — one width of the layer,
// wrapping as it drifts
const deck = (g, dx) => {
  g.fillStyle = '#434c68';
  g.fillRect(dx - 0.3, -0.35, W, 0.5);
  for (let i = 0; i < 90; i++) {
    const x = dx - 0.3 + W * (i / 90) + 0.02 * L.rnd(i, 60), y = 0.16 + 0.05 * e.anim.noise(i * 0.31, 61) + 0.02 * L.rnd(i, 62);
    const rx = 0.03 + 0.07 * L.rnd(i, 63), ry = 0.018 + 0.035 * L.rnd(i, 64);
    g.fillStyle = ['#a88f9a', '#8d7f96', '#b8968f'][i % 3];
    g.beginPath();
    g.ellipse(x, y + ry * 0.35, rx, ry, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = ['#4a5370', '#56607e', '#3f4864'][i % 3];
    g.beginPath();
    g.ellipse(x - rx * 0.1, y - ry * 0.2, rx * 1.05, ry * 1.1, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = 'rgba(96, 104, 132, 0.35)';
  g.lineWidth = 0.004;
  for (let i = 0; i < 70; i++) {
    const x = dx - 0.3 + W * L.rnd(i, 66);
    if (e.anim.noise(x * 3, 67) < 0.15) continue;
    g.beginPath();
    g.moveTo(x, 0.19);
    g.lineTo(x - 0.03, 0.2 + 0.12 + 0.04 * L.rnd(i, 68));
    g.stroke();
  }
};
e.layer('clouds', { drift: [0.0015, 0], box: [-0.3, -0.35, A + 0.3, 0.38] }, (g) => {
  deck(g, 0);
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
