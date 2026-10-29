// The striped shape goes up through the smoke as `stripes` goes 0 → 1: seen on its way, gone at its end.
const k = Math.min(1, Math.max(0, e.state.stripes ?? 0)), l = e.layer('tiger');
l.y = -2.4 * k;
l.x = 0.3 * k + 0.05 * Math.sin(e.t * 0.9);
l.alpha = Math.sin(Math.PI * k);
l.scaleX = 1 + 0.4 * k;
