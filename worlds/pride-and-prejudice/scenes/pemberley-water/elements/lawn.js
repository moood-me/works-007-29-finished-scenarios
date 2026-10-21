// The lawn on this side of the water, seen from above (x across, y toward the viewer; its far edge at y −3.95 is the
// bank): grass in greens laid unevenly, a few daisies, and the gravel walk that comes in from the left and runs along
// the water toward the bridge — Elizabeth and Mr Darcy both stand on it
const L = e.lib, r = L.rand(83);
const all = new Path2D();
all.rect(-30, -3.95, 60, 7.9);
L.wash(g, all, '#a2b37c', [-30, -3.95, 30, 3.95], r, 9);
// the walk: a band 1.7 m wide along a smooth curve
const way = [[-16, 3.95], [-9, 2.6], [-4, 1.2], [-1.3, 0.45], [1.5, -0.2], [5, -1.0], [10, -1.9], [20, -2.7], [30, -3.1]];
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
  return [p[0] - (dy / l) * 0.85 * s, p[1] + (dx / l) * 0.85 * s];
});
const left = side(1), right = side(-1), walk = new Path2D();
walk.moveTo(...left[0]);
for (const p of left) walk.lineTo(...p);
for (const p of right.reverse()) walk.lineTo(...p);
walk.closePath();
L.wash(g, walk, '#e0d3b2', [-16, -3.2, 30, 3.95], r, 4, 0.05);
const gravel = new Path2D();
for (let i = 0; i < 420; i++) {
  const p = pts[Math.floor(r() * pts.length)], ox = (r() - 0.5) * 1.5, oy = (r() - 0.5) * 1.5, s = 0.012 + 0.012 * r();
  gravel.moveTo(p[0] + ox + s, p[1] + oy);
  gravel.arc(p[0] + ox, p[1] + oy, s, 0, Math.PI * 2);
}
g.fillStyle = 'rgba(176,160,124,0.55)';
g.fill(gravel);
// daisies in the grass, thicker nearer the eye
const daisies = new Path2D();
for (let i = 0; i < 160; i++) {
  const x = -14 + 28 * r(), y = -3.5 + 7.4 * r() ** 0.6;
  if (Math.abs(y - (0.45 - (x + 1.3) * 0.28)) < 1.1) continue;
  daisies.moveTo(x + 0.02, y);
  daisies.arc(x, y, 0.02, 0, Math.PI * 2);
}
g.fillStyle = '#f4efe0';
g.fill(daisies);
