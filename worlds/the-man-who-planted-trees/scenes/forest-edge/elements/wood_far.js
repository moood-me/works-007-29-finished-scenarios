// A stretch of the forest farther in and up the hill: eight oaks close together, their crowns one mass over the dark
// row of their trunks (lib.js: oak); too far for the wind to show. As the years have it: grown; six years old in the
// second chapter (lib.js: youngOak); not yet there in the first
const y = e.state.year;
for (let i = 0; i < 8; i++) {
  const at = -14 + i * 4 + (e.rnd() - 0.5) * 1.2;
  if (y >= 20) e.lib.oak(g, e, { at, h: 10 + e.rnd() * 3, w: 3 + e.rnd() * 1, lean: (e.rnd() - 0.5) * 0.6, wind: 0 });
  else if (y >= 6) e.lib.youngOak(g, e, { at, h: 3.4 + e.rnd() * 1.4, w: 1.5 + e.rnd() * 0.4, lean: (e.rnd() - 0.5) * 0.4, wind: 0 });
}
