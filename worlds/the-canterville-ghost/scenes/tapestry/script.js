// The chamber's mechanics: its pieces (the game sets `beat`: modules/beats, lib.film); the two leaves of the wall
// behind the tapestry turned by `wall`; Sir Simon's own light kept just before him (seated or standing) and out while
// he is away; his candle-end in his hand by `stub` "hand"; the light of Washington's lantern while he holds it.
const L = scene.lib;
scene.kit.beats.play(scene, L.film(scene));

const leaves = () => {
  const w = scene.get('wall') ?? 0;
  scene.set('wall_lf', 180 - 85 * w);
  scene.set('wall_rf', 180 + 85 * w);
};
// his light 0.6 m before him toward the viewer: over the seat while he sits there, else before where he stands
const ghost = () => {
  const on = scene.get('simon_on');
  const seated = Array.isArray(on);
  const a = seated ? on[0] : scene.get('simon_a');
  const d = seated ? on[1] : scene.get('simon_d');
  scene.set('ghost_a', a - 0.05);
  scene.set('ghost_d', d - (seated ? 0.72 : 0.6));
};
const away = () => scene.set('ghost_light', scene.get('simon_here') === false ? 0 : 1);
const stub = (v, was) => {
  if (v === 'hand') scene.set('simon_with', ['stub']);
  else if (was === 'hand') scene.set('simon_with', []);
};
const lantern = () => {
  const w = scene.get('washington_with');
  scene.set('lantern_held', Array.isArray(w) && w.includes('lantern') ? 1 : 0);
};

for (const k of ['wall']) {
  scene.on('change', k, leaves);
  scene.on('move', k, leaves);
}
for (const k of ['simon_a', 'simon_d', 'simon_on']) {
  scene.on('change', k, ghost);
  scene.on('move', k, ghost);
}
scene.on('change', 'simon_here', away);
let was = scene.get('stub');
scene.on('change', 'stub', v => {
  stub(v, was);
  was = v;
});
scene.on('change', 'washington_with', lantern);
leaves();
ghost();
away();
if (was === 'hand') stub('hand', null);
lantern();
