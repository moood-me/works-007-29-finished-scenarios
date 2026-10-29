// Roblet where his spot key puts him (roblet_spot; the places are lib.js's SPOTS, so a piece's `from` sets the spot
// and the same values): his place, his turn, what he does — laid out at once as the scene opens and whenever it
// changes. Who is here, where he looks and his face are the game's, never set here.
//   front — before the gate, his cap in his hands, his packed box at his feet; engine — at the plane's engine, the
//   cowling; chocks — by the plane's wheel, at the chocks
const { SPOTS } = scene.lib;
function place(spot) {
  const p = SPOTS[spot] ?? SPOTS.front;
  scene.set('roblet_a', p.at[0]);
  scene.set('roblet_d', p.at[1]);
  scene.set('roblet_turn', p.turn);
  scene.set('roblet_do', p.does);
}
place(scene.state.roblet_spot);
scene.on('change', 'roblet_spot', v => place(v));
// The floodlights one by one (stage 5): as `floods` (the game's, smooth) passes ⅓, ⅔ and 1 each mast comes on at once
// (flood_0…flood_2 — its lamps and its light); going down they go out the same way.
const masts = () => {
  const f = scene.get('floods') ?? 0;
  [1 / 3, 2 / 3, 1].forEach((t, i) => {
    const on = f >= t - 0.001 ? 1 : 0;
    if (scene.get(`flood_${i}`) !== on) scene.set(`flood_${i}`, on);
  });
};
scene.on('change', 'floods', masts);
scene.on('move', 'floods', masts);
masts();
// The field's pieces: the game sets `beat` (modules/beats; lib.film; notes.md «Pieces»).
scene.kit.beats.play(scene, scene.lib.film(scene));
