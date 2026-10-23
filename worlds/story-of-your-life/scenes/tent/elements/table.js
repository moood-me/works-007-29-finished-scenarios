// A folding army table seen from the front (metres from its foot, x −0.9…0.9): steel legs, a plywood edge; its back
// legs a part 0.7 m farther. The top itself is `table_top`.
const legs = c => {
  c.fillStyle = '#5e6062';
  c.fillRect(-0.86, -0.72, 0.04, 0.72);
  c.fillRect(0.82, -0.72, 0.04, 0.72);
};
e.part(0, 0.7, legs, [-0.9, -0.75, 0.9, 0.02]);
legs(g);
g.fillStyle = '#b8a27c';
g.fillRect(-0.9, -0.745, 1.8, 0.035);
g.fillStyle = '#5e6062';
g.fillRect(-0.86, -0.25, 1.72, 0.02);
