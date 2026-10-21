// A shallow puddle left on the setts near the viewer, from above (x across, y toward the viewer, metres; about
// 1.7 × 1.1): an uneven rounded shape — a mirror only where it is painted — holding the light sky in its own pale
// lilac (the mirror shows the yellow house and the lamps over it), its rim a little darker where the water thins
const n = 28, pts = [];
for (let i = 0; i < n; i++) {
  const a = (i / n) * Math.PI * 2, k = 1 + 0.16 * Math.sin(a * 3 + 0.7) + 0.09 * Math.sin(a * 5 + 2.1);
  pts.push([Math.cos(a) * 0.7 * k, Math.sin(a) * 0.45 * k]);
}
// (a smooth outline: through the midpoints between the points, each point its curve's control)
const shape = new Path2D(), mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], start = mid(pts[n - 1], pts[0]);
shape.moveTo(start[0], start[1]);
for (let i = 0; i < n; i++) {
  const m = mid(pts[i], pts[(i + 1) % n]);
  shape.quadraticCurveTo(pts[i][0], pts[i][1], m[0], m[1]);
}
shape.closePath();
g.fillStyle = '#cdc9da';
g.fill(shape);
g.strokeStyle = 'rgba(120,112,118,0.6)';
g.lineWidth = 0.05;
g.stroke(shape);
