// The chamber's two moments (the key `moment`): who is here, where Mr Otis stands, what Virginia wears, whether the
// landing beyond the open panel is lit. Set at once, as the scene opens and whenever the moment changes.
//   family — the night he died (scenario 4.6): the whole family come in through the panel with candles; Virginia, in
//            her riding habit, kneels by the skeleton, Mr Otis by her; Mrs Otis and Washington by the panel; the
//            twins at the window.
//   father — the last night (4С.5): she has led him down the passage in the wall; Virginia, in her white frock, kneels,
//            Mr Otis stands in the passage mouth with his candle; nobody else; the landing dark.
const PLACES = {
  family: { otis: [1.6, 4.65, 225] },
  father: { otis: [1.7, 5.75, 200] },
};
function stage(moment) {
  const m = PLACES[moment] ? moment : 'family';
  const family = m === 'family';
  for (const id of ['mrs_otis', 'washington', 'twin_star', 'twin_stripes']) scene.set(`${id}_here`, family);
  const [a, d, turn] = PLACES[m].otis;
  scene.set('otis_a', a);
  scene.set('otis_d', d);
  scene.set('otis_turn', turn);
  scene.set('virginia_wear', family ? null : scene.kit.cast.characters.virginia);
  scene.set('landing', family ? 1 : 0);
}
stage(scene.state.moment);
scene.on('change', 'moment', v => stage(v));
