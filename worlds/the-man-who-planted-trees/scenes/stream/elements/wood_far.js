// A stretch of the wood up the slope: ten oaks close together in a row, as he planted them, their crowns running into
// one mass (lib.js: oak — young, the second chapter; grownOak — grown, the third); too far for the wind to show; none
// in the first chapter
const y = e.state.year;
for (let i = 0; i < 10; i++) {
  const at = -13.5 + i * 3 + (e.rnd() - 0.5) * 0.8;
  if (y >= 20) e.lib.grownOak(g, e, { at, h: 10 + e.rnd() * 3, w: 2.2 + e.rnd() * 0.6, lean: (e.rnd() - 0.5) * 0.5, wind: 0 });
  else if (y >= 6) e.lib.oak(g, e, { at, h: 3.4 + e.rnd() * 1.4, w: 1.5 + e.rnd() * 0.4, lean: (e.rnd() - 0.5) * 0.4, wind: 0 });
}
