// The acquaintances' door, painted from its free edge (x −0.95, at its far side) to its hinges (x 0, toward the
// viewer), y −2.15 … 0 (drawn mirrored from its hinge): a panelled door in old bottle-green paint gone grey at the edges, six sunk panels, a brass
// handle and a brass plate at the height of the eyes (a name engraved — too small to read), a keyhole; its point
// `handle`
const INK = e.lib.INK;
g.save();
g.scale(-1, 1);
e.lib.box(g, 0, -2.15, 0.95, 2.15, '#56684f', 0.014);
e.lib.wash(g, 0, -2.15, 0.95, 2.15, [86, 104, 79], 21, 0.08, 0.35, 0.12);
for (const [y, h] of [[-2.05, 0.5], [-1.43, 0.62], [-0.68, 0.58]]) {
  for (const x of [0.09, 0.5]) {
    e.lib.box(g, x, y, 0.36, h, '#4c5d46', 0.008);
    e.lib.hatch(g, x, y, 0.04, h, 0.02, 0.25, 0.003);
  }
}
e.lib.box(g, 0.32, -1.62, 0.3, 0.09, '#c8a557', 0.006);
g.beginPath();
for (const y of [-1.59, -1.56]) { g.moveTo(0.36, y); g.lineTo(0.58, y); }
g.strokeStyle = 'rgba(74,63,58,0.6)';
g.lineWidth = 0.005;
g.stroke();
g.fillStyle = '#c8a557';
g.beginPath();
g.arc(0.84, -1.0, 0.035, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
g.fillStyle = '#2a2420';
g.fillRect(0.835, -0.9, 0.012, 0.04);
g.restore();
e.at(-0.84, -1.0, 'handle');
