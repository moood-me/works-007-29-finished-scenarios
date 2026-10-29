// The hall's showcase: its five moments one after another, each held a few seconds (the place and its people standing:
// no one walks, the camera stays). In the evening of «waiting» Washington's lantern is out by the pond.
const shown = ['midnight', 'calling', 'waiting', 'departure', 'wedding'];
return shown.map(m => ({
  name: m,
  run: async s => {
    s.set('moment', m);
    await s.until(() => s.state.staged === m);
    if (m === 'waiting') s.set('pond_lantern', 1);
    await s.wait(5);
  },
}));
