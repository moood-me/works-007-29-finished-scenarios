// In Jack's window, on its sill inside the glass (1.7, «Зверинец» 2: `window_animals`): the two paper goats walking
// along it, the buffalo looking out of its flower pot — what the whole bus stop sees. Each goat a layer the animate
// moves along the sill, a step at a time.
if (!e.state.window_animals || e.state.sold) return;
const P = e.kit.paper;
const goat = (l, x, light, dark) => {
  for (const lx of [-0.045, -0.03, 0.03, 0.045]) P.poly(l, [[x + lx - 0.006, -0.045], [x + lx + 0.006, -0.045], [x + lx, 0]], dark);
  P.poly(l, [[x - 0.06, -0.085], [x + 0.05, -0.09], [x + 0.055, -0.045], [x - 0.055, -0.042]], light);
  P.poly(l, [[x + 0.035, -0.088], [x + 0.06, -0.13], [x + 0.075, -0.12], [x + 0.055, -0.082]], light);
  P.poly(l, [[x + 0.06, -0.13], [x + 0.045, -0.155], [x + 0.066, -0.133]], dark);
};
e.layer('goat1', { pivot: [-0.3, 0] }, l => goat(l, -0.3, '#9cc49a', '#7aa679'));
e.layer('goat2', { pivot: [0.0, 0] }, l => goat(l, 0.0, '#f2efe6', '#c9c6be'));
// the buffalo in its pot at the sill's right end
P.poly(g, [[0.26, -0.11], [0.42, -0.11], [0.4, 0], [0.28, 0]], '#b8653f');
P.poly(g, [[0.27, -0.2], [0.4, -0.21], [0.41, -0.13], [0.28, -0.12]], '#a9845c');
P.poly(g, [[0.38, -0.21], [0.36, -0.25], [0.44, -0.22]], '#ccb791');
e.at(0, -0.1, 'animals');
