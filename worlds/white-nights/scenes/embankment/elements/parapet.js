// The near parapet's face, the side toward the street: granite blocks 1.05 m high, x 0…319 along the canal from a
// metre before the viewer away into the distance; a light chamfer under its top, the plinth's line at its foot
e.lib.granite(g, 319, 1.05, { block: 2.2, colour: '#a39490' });
g.fillStyle = 'rgba(240,232,226,0.35)';
g.fillRect(0, -1.05, 319, 0.07);
g.beginPath();
g.moveTo(0, -0.12);
g.lineTo(319, -0.12);
g.strokeStyle = 'rgba(74,63,58,0.45)';
g.lineWidth = 0.02;
g.stroke();
