// The canal from above (x across it, −10.85 at the far bank's wall … 10.85 at the near one; y toward the viewer, its
// far end 320 m off at −160). The white night's water holds the whole light sky (it keeps its own light, "glows"), so
// it is painted as that sky mirrored: far down the canal, where it mirrors the low sky, pearl warming to the rose of
// the afterglow; nearer, where it mirrors the sky higher up, its cool lilac — a little deeper along the walls. The
// mirror (reflect) lays the houses, the bridge, the lamps' paths and the afterglow's on it. Over it the slow ripple:
// short level strokes, dense far off and sparse near, drifting down the canal toward the viewer (a layer the engine
// moves)
const W = 21.7, D = 360; // (from 40 m behind the viewer, past the corner, to the canal's turn)
const along = g.createLinearGradient(0, -D / 2, 0, D / 2);
along.addColorStop(0, '#f7ebe3');
along.addColorStop(0.5, '#f4eeee');
along.addColorStop(0.8, '#ece8f0');
along.addColorStop(0.93, '#e3e0ed');
along.addColorStop(1, '#dad7e9');
g.fillStyle = along;
g.fillRect(-W / 2, -D / 2, W, D);
const walls = g.createLinearGradient(-W / 2, 0, W / 2, 0);
walls.addColorStop(0, 'rgba(176,168,186,0.3)');
walls.addColorStop(0.1, 'rgba(176,168,186,0)');
walls.addColorStop(0.9, 'rgba(176,168,186,0)');
walls.addColorStop(1, 'rgba(176,168,186,0.3)');
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
