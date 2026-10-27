// The ward's chair by the window, turned with Dad toward the bed (its anchor the seat's front edge): a steel-tube
// frame, a brown vinyl seat and back. The front legs and the seat's edge here; the back legs and the back 0.4 m
// behind (a part).
const tube = '#a7aaa8',
  vinyl = '#6b4f3c';
g.fillStyle = tube;
g.fillRect(-0.22, -0.46, 0.025, 0.46);
g.fillRect(0.195, -0.46, 0.025, 0.46);
g.fillStyle = vinyl;
g.fillRect(-0.23, -0.5, 0.46, 0.06);
e.part(
  0,
  0.4,
  p => {
    p.fillStyle = tube;
    p.fillRect(-0.22, -0.9, 0.025, 0.9);
    p.fillRect(0.195, -0.9, 0.025, 0.9);
    p.fillStyle = vinyl;
    p.fillRect(-0.22, -0.88, 0.44, 0.26);
    p.fillStyle = 'rgba(255,255,255,0.08)';
    p.fillRect(-0.2, -0.86, 0.4, 0.04);
  },
  [-0.26, -0.92, 0.26, 0.02],
);
