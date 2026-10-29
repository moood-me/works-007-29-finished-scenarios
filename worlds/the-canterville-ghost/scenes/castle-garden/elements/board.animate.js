// the brush line shows from the root up as `sketch_line` rises: the strip of paper over it draws back toward the fork;
// the blot as `blot` says
const k = Math.min(1, Math.max(0, e.state.sketch_line ?? 0));
e.layer('veil').scaleY = 1 - k;
e.layer('blot').alpha = e.state.blot ? 1 : 0;
