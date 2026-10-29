// The shelf over the bed's head (its anchor the board's top at the middle, 1.25 m up; x −0.6…0.6): a plain board on
// two brackets. On it, by the key `shelf`: `animals` — the leaning books, the two goats (green with white dots; white
// with blue stripes), the deer of gold-brown paper, the kraft-paper buffalo, and Jack's wind-up robot (from the
// Christmas of the prologue, one leg glued back crooked); `deer` — the goats and the buffalo are out in the room (the
// whole house awake): the deer alone with the books and the robot; `empty` — the animals packed away: the books and
// the robot; `bare` — nothing, the room emptied, the dust's outlines where things stood. Each animal is a layer of its
// own that the animate ticks now and then, a little stiffly, as paper moves. Its right end (x 0.35) is left clear: where
// Laohu stands when he is on the shelf.
const st = e.state.shelf;
g.fillStyle = '#b8895a';
g.fillRect(-0.6, 0, 1.2, 0.035);
g.fillStyle = 'rgba(255,230,190,0.25)';
g.fillRect(-0.6, 0, 1.2, 0.008);
g.fillStyle = '#9a7552';
g.fillRect(-0.45, 0.035, 0.03, 0.08);
g.fillRect(0.42, 0.035, 0.03, 0.08);
if (st === 'bare') {
  g.fillStyle = 'rgba(255,255,255,0.18)';
  for (const [x, w] of [[-0.58, 0.12], [-0.4, 0.3], [-0.06, 0.14], [0.13, 0.16], [0.44, 0.1]]) g.fillRect(x, -0.004, w, 0.004);
} else {
  // the books, leaning
  for (const [x, w, h, c, a] of [[-0.58, 0.03, 0.2, '#7a3b34', 0], [-0.55, 0.035, 0.18, '#3f5d8c', 0], [-0.515, 0.03, 0.19, '#5d7a4a', 0.18]]) {
    g.save();
    g.translate(x, 0);
    g.rotate(a);
    g.fillStyle = c;
    g.fillRect(0, -h, w, h);
    g.fillStyle = 'rgba(240,220,160,0.6)';
    g.fillRect(0, -h + 0.02, w, 0.008);
    g.restore();
  }
  // the robot: tin, red and silver, a key in its back, one leg glued back crooked
  g.fillStyle = '#b9bcc0';
  g.fillRect(0.47, -0.15, 0.07, 0.08);
  g.fillStyle = '#c4433a';
  g.fillRect(0.465, -0.2, 0.08, 0.055);
  g.fillStyle = '#f2d36a';
  g.fillRect(0.48, -0.185, 0.015, 0.012);
  g.fillRect(0.515, -0.185, 0.015, 0.012);
  g.fillStyle = '#8a8d92';
  g.fillRect(0.48, -0.07, 0.018, 0.07);
  g.save();
  g.translate(0.515, -0.07);
  g.rotate(0.15);
  g.fillRect(0, 0, 0.018, 0.07);
  g.restore();
  g.fillStyle = 'rgba(250,250,240,0.7)';
  g.fillRect(0.506, -0.07, 0.022, 0.008);
  g.fillStyle = '#a9894a';
  g.fillRect(0.545, -0.14, 0.025, 0.01);
  e.at(0.505, -0.12, 'robot');
  if (st === 'animals') {
    e.layer('goat0', { pivot: [-0.38, 0] }, l => e.lib.goat(l, -0.38, 1, '#9cc49a', '#7aa679', '#eef3e6'));
    e.layer('goat1', { pivot: [-0.2, 0] }, l => e.lib.goat(l, -0.2, -1, '#f2efe6', '#d9d6ce', '#6f8fbd'));
    e.layer('buffalo', { pivot: [0.2, 0] }, l => e.lib.buffalo(l, 0.2, -1));
    e.at(-0.29, -0.1, 'goats');
    e.at(0.2, -0.07, 'buffalo');
  }
  if (st === 'animals' || st === 'deer') {
    e.layer('deer', { pivot: [0.0, 0] }, l => e.lib.deer(l, 0.0, 1));
    e.at(0.0, -0.13, 'deer');
  }
}
