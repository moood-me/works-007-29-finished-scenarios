const k = 1 - e.state.day;
e.layer('lit').alpha = k;
e.glow('shop', k);
e.glow('u0', k);
e.glow('u1', k);
