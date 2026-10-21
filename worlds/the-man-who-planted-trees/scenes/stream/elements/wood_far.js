// A stretch of the young wood far up the slope: five oaks close together in a row, as he planted them, their crowns
// running into one grey-green mass (lib.js: oak); too far for the wind to show
for (let i = 0; i < 5; i++) {
  e.lib.oak(g, e, { at: -6 + i * 3 + (e.rnd() - 0.5) * 0.8, h: 3.4 + e.rnd() * 1.4, w: 1.5 + e.rnd() * 0.4, lean: (e.rnd() - 0.5) * 0.4, wind: 0 });
}
