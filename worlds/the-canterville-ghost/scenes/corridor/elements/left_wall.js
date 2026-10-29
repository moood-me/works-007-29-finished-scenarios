// The corridor's left wall (13.4 m along it, from 0.7 m to 14.1 m away, +x running away from the viewer: x = its
// distance − 7.4): three tall windows (x −5.8…−4.6, −1.8…−0.6, 4.0…5.2, from 0.9 m to 3.0 m — their leading is the
// element window), the parents' door (x −3.4…−2.4, 2.2 m high — its leaf is door_parents) and the corner — the wide
// opening into the side passage (x 1.2…2.8, 2.9 m high) — all cut through.
e.lib.wall(g, -6.7, 6.7, 3.6);
// the windows' sills
g.fillStyle = e.lib.STONE_DARK;
for (const x0 of [-5.8, -1.8, 4.0]) g.fillRect(x0 - 0.16, -0.92, 1.52, 0.07);
for (const x0 of [-5.8, -1.8, 4.0]) e.lib.opening(g, x0, x0 + 1.2, -3.0, -0.9, 0.3);
e.lib.opening(g, -3.4, -2.4, -2.2, 0, 0.28);
// the corner: plain dressed stone quoins up its near edge, the opening square-headed under a beam
g.fillStyle = e.lib.STONE;
for (let i = 0; i < 8; i++) g.fillRect(i % 2 ? 1.05 : 0.96, -0.36 * i - 0.34, i % 2 ? 0.15 : 0.24, 0.32);
g.fillStyle = e.lib.OAK_DARK;
g.fillRect(1.0, -3.12, 2.0, 0.22);
g.globalCompositeOperation = 'destination-out';
g.fillRect(1.2, -2.9, 1.6, 2.92);
g.globalCompositeOperation = 'source-over';
