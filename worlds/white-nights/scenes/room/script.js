// The room's mechanics: its pieces (the game sets `beat`: modules/beats, lib.film); the window's two leaves turned by
// `window` (0 shut … 1 open into the room), the door's leaf by `door` (0 shut … 1 wide open); the stage-4 standing
// layouts by `moment` (lib.MOMENTS: a piece's starting values, set at once).
const film = scene.lib.film(scene);
scene.kit.beats.play(scene, film);
const leaves = () => {
  const k = scene.get('window') ?? 0;
  scene.set('leaf_near_f', 90 + 80 * k);
  scene.set('leaf_far_f', 90 - 80 * k);
};
const door = () => scene.set('door_f', 180 - 90 * (scene.get('door') ?? 0.6));
scene.on('change', 'window', leaves);
scene.on('move', 'window', leaves);
scene.on('change', 'door', door);
scene.on('move', 'door', door);
leaves();
door();
const moment = name => {
  const m = scene.lib.MOMENTS[name];
  if (!m) return;
  const [piece, more] = m;
  for (const [k, v] of Object.entries({ ...film[piece].from(), ...(more ?? {}) })) scene.set(k, v);
};
scene.on('change', 'moment', v => moment(v));
moment(scene.get('moment'));
