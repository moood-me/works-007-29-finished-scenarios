// The yard's own mechanics (the game's keys):
//   `year` 1 — a year on (chapter 3): Jack grown (`jack_grown` without the suit bag), Dad grey (`dad_grey` without the
//   book), Mom not here; 0 — as they are. Set as the scene opens with it, and whenever it changes.
//   `view` — which way the eye looks: `house` (the scene's picture) or `street` — the camera rides `street_eye`, an
//   unseen anchor in the yard facing the street, so a piece's camera (camera_x/z, camera_target and the operator) works
//   in that turned frame as it does in the yard's own.
const cast = scene.kit.cast.characters;
function dress() {
  const year = scene.state.year;
  scene.set('jack_wear', year ? { ...cast.jack_grown, parts: [] } : null);
  scene.set('dad_wear', year ? { ...cast.dad_grey, parts: [] } : null);
  if (year) scene.set('mom_here', false);
}
const look = () => scene.set('camera_on', scene.state.view === 'street' ? 'street_eye' : null);
if (scene.state.year) dress();
if (scene.state.view === 'street') look();
scene.on('change', 'year', () => dress());
scene.on('change', 'view', () => look());
