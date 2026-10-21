// the night comes over the evening; the sun and its glow go
const n = e.state.night ?? 0;
e.layer('night').alpha = n;
e.layer('sun').alpha = 1 - n;
e.layer('clouds').alpha = 1 - 0.8 * n;
e.glow('glow', 1 - n);
