// The right wall (its +x runs to the front: x −2.92 at the back wall, 2.92 at the open front): the doorway to the
// landing near the back (x −1.95…−0.65, 2.6 m high), cut through, under a gilt pediment; silk panels between
// pilasters toward the front.
const { GILT } = e.lib;
e.lib.wall(g, -2.95, 2.95, [[-0.32, 1.07], [1.33, 2.72]]);
for (const x of [-2.85, -0.45, 1.2, 2.85]) e.lib.pilaster(g, x);
g.fillStyle = '#f2ecdc';
g.fillRect(-2.07, -2.72, 1.54, 2.72);
g.fillStyle = GILT;
g.fillRect(-2.13, -2.78, 1.66, 0.06);
g.beginPath();
g.moveTo(-2.18, -2.8);
g.lineTo(-1.3, -3.08);
g.lineTo(-0.42, -2.8);
g.closePath();
g.fill();
g.fillStyle = '#f2ecdc';
g.beginPath();
g.moveTo(-1.98, -2.83);
g.lineTo(-1.3, -3.02);
g.lineTo(-0.62, -2.83);
g.closePath();
g.fill();
g.globalCompositeOperation = 'destination-out';
g.fillRect(-1.95, -2.6, 1.3, 2.65);
g.globalCompositeOperation = 'source-over';
e.at(-1.3, -1.3, 'door');
