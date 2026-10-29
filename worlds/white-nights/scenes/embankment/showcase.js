// The embankment's showcase: its moments one after another, each held a few seconds — the nights' lights from the
// prologue's dusk to the morning's day, the rain of the fourth night, who stands where (no one walks, the camera stays)
const shown = ['prologue', 'first_night', 'first_gentleman', 'first_walk', 'first_corner', 'second_wait', 'second_bench', 'second_letter',
  'day', 'third_ten', 'third_tear', 'fourth_night', 'fourth_awning', 'fourth_lodger', 'fourth_alone', 'morning'];
return shown.map(m => ({
  name: m,
  run: async s => {
    s.set('moment', m);
    await s.until(() => s.state.staged === m);
    await s.wait(4);
  },
}));
