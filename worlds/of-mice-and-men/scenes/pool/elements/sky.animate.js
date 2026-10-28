const dusk = e.state.dusk;
e.layer('dusk').alpha = dusk;
e.layer('clouds').alpha = 1 - 0.7 * dusk;
