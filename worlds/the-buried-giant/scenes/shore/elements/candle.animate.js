// the flame sways a little, never in a rhythm; out when the candle is
const on = e.state.candle ?? 1, f = e.layer('flame');
f.alpha = on;
f.rotate = 0.12 * e.anim.noise(e.t * 1.3, 5);
f.scaleY = 1 + 0.12 * e.anim.noise(e.t * 2.1, 9);
