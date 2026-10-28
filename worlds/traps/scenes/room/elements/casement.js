// The window shut: two casements of white-painted wood, three panes each, the brass catch turned down.
const w = 0.9;
const h = 1.35;
g.fillStyle = '#e8e2d2';
g.beginPath();
g.rect(-w / 2, -h, w, h);
for (const [x0, x1] of [[-w / 2 + 0.05, -0.03], [0.03, w / 2 - 0.05]]) {
  for (const [y0, y1] of [[-h + 0.05, -h + 0.45], [-h + 0.48, -h + 0.88], [-h + 0.91, -0.05]]) g.rect(x0, y0, x1 - x0, y1 - y0);
}
g.fill('evenodd');
g.fillStyle = '#bfa77c';
g.fillRect(-0.01, -h + 0.62, 0.02, 0.1);
