// The lightning's white in the great window (`flash`): a cold white over the six lights, laid on the painted glass as
// light. One layer; the animate shows it by the key (its light through the room is the scene's `lightning`).
e.layer('flash', { blend: 'add' }, f => {
  f.fillStyle = '#c8d6ff';
  for (const [x0, x1] of [[-1.45, -0.65], [-0.55, 0.15], [0.25, 1.05]]) for (const [y0, y1] of [[-3.05, -2.33], [-2.25, -0.95]]) f.fillRect(x0, y0, x1 - x0, y1 - y0);
});
