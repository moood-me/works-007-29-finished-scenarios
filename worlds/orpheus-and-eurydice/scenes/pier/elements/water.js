// The lake from above (x across, −800 … 800; y toward the viewer, its far edge at the far shore, 600 m off, −300). The
// night water as the sky would lie in it: a deep blue, paler far off where it holds the low sky, darker near. The
// mirror lays the far shore, the pier, the people and the lanterns on it, and draws the moon out into a long path. Over
// it a slow ripple: short level strokes, dense far off and sparse near, drifting toward the viewer (a layer).
const W = 1600, D = 600;
const along = g.createLinearGradient(0, -D / 2, 0, D / 2);
along.addColorStop(0, '#4a5c8c');
along.addColorStop(0.35, '#3b4c7a');
along.addColorStop(0.9, '#2a3962');
along.addColorStop(1, '#223056');
g.fillStyle = along;
g.fillRect(-W / 2, -D / 2, W, D);
// the ripple only where it can be seen as strokes: the nearer 40 m, across the view (a drifting layer is read whole:
// kept small so its strokes stay sharp)
const RX = 40, RY0 = D / 2 - 40, RY1 = D / 2;
e.layer('ripple', { box: [-RX, RY0, RX, RY1], drift: [0, 0.12] }, g => {
  for (let i = 0; i < 900; i++) {
    const far = e.anim.hash(i, 71), y = RY1 - (RY1 - RY0) * far ** 1.6, x = -RX + 2 * RX * e.anim.hash(i, 72);
    const len = (0.3 + 1.2 * e.anim.hash(i, 73)) * (1 + 3 * far), thick = 0.035 + 0.1 * far;
    g.fillStyle = e.anim.hash(i, 74) > 0.5 ? 'rgba(150,170,220,0.35)' : 'rgba(20,28,56,0.35)';
    for (const k of [0, -(RY1 - RY0), RY1 - RY0]) {
      if (y + k > RY0 - 1 && y + k < RY1 + 1) g.fillRect(Math.min(x, RX - len), y + k, len, thick);
    }
  }
});
