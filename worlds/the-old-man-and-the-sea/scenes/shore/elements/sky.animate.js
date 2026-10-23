const d = e.state.dusk;
e.layer('day').alpha = 1 - d;
e.layer('clouds').alpha = 1 - 0.55 * d;
e.layer('clouds').brightness = 1 - 0.4 * d;
e.layer('dusk').alpha = d;
// the bird circles slowly, a turn in about forty seconds
e.layer('bird').rotate = e.t * 0.16;
e.layer('bird').alpha = 1 - 0.7 * d;
