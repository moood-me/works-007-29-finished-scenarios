// The room's showcase outside games (stage 4: no motion yet): its steps' standing layouts one after another, each a cut —
// Д1's tea by the letter on a clear morning; a finale's morning, the letter held out; «Минута»'s last
// frame, the cobweb swept; «Окно» on Monday, the coat drying on the stove; the open window in the rain
const lays = scene.lib.room(scene).layouts;
const steps = [
  { name: 'tea', keys: { sun: 1, rain: 0, dim: 0, cobweb: 1, coat_drying: false } },
  { name: 'letter', keys: { sun: 0, rain: 1, dim: 0, cobweb: 1, coat_drying: false } },
  { name: 'corner', keys: { sun: 0, rain: 1, dim: 0, cobweb: 0, coat_drying: false } },
  { name: 'monday', keys: { sun: 0, rain: 1, dim: 0, cobweb: 1, coat_drying: true } },
  { name: 'window', keys: { sun: 0, rain: 1, dim: 0, cobweb: 1, coat_drying: true } },
];
const values = st => ({ ...st.keys, moment: 'none', ...lays[st.name](st.keys.coat_drying) });
return steps.map(st => ({
  name: st.name,
  run: async s => {
    s.cut(values(st));
    await s.wait(5);
  },
}));
