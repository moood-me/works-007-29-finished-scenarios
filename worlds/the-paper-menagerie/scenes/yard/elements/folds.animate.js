// Carried to the sheet in Jack's hands (`jack#letter`) each frame; the creases shiver by `tremble`, the flaps come over
// one by one by `fold` (each a snap: paper folds, it does not slide).
const st = e.state, P = e.kit.paper;
const p = st.jack_with && st.jack_with.includes('letter') ? e.point('jack#letter') : null;
const [x, y] = p ?? [0, 0];
const c = e.layer('creases');
const shiver = st.tremble ?? 0;
c.x = x + shiver * 0.003 * P.tick(e.anim, e.t * 3.1, 2, 0.4);
c.y = y;
c.alpha = p ? Math.min(1, shiver * 1.5) : 0;
c.rotate = shiver * 0.02 * P.tick(e.anim, e.t * 2.3, 6, 0.4);
const f = st.fold ?? 0;
['flap1', 'flap2', 'flap3', 'flap4'].forEach((name, i) => {
  const l = e.layer(name);
  const on = p && f > (i + 0.5) / 4.5;
  l.alpha = on ? 1 : 0;
  l.x = x;
  l.y = y;
  l.scaleX = l.scaleY = on ? 1 - 0.12 * i : 1;
});
