// lit as much as `lamp`
const on = e.state.lamp ?? 1;
e.layer('glass').alpha = 0.25 + 0.75 * on;
e.glow('flame', on);
