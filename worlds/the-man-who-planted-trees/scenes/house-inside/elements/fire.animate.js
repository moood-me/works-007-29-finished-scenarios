// the fire as high as the hearth is kept (`hearth`)
const h = e.state.hearth ?? 1;
e.layer('flames').alpha = h;
e.layer('flames').scaleY = 0.5 + 0.5 * h;
e.glow('fire', h);
