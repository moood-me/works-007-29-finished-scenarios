// A side wall (copies at both sides: seen only on a wide screen): plaster between oak posts and a beam at 2.55 m.
const L = e.lib;
g.beginPath();
g.rect(-1.8, -4.5, 3.6, 4.52);
g.clip();
L.plaster(g, 81, -1.8, -4.5, 3.6, 4.5);
for (const x of [-1.7, 0, 1.7]) L.timber(g, 82 + x, x, 0, x, -4.5, 0.2);
L.timber(g, 85, -1.8, -2.55, 1.8, -2.55, 0.22);
L.timber(g, 86, -1.8, -0.1, 1.8, -0.1, 0.2);
