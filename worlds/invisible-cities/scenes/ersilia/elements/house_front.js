// The front of the house they took apart, facing the viewer (painted from its left corner, x 0, to its right, 5.2):
// corner posts, the sill and the wall plate, the empty doorway's posts and lintel, a window frame with nothing in it,
// a few weathered boards left standing — between them the steppe shows through. Its roof is the trusses' and the ridge's.
const post = '#5f4f3f';
const beam = '#6d5b47';
g.fillStyle = post;
for (const x of [0, 5.04]) g.fillRect(x, -2.75, 0.16, 2.75);
g.fillRect(1.5, -2.1, 0.12, 2.1);
g.fillRect(2.42, -2.1, 0.12, 2.1);
g.fillStyle = beam;
g.fillRect(0, -0.32, 5.2, 0.18);
g.fillRect(0, -2.78, 5.2, 0.16);
g.fillRect(1.5, -2.18, 1.04, 0.1);
// the boards left on the right of the doorway, some gone, some broken off short
for (let i = 0; i < 13; i++) {
  const x = 2.6 + i * 0.185;
  if (x > 4.95) break;
  const r = e.rnd();
  if (r < 0.3) continue;
  const top = r < 0.45 ? -1.0 - e.rnd() * 0.8 : -2.62;
  g.fillStyle = e.rnd() < 0.5 ? '#8a7860' : '#7e6c56';
  g.fillRect(x, top, 0.17, -0.32 - top);
}
// a few on the left, low
for (let i = 0; i < 6; i++) {
  const x = 0.18 + i * 0.2;
  const top = -0.6 - e.rnd() * 0.9;
  g.fillStyle = e.rnd() < 0.5 ? '#8a7860' : '#7e6c56';
  g.fillRect(x, top, 0.18, -0.32 - top);
}
// the window frame, empty
g.strokeStyle = beam;
g.lineWidth = 0.08;
g.strokeRect(3.45, -1.95, 0.9, 0.85);
e.at(2.0, -1.2, 'door');
