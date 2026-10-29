// Roblet where his spot key puts him (roblet_spot): his place, his turn, what he does — laid out at once as the scene
// opens and whenever it changes. Who is here, where he looks and his face are the game's, never set here.
//   front — before the gate, his cap in his hands, his packed box at his feet; engine — at the plane's engine, the
//   cowling; chocks — by the plane's wheel, at the chocks
const SPOTS = {
  front: { at: [-0.75, 3.45], turn: 165, does: 'hold_low' },
  engine: { at: [-1.3, 12.0], turn: 150, does: 'stand_easy' },
  chocks: { at: [-0.4, 12.6], turn: 190, does: 'hold_low' },
};
function place(spot) {
  const p = SPOTS[spot] ?? SPOTS.front;
  scene.set('roblet_a', p.at[0]);
  scene.set('roblet_d', p.at[1]);
  scene.set('roblet_turn', p.turn);
  scene.set('roblet_do', p.does);
}
place(scene.state.roblet_spot);
scene.on('change', 'roblet_spot', v => place(v));
