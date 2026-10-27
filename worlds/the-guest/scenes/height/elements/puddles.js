// The meltwater lying in the hollows of the rock before the two: shallow pools, the sky in them. Seen from above
// (metres, from its centre); only the pools are painted, the rest left clear.
const pools = [[-1.4, 0.5, 0.5, 0.18, 0.2], [0.6, -0.2, 0.32, 0.12, -0.3], [1.8, 0.7, 0.42, 0.15, 0.1], [-0.4, -0.9, 0.26, 0.1, 0.4]];
for (const [x, y, rx, ry, r] of pools) {
  // a wet dark rim, then the water
  g.fillStyle = '#8c857a';
  g.beginPath();
  g.ellipse(x, y, rx + 0.08, ry + 0.06, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#6f7a86';
  g.beginPath();
  g.ellipse(x, y, rx, ry, r, 0, Math.PI * 2);
  g.fill();
}
