// A side of the house, seen along it (painted from its back corner, x 0, toward the viewer, 4.5): the middle post,
// the sill and the wall plate, a few boards by the back corner (copies: the left side and the right)
g.fillStyle = '#5f4f3f';
g.fillRect(0, -2.75, 0.16, 2.75);
g.fillRect(2.2, -2.75, 0.14, 2.75);
g.fillStyle = '#6d5b47';
g.fillRect(0, -0.32, 4.5, 0.18);
g.fillRect(0, -2.78, 4.5, 0.16);
for (let i = 0; i < 6; i++) {
  const x = 0.18 + i * 0.19;
  const top = e.rnd() < 0.5 ? -2.62 : -1.2 - e.rnd() * 1.0;
  g.fillStyle = e.rnd() < 0.5 ? '#8a7860' : '#7e6c56';
  g.fillRect(x, top, 0.18, -0.32 - top);
}
