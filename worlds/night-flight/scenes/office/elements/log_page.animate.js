// (Stage 5) The line written as `ink` goes: the cover drawn back from the left, the pen's nib along the line (its point
// `pen`); a blot left where the pen was when `blot` came.
const S = e.state;
const W = S.log_line === 'unknown' ? 0.62 : 1.05;
const X0 = e.aspect / 2 - 0.55;
const Y = 0.66;
const ink = Math.max(0, Math.min(1, S.ink ?? 0));
e.layer('cover').scaleX = 1 - ink;
e.layer('pen').x = ink * W;
e.at(X0 + ink * W, Y - 0.015, 'pen');
const m = e.mem;
if (S.blot) m.bx ??= ink * W;
else m.bx = null;
const blot = e.layer('blot');
blot.alpha = S.blot ? 1 : 0;
blot.x = m.bx ?? 0;
