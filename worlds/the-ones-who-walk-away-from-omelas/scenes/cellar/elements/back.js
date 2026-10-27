// The storeroom's back wall: rough stone under old whitewash; on the left the doorway (x −1.55 … −0.65, 1.85 m high)
// under a dark wooden lintel, the corridor's lamp seen through it; up under the ceiling on the right a slit with two
// iron bars, the evening's blue in it (points "back#door", "back#slit")
e.lib.stones(g, -2.12, -2.36, 2.02, 0.02, 11);
g.globalCompositeOperation = 'destination-out';
g.fillRect(-1.55, -1.85, 0.9, 1.9);
g.fillRect(0.1, -2.2, 0.9, 0.14);
g.globalCompositeOperation = 'source-over';
// the lintel
g.fillStyle = '#3e3126';
g.fillRect(-1.7, -2, 1.2, 0.15);
g.fillStyle = '#4e3e30';
g.fillRect(-1.7, -2, 1.2, 0.04);
// the slit's bars
g.fillStyle = '#2b2622';
for (const x of [0.4, 0.7]) g.fillRect(x - 0.012, -2.21, 0.024, 0.16);
e.at(-1.1, -1, 'door');
e.at(0.55, -2.13, 'slit');
