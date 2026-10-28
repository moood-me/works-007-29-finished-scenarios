// The lawn on this side of the water, seen from above (x across, y toward the viewer; its far edge at y −3.95 is the
// bank): grass in greens laid unevenly, a few daisies, and the gravel walk that comes along the water from the left and
// turns toward the eye, out at the near right — Mr Darcy stands on it a few steps behind, Elizabeth ahead, nearer
const L = e.kit.brush, px = L.px(e), r = L.rand(83);
const all = new Path2D();
all.rect(-30, -3.95, 60, 7.9);
L.wash(g, all, '#a2b37c', [-30, -3.95, 30, 3.95], r, 9);
// the walk: a band 2.3 m wide along a smooth curve, both of them standing well inside it (Darcy at −1.45, 0.65;
// Elizabeth at 0.1, 2.5)
const way = [[-30, -3.1], [-16, -2.5], [-8, -1.5], [-3.8, -0.55], [-1.6, 0.5], [0.1, 2.45], [1.4, 3.6], [2.2, 4.4]];
const pts = [];
for (let i = 0; i + 1 < way.length; i++) {
  const [x0, y0] = way[i], [x1, y1] = way[i + 1];
  for (let k = 0; k < 6; k++) { const u = k / 6; pts.push([x0 + (x1 - x0) * u, y0 + (y1 - y0) * u]); }
}
pts.push(way[way.length - 1]);
// (smoothed: each point the mean of its neighbours, twice)
for (let pass = 0; pass < 2; pass++) {
  for (let i = 1; i + 1 < pts.length; i++) pts[i] = [(pts[i - 1][0] + pts[i][0] * 2 + pts[i + 1][0]) / 4, (pts[i - 1][1] + pts[i][1] * 2 + pts[i + 1][1]) / 4];
}
const side = s => pts.map((p, i) => {
  const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [p[0] - (dy / l) * 1.15 * s, p[1] + (dx / l) * 1.15 * s];
});
const left = side(1), right = side(-1), walk = new Path2D();
walk.moveTo(...left[0]);
for (const p of left) walk.lineTo(...p);
for (let i = right.length - 1; i >= 0; i--) walk.lineTo(...right[i]);
walk.closePath();
L.wash(g, walk, '#e2d5b4', [-30, -3.95, 4, 3.95], r, 5, 0.06);
// (its edges in pen, broken here and there, as a quick hand leaves them)
const edges = new Path2D();
for (const line of [left, right]) {
  for (let i = 0; i + 1 < line.length; i++) {
    if (r() < 0.18) continue;
    edges.moveTo(...line[i]);
    edges.lineTo(...line[i + 1]);
  }
}
L.pen(g, edges, 1.6 * px, 0.55);
const gravel = new Path2D();
for (let i = 0; i < 420; i++) {
  const p = pts[Math.floor(r() * pts.length)], ox = (r() - 0.5) * 1.9, oy = (r() - 0.5) * 1.9, s = 0.012 + 0.012 * r();
  gravel.moveTo(p[0] + ox + s, p[1] + oy);
  gravel.arc(p[0] + ox, p[1] + oy, s, 0, Math.PI * 2);
}
g.fillStyle = 'rgba(176,160,124,0.55)';
g.fill(gravel);
// (how far a point of the lawn is from the walk's middle)
const offWalk = (x, y) => pts.reduce((d, p) => Math.min(d, Math.hypot(p[0] - x, p[1] - y)), Infinity);
// daisies in the grass, thicker nearer the eye
const daisies = new Path2D();
for (let i = 0; i < 160; i++) {
  const x = -14 + 28 * r(), y = -3.5 + 7.4 * r() ** 0.6;
  if (offWalk(x, y) < 1.4) continue;
  daisies.moveTo(x + 0.02, y);
  daisies.arc(x, y, 0.02, 0, Math.PI * 2);
}
g.fillStyle = '#f4efe0';
g.fill(daisies);
// the grass hatched with the pen: short strokes in tufts over the lawn, thicker toward the eye, none on the walk
const tufts = [];
for (let i = 0; i < 70; i++) {
  const x = -14 + 28 * r(), y = -3.6 + 7.4 * r() ** 0.7;
  if (offWalk(x, y) < 1.5) continue;
  tufts.push([x, y, 6 + Math.round(6 * r())]);
}
L.grass(g, tufts, 0.05, r, 1.3 * px, 0.4);
