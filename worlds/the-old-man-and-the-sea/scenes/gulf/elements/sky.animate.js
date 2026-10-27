const n = e.state.night;
e.layer('day').alpha = 1 - n;
e.layer('night').alpha = n;
e.layer('clouds').alpha = 1 - 0.75 * n;
e.layer('clouds').brightness = 1 - 0.65 * n;
// the bird circles slowly, a turn in about forty seconds, and is gone at night
e.layer('bird').rotate = e.t * 0.16;
e.layer('bird').alpha = 1 - n;
