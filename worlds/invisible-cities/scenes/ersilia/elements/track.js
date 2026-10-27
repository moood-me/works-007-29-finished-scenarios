// The railway going away from the viewer to the horizon, seen from above: a bed of grey-brown ballast, the sleepers
// across it (drawn as far as one can tell them apart, then the bed's own darker band), the two rails with their worn
// tops. 1500 m long; the plane's origin is its middle, y toward the viewer.
const L = 750;
g.fillStyle = '#857867';
g.fillRect(-1.6, -L, 3.2, 2 * L);
g.fillStyle = '#5d5044';
g.fillRect(-1.25, -L, 2.5, 2 * L - 160);
for (let y = L - 160; y < L; y += 0.62) {
  g.fillStyle = e.rnd() < 0.5 ? '#54473b' : '#4a3f35';
  g.fillRect(-1.25, y, 2.5, 0.24);
}
for (const x of [-0.75, 0.75]) {
  g.fillStyle = '#6a6460';
  g.fillRect(x - 0.04, -L, 0.08, 2 * L);
  g.fillStyle = '#c9c0b4';
  g.fillRect(x - 0.025, -L, 0.05, 2 * L);
}
