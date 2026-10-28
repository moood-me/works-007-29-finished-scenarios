// The town below the third floor, from above (metres, its middle at distance 220, y toward the viewer — distance d is
// y 220 − d): the hospital garden under the window (d 6…30: lawn, a path, a bench), then the street and the town's
// blocks — dark roofs, streets between them —, the street lamps lit along two of them.
g.fillStyle = '#3e4352';
g.fillRect(-350, -210, 700, 420);
for (let i = 0; i < 260; i++) {
  const x = -300 + e.rnd() * 600,
    y = -200 + e.rnd() * 380;
  g.fillStyle = e.rnd() < 0.5 ? '#474b5c' : '#353948';
  g.fillRect(x, y, 6 + e.rnd() * 18, 5 + e.rnd() * 14);
}
g.fillStyle = '#5c5e66';
for (const y of [160, 110, 40]) g.fillRect(-350, y, 700, 8);
for (const x of [-120, -60, -10, 50]) g.fillRect(x, -210, 7, 400);
// the hospital garden: lawn, a gravel path, a bench
g.fillStyle = '#5f6e4c';
g.fillRect(-60, 190, 120, 25);
g.fillStyle = '#9d9483';
g.fillRect(-60, 199, 120, 2.2);
g.fillRect(-14, 190, 2.2, 25);
g.fillStyle = '#6a5240';
g.fillRect(-9, 202, 2.2, 0.6);
// the street lamps along the near street and one going off into the town
for (let i = 0; i < 12; i++) e.light(-90 + i * 14, 163, 1.6, '#ffc979', 0.9, `lamp${i}`);
for (let i = 0; i < 8; i++) e.light(-56, 150 - i * 22, 1.6, '#ffc979', 0.8, `far${i}`);
