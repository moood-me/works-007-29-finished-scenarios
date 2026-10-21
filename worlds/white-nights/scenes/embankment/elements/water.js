// The canal from above (x across it, −10.85 at the far bank's wall … 10.85 at the near one; y toward the viewer, its
// far end 320 m off at −160): pale, lighter than the sky, as the white night's water is — the mirror (reflect) lays
// the houses and the sky on it; a little deeper along the walls. Over it the slow ripple: short level strokes, dense
// far off and sparse near, drifting down the canal toward the viewer (a layer the engine moves)
const W = 21.7, D = 320;
const wash = g.createLinearGradient(-W / 2, 0, W / 2, 0);
wash.addColorStop(0, '#cfcdd8');
wash.addColorStop(0.12, '#e6e3ea');
wash.addColorStop(0.88, '#e6e3ea');
wash.addColorStop(1, '#cfcdd8');
g.fillStyle = wash;
g.fillRect(-W / 2, -D / 2, W, D);
e.layer('ripple', { box: [-W / 2, -D / 2, W / 2, D / 2], drift: [0, 0.25] }, (g) => {
  for (let i = 0; i < 900; i++) {
    const far = e.anim.hash(i, 21), y = -D / 2 + D * (1 - far ** 0.55), x = -W / 2 + W * e.anim.hash(i, 22);
    const len = 0.4 + 2.6 * e.anim.hash(i, 23) * (1 - 0.6 * far), thick = 0.03 + 0.05 * (1 - far);
    g.fillStyle = e.anim.hash(i, 24) > 0.45 ? 'rgba(244,240,244,0.55)' : 'rgba(150,148,166,0.35)';
    for (const k of [0, -D, D]) if (y + k > -D / 2 - 1 && y + k < D / 2 + 1) g.fillRect(Math.min(x, W / 2 - len), y + k, len, thick);
  }
});
