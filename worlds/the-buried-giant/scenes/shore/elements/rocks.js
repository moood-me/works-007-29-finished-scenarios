// Rocks along the shore and in the shallows: a weathered grey-brown boulder, its top paler, weed dark at its foot
const r = e.lib.rnd(101);
g.fillStyle = '#7a7268';
e.lib.stone(g, 0, -0.5, 0.95, 0.55, 0, r);
g.fillStyle = '#958d81';
e.lib.stone(g, -0.1, -0.68, 0.7, 0.32, 0.1, r);
g.fillStyle = '#a69e92';
e.lib.stone(g, -0.25, -0.82, 0.38, 0.14, 0.05, r);
g.fillStyle = '#4f4a3c';
g.beginPath();
g.ellipse(0, -0.05, 0.9, 0.1, 0, 0, Math.PI * 2);
g.fill();
