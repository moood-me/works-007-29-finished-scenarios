// The ward's own mechanics (the game's key `view`): `room` — the ward (the scene's picture); `corridor` — the camera
// rides `corridor_eye`, an unseen anchor out in the hospital corridor looking down it, the corridor's lamps on; a
// piece's camera (camera_x/z, camera_target and the operator) works in that frame as it does in the ward's own.
function look() {
  const out = scene.state.view === 'corridor';
  scene.set('camera_on', out ? 'corridor_eye' : null);
  scene.set('corridor_lights', out ? 1 : 0);
}
if (scene.state.view === 'corridor') look();
scene.on('change', 'view', () => look());
