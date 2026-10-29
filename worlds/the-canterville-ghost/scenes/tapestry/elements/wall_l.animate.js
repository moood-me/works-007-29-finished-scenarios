// the tapestry on the leaf stirs on its rod as `stir` rises: a slow uneven sway, as if something moved behind it
const k = e.state.stir ?? 0;
const h = e.layer('hang');
h.rotate = k * 0.035 * Math.sin(e.t * 1.7) + k * 0.015 * Math.sin(e.t * 4.3);
h.x = k * 0.02 * Math.sin(e.t * 2.3 + 1.1);
