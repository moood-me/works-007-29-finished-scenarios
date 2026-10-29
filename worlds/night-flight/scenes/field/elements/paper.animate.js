// the signature shows from its start as `ink` rises (the veil draws back toward its end), the pen's nib going along it;
// the blot as `blot` says
const k = Math.min(1, Math.max(0, e.state.ink ?? 0));
e.layer('veil').scaleX = Math.max(0.001, 1 - k);
const pen = e.layer('pen');
pen.x = 0.4 * k;
pen.y = -0.01 * k - 0.03 * Math.sin(k * Math.PI * 7) * (1 - 0.6 * k) - 0.02 * Math.sin(k * Math.PI);
e.layer('blot').alpha = e.state.blot ? 1 : 0;
