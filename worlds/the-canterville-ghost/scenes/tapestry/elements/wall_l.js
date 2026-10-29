// The left leaf of the wall behind the tapestry (0.6 m wide, 2.9 m high), hinged at its left edge (x −2.0): the same plaster,
// dado and tapestry as the far wall round it (the lib's wall and tapestry, drawn at the far wall's own place), so that
// shut it is the wall. The tapestry hangs on it as a layer from its rod: it stirs as `stir` says (its animate), and the
// leaf swings back into the dark as `wall` opens (the scene's script turns it).
g.save();
g.beginPath();
g.rect(0, -2.92, 0.6, 2.96);
g.clip();
g.translate(2.0, 0);
e.lib.wall(g, -3.25, 3.25, 3.1);
g.restore();
e.layer('hang', { pivot: [(0 + 0.6) / 2, -2.85] }, l => {
  l.save();
  l.beginPath();
  l.rect(0, -2.92, 0.6, 2.96);
  l.clip();
  l.translate(2.0, 0);
  e.lib.tapestry(l, e, -3.1, -2.85, 0.25, -0.98, 1);
  l.restore();
});
