// The showcase: the moments one after another, each held a few seconds (the place across the years and its people
// standing: no one walks, the camera stays)
const shown = ["planting", "grove", "edge", "delegation", "stumps", "board", "pupil", "two_rods"];
return shown.map((m) => ({
  name: m,
  run: async (s) => {
    s.set('moment', m);
    await s.until(() => s.state.staged === m);
    await s.wait(5);
  },
}));
