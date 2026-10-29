// The window seat built into the great window's embrasure, from before (2.9 m wide, 0.5 m high): panelled oak, a
// faded green cushion along its top. Its point `sill`: where she sits on it, toward its right end.
g.fillStyle = e.lib.OAK;
g.fillRect(-1.45, -0.5, 2.9, 0.5);
g.strokeStyle = e.lib.OAK_DARK;
g.lineWidth = 0.02;
for (let x = -1.4; x < 1.4; x += 0.48) g.strokeRect(x + 0.03, -0.42, 0.42, 0.32);
g.fillStyle = e.lib.OAK_DARK;
g.fillRect(-1.45, -0.08, 2.9, 0.08);
g.fillStyle = '#4c5e44';
g.fillRect(-1.42, -0.56, 2.84, 0.07);
e.at(0.6, -0.52, 'sill');
