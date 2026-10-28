const d = e.state.dusk;
e.layer('day').alpha = 1 - d;
e.layer('sun').alpha = 1 - d;
e.glow('sun', 1 - d);
e.layer('dusk').alpha = d;
e.layer('clouds').alpha = 1 - 0.5 * d;
e.layer('clouds').brightness = 1 - 0.55 * d;
