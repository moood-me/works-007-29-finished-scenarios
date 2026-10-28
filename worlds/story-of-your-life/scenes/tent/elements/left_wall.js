// The tent's left wall, from its foot (x along it away from the viewer, −3.5…3.5; 2.3 m to the eaves): canvas, the
// frame's posts, and the semagrams pinned up in rows — a month of work.
e.lib.canvas(g, e, -3.5, -2.32, 3.5, 0.02, 1.6);
g.fillStyle = '#9a9890';
for (const x of [-3.5, -1.1, 1.2, 3.43]) g.fillRect(x, -2.32, 0.07, 2.34);
let seed = 30;
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 7; col++) {
    if ((row === 2 && col > 4) || e.rnd() < 0.12) continue;
    seed++;
    e.lib.sheet(g, -2.9 + col * 0.78 + (e.rnd() - 0.5) * 0.06, -2.05 + row * 0.62 + (e.rnd() - 0.5) * 0.05, 0.4, 0.52, seed, (e.rnd() - 0.5) * 0.08);
  }
}
