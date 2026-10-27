// The stream of forgetting from above (x across, y toward the viewer; metres from the plane's middle — 30 m right,
// 76 m ahead): it comes in from the left close before the viewer, runs past the bank where Eurydice sits, turns away
// and goes off across the meadow to the right, toward the foot of the stair in the far wall. Its water is pale and
// light, as if lit from below — it glows (the element "glows"): a light of its own in the dark meadow; a narrow dark
// muddy edge along both banks. It widens as it goes (far off it would read as a thread). Its shader makes the light in
// it flow away from the viewer.
const A0 = 30, D0 = 76;
const P = [[-14, 3.4], [-6, 4.2], [-2, 4.6], [1.5, 5.0], [4, 6.0], [6, 8], [8, 12], [12, 20], [20, 35], [32, 60], [50, 100], [75, 150]];
// (points along the smooth curve through the polyline's midpoints, in the world's metres)
const pts = [P[0]];
for (let i = 1; i < P.length - 1; i++) {
  const s = pts[pts.length - 1], [cx, cy] = P[i], [nx, ny] = P[i + 1], ex = i === P.length - 2 ? nx : (cx + nx) / 2, ey = i === P.length - 2 ? ny : (cy + ny) / 2;
  const n = Math.ceil(Math.hypot(ex - s[0], ey - s[1]) / 0.4);
  for (let k = 1; k <= n; k++) {
    const u = k / n, v = 1 - u;
    pts.push([v * v * s[0] + 2 * v * u * cx + u * u * ex, v * v * s[1] + 2 * v * u * cy + u * u * ey]);
  }
}
g.lineCap = 'round';
// the banks' dark edge, then the water, then its pale middle
for (const [w, colour] of [[1.6, '#27302f'], [1.15, '#7d8fbc'], [0.5, '#b4c3e4']]) {
  g.strokeStyle = colour;
  for (let i = 1; i < pts.length; i++) {
    const [a0, d0] = pts[i - 1], [a1, d1] = pts[i];
    g.lineWidth = w * (1 + Math.max(0, d1 - 8) / 45);
    g.beginPath();
    g.moveTo(a0 - A0, D0 - d0);
    g.lineTo(a1 - A0, D0 - d1);
    g.stroke();
  }
}
