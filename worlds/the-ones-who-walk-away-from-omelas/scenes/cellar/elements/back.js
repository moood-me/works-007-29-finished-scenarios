// The storeroom's back wall: rough stone, painted round its openings — on the left the doorway (x −1.55 … −0.65,
// 1.85 m high) under a dark wooden lintel, the corridor and its lamp seen through it; up under the ceiling on the
// right a slit (x 0.1 … 1, 2.06 … 2.2 m) with two iron bars, the evening's blue in it (points "back#door",
// "back#slit")
e.lib.stones(g, [[-2.12, -2.36, -1.55, 0.02], [-1.55, -2.36, -0.65, -1.85], [-0.65, -2.06, 2.02, 0.02], [-0.65, -2.2, 0.1, -2.06], [1, -2.2, 2.02, -2.06], [-0.65, -2.36, 2.02, -2.2]], 11);
// the lintel
g.fillStyle = '#3e3126';
g.fillRect(-1.7, -2, 1.2, 0.15);
g.fillStyle = '#4e3e30';
g.fillRect(-1.7, -2, 1.2, 0.04);
// the slit's bars
g.fillStyle = '#2b2622';
for (const x of [0.4, 0.7]) g.fillRect(x - 0.012, -2.2, 0.024, 0.14);
e.at(-1.1, -1, 'door');
e.at(0.55, -2.13, 'slit');
