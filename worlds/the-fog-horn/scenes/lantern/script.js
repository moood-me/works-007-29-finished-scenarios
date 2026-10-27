// The great lamp turns on and on, as a lighthouse's does: a turn every 14 s, its two beams half a turn apart (the
// lights `beam_a`, `beam_b` turned by `beam`, `beam_b`). It goes on from wherever the state has them.
const turn = () => {
  const b = scene.get('beam') + 360;
  scene.move('beam', b, { over: 14, ease: 'linear' });
  scene.move('beam_b', b + 180, { over: 14, ease: 'linear' });
};
turn();
scene.every(14, turn);
