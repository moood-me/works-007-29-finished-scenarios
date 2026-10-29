// The two paper goats out of the shelf, the whole house awake (`zoo`): green with white dots, white with blue stripes,
// walking where the keys goats_a, goats_d, goats_e put them (the sill, the quilt). Each goat a layer the animate
// moves: a short hop now and then, the head up.
if (e.state.zoo) {
  e.layer('goat0', { pivot: [-0.1, 0] }, l => e.lib.goat(l, -0.1, 1, '#9cc49a', '#7aa679', '#eef3e6'));
  e.layer('goat1', { pivot: [0.12, 0] }, l => e.lib.goat(l, 0.12, -1, '#f2efe6', '#d9d6ce', '#6f8fbd'));
  e.at(0, -0.1, 'goats');
}
