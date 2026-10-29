// The torn letter's scraps afloat on the canal before the parapet (the key `scraps`, 3.4-С): small white bits of
// paper, some with a line of her hand's ink, scattered and turned every way, drifting slowly down the canal toward the
// viewer (a layer the engine moves). From above: x across, y toward the viewer, metres
if (!e.state.scraps) return;
const W = 3.2, D = 7;
e.layer('bits', { box: [-W / 2, -D / 2, W / 2, D / 2], drift: [0, 0.06] }, (g) => {
  for (let i = 0; i < 46; i++) {
    const x = -W / 2 + 0.2 + (W - 0.4) * e.anim.hash(i, 41) ** 1.2, y = -D / 2 + D * e.anim.hash(i, 42);
    const w = 0.05 + 0.07 * e.anim.hash(i, 43), h = w * (0.5 + 0.6 * e.anim.hash(i, 44)), a = e.anim.hash(i, 45) * Math.PI;
    for (const k of [0, -D, D]) {
      if (y + k < -D / 2 - 0.2 || y + k > D / 2 + 0.2) continue;
      g.save();
      g.translate(x, y + k);
      g.rotate(a);
      g.fillStyle = '#f5f1e6';
      g.fillRect(-w / 2, -h / 2, w, h);
      if (e.anim.hash(i, 46) > 0.5) { g.fillStyle = 'rgba(60,52,70,0.7)'; g.fillRect(-w * 0.4, -h * 0.05, w * 0.7, h * 0.08); }
      g.restore();
    }
  }
});
