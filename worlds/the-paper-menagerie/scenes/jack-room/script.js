// Jack's room: its moments (the key `moment`) and what the menagerie's choice left (the key `menagerie`) — the room's
// light, what stands where, where its people are and what they do — set by a cut as the scene opens and whenever
// either changes. Each moment is one of the scenario's (lib.js `moment`; notes.md has the table). The game sets
// `moment` and `menagerie`, who is here and their moods (`<id>_here`, `<id>_mood` — the game's, not set here), then,
// if it likes, any key over them.
//   bedtime — the prologue's night (П.4): Jack sitting up on his bed with Laohu by him, Mom sitting by his pillow.
//   night   — chapter 1's last night (1.6): Jack on his bed over the empty shoe box, the animals on the shelf, Laohu
//             taped on the pillow; with `menagerie` set, as each choice leaves the room.
//   hatch   — the same night: the box shut on the stool under the open attic hatch in the hall, Jack under it.
//   ran     — 1.4 after «Убежать», at dusk: Jack at his window, the scraps on the sill; Dad at his shut door with the
//             plate of buns.
//   call    — 1.5 after «Убежать», in the evening: Mom at his open door; Jack by the window with the scraps.
//   packed  — chapter 3 (3.2), the house sold: the room emptied, cartons, day; Jack grown; by `menagerie` the box down
//             from the attic with the dusty animals and Laohu out of it, or Laohu alone on the bare shelf (and with
//             «весь дом» Dad in the doorway with a paper frog).
// `menagerie`: shelf — not chosen yet; attic (0), laohu (1), house (2) — the game's «Зверинец».
// A moment is a new shot: its values are set by a cut, so that its people are put where it has them, not walked there.
// `young` (the prologue): Jack at five (the cast's jack_five), whatever the moment but chapter 3's.
function stage() {
  const k = scene.lib.moment(scene.state.moment, scene.state.menagerie).keys;
  if (scene.state.young && scene.state.moment !== 'packed') k.jack_wear = scene.kit.cast.characters.jack_five;
  scene.cut(k);
}
stage();
scene.on('change', 'moment', () => stage());
scene.on('change', 'menagerie', () => stage());
scene.on('change', 'young', () => stage());
// its pieces (the game sets `beat`: modules/beats, lib.film) — a piece's start is cut to after the moment's
scene.kit.beats.play(scene, scene.lib.film(scene));
