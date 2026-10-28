// The table's top, seen from above (x −0.9…0.9, y −0.35…0.35): plywood, papers spread on it, a notebook, a pencil.
g.fillStyle = '#c2ad86';
g.fillRect(-0.9, -0.35, 1.8, 0.7);
const paper = (x, y, a, seed) => {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = '#eeebe2';
  g.fillRect(-0.105, -0.15, 0.21, 0.3);
  e.lib.semagram(g, 0, 0, 0.16, seed);
  g.restore();
};
paper(-0.55, 0.05, 0.2, 41);
paper(-0.3, 0.12, -0.1, 42);
paper(0.15, 0.14, 0.05, 43);
g.fillStyle = '#3d4a5c';
g.fillRect(-0.75, -0.25, 0.22, 0.16);
g.fillStyle = '#c9a23a';
g.save();
g.translate(-0.1, -0.05);
g.rotate(0.6);
g.fillRect(-0.09, -0.004, 0.18, 0.008);
g.restore();
