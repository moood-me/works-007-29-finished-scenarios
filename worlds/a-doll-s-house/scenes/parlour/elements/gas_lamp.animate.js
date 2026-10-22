const k = 1 - e.state.day;
e.layer('lit').alpha = k;
e.glow('flame', k);
