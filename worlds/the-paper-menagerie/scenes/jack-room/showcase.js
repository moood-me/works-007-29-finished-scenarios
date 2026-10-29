// Jack's room through its moments, each set at once (the scene's script stages it): the last night of chapter 1, the
// prologue's bedtime, the evening he ran from the yard and Mom at his door, the whole house awake, the box carried to
// the attic hatch, and the house sold years later — the box down from the attic, Laohu alone on the bare shelf, Dad in
// the doorway with a paper frog. Who is in each and their faces are the scenario's (lib.js `moment`: here, moods) —
// in a game, the game's. Nobody moves but a look; the animals breathe and stir.
const PEOPLE = ['jack', 'mom', 'dad'];
const at = (moment, menagerie) => async s => {
  s.set('menagerie', menagerie);
  s.set('moment', moment);
  const { here, moods } = s.lib.moment(moment, menagerie);
  for (const id of PEOPLE) {
    s.person(id).here(here.includes(id));
    if (moods[id]) s.person(id).mood(moods[id]);
  }
  await s.wait(5);
};
return [
  { name: 'the last night', run: at('night', 'shelf') },
  { name: 'bedtime', run: at('bedtime', 'shelf') },
  { name: 'he ran', run: at('ran', 'shelf') },
  { name: 'she calls him', run: at('call', 'shelf') },
  { name: 'the whole house', run: at('night', 'house') },
  { name: 'to the attic', run: at('hatch', 'attic') },
  { name: 'sold: the box down', run: at('packed', 'attic') },
  { name: 'sold: Laohu on the shelf', run: at('packed', 'laohu') },
  { name: 'sold: Dad with a frog', run: at('packed', 'house') },
];
