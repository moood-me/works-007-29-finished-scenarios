// The candle's flame leans and stretches a little, never in a rhythm.
const f = e.layer('flame');
f.rotate = 0.12 * e.anim.drift(e.t * 1.3, 1);
f.scaleY = 1 + 0.12 * e.anim.drift(e.t * 2.1, 2);
