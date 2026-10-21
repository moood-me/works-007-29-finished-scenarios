// A stretch of the forest farther in and up the hill: eight grown oaks close together, their crowns one mass over the
// dark row of their trunks (lib.js: oak); too far for the wind to show
for (let i = 0; i < 8; i++) {
  e.lib.oak(g, e, { at: -14 + i * 4 + (e.rnd() - 0.5) * 1.2, h: 10 + e.rnd() * 3, w: 3 + e.rnd() * 1, lean: (e.rnd() - 0.5) * 0.6, wind: 0 });
}
