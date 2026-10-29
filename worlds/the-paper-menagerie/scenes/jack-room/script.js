// Jack's room: its moments (the key `moment`, with what the menagerie's choice left, `menagerie`) — the room's light,
// what stands where, who is here and how — set at once whenever `moment` changes, and as the scene opens with no piece
// named (lib.moment; notes.md has the table); `menagerie` changing re-stages the moment only while no piece has been
// played (a game playing pieces names `menagerie` as the pieces' variant). `young` dresses Jack as five (the prologue).
// And its pieces (the game sets `beat`: modules/beats, lib.film).
const stage = () => {
  const k = scene.lib.moment(scene.kit.cast.characters, scene.state.moment, scene.state.menagerie);
  for (const key in k) scene.set(key, k[key]);
};
if (!scene.get('beat')) stage();
scene.on('change', 'moment', () => stage());
scene.on('change', 'menagerie', () => {
  if (!scene.get('beat')) stage();
});
scene.on('change', 'young', v => scene.set('jack_wear', v ? scene.kit.cast.characters.jack_five : null));
scene.kit.beats.play(scene, scene.lib.film(scene));
