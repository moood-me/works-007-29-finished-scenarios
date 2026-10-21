const k = 0.2 + 0.8 * e.state.night;
e.layer('lit').alpha = k;
e.glow('win', k);
