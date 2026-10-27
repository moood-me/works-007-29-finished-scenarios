// The window's casement: two tall leaves of cream-painted wood, each with its glazing bars, a transom over them.
const w = 1.3;
const h = 1.85;
g.fillStyle = '#ece3cf';
g.beginPath();
g.rect(-w / 2, -h, w, h);
for (const [x0, x1] of [[-w / 2 + 0.06, -0.035], [0.035, w / 2 - 0.06]]) {
  for (const [y0, y1] of [[-h + 0.06, -h + 0.42], [-h + 0.48, -h + 0.95], [-h + 0.99, -h + 1.4], [-h + 1.44, -0.06]]) {
    for (const [a, b] of [[x0, (x0 + x1) / 2 - 0.016], [(x0 + x1) / 2 + 0.016, x1]]) g.rect(a, y0, b - a, y1 - y0);
  }
}
g.fill('evenodd');
g.fillStyle = '#bfa77c';
g.fillRect(-0.012, -h + 0.45, 0.024, 0.12);
