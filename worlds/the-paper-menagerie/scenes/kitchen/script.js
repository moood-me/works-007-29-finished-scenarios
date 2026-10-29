// The kitchen's people as the time asks (the game's keys): `young` — the prologue, Jack at five (the cast's
// `jack_five`); `year` 1 — a year on (chapter 3): Jack grown (`jack_grown` without the suit bag), Dad grey (`dad_grey`
// without the book), Mom not here. Set as the scene opens with either, and whenever either changes.
const cast = scene.kit.cast.characters;
function dress() {
  const { young, year } = scene.state;
  scene.set('jack_wear', young ? { ...cast.jack_five } : year ? { ...cast.jack_grown, parts: [] } : null);
  scene.set('dad_wear', year ? { ...cast.dad_grey, parts: [] } : null);
  if (year) scene.set('mom_here', false);
}
if (scene.state.young || scene.state.year) dress();
scene.on('change', 'young', () => dress());
scene.on('change', 'year', () => dress());
