// The canal from above (x across it, −10.85 at the far bank's wall … 10.85 at the near one; y toward the viewer, its
// far end 320 m off at −160): the white night's water is lighter than the sky — it holds the whole pale sky, so it
// keeps its own light ("glows") and is painted as that sky's mirror: pearl near, warming far off toward the rose of
// the afterglow down the canal, a little deeper along the walls. The mirror (reflect) lays the houses, the lamps'
// paths and the afterglow's on it. Over it the slow ripple: short level strokes, dense far off and sparse near,
// drifting down the canal toward the viewer (a layer the engine moves)
const W = 21.7, D = 320;
const along = g.createLinearGradient(0, -D / 2, 0, D / 2);
along.addColorStop(0, '#f6e6dc');
along.addColorStop(0.25, '#f4ece8');
along.addColorStop(0.7, '#eeeef4');
along.addColorStop(1, '#e9e9f2');
g.fillStyle = along;
g.fillRect(-W / 2, -D / 2, W, D);
const walls = g.createLinearGradient(-W / 2, 0, W / 2, 0);
walls.addColorStop(0, 'rgba(176,168,186,0.45)');
walls.addColorStop(0.1, 'rgba(176,168,186,0)');
walls.addColorStop(0.9, 'rgba(176,168,186,0)');
walls.addColorStop(1, 'rgba(176,168,186,0.45)');
g.fillStyle = walls;
g.fillRect(-W / 2, -D / 2, W, D);
e.layer('ripple', { box: [-W / 2, -D / 2, W / 2, D / 2], drift: [0, 0.25] }, (g) => {
  for (let i = 0; i < 900; i++) {
    const far = e.anim.hash(i, 21), y = -D / 2 + D * (1 - far ** 0.55), x = -W / 2 + W * e.anim.hash(i, 22);
    const len = 0.4 + 2.6 * e.anim.hash(i, 23) * (1 - 0.6 * far), thick = 0.03 + 0.05 * (1 - far);
    g.fillStyle = e.anim.hash(i, 24) > 0.45 ? 'rgba(255,252,250,0.7)' : 'rgba(160,156,178,0.3)';
    for (const k of [0, -D, D]) if (y + k > -D / 2 - 1 && y + k < D / 2 + 1) g.fillRect(Math.min(x, W / 2 - len), y + k, len, thick);
  }
});
