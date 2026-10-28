const n = e.state.night;
e.layer('sun').alpha = 1 - n;
e.layer('clouds').alpha = 1 - 0.75 * n;
e.layer('night').alpha = n;
e.layer('moon').alpha = n;
e.glow('sunglow', 1 - n);
e.glow('moonglow', n);
