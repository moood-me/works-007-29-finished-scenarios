// The sheet trembles along its folds by `tremble` (0 still … 1 warm, alive): small snaps from pose to pose, as paper.
const k = e.state.tremble, P = e.kit.paper, l = e.layer('sheet');
l.rotate = k * 0.012 * P.tick(e.anim, e.t * 2.2, 3, 0.4);
l.scaleY = 1 + k * 0.006 * P.tick(e.anim, e.t * 2.7 + 1.3, 4, 0.4);
