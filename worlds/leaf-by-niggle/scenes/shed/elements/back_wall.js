// The shed's back wall, from its foot (metres across from the shed's middle): grey-brown weathered boards standing up,
// a cross-rail at 2.4 m, the doorway cut through it (x 1.0…2.6, 2.3 high) in a plain frame; past the doorway the yard.
g.save();
g.beginPath();
g.rect(-3.25, -4.3, 6.5, 4.32);
g.rect(1.0, -2.3, 1.6, 2.32);
g.clip('evenodd');
e.lib.planks(g, e, -3.25, -4.3, 3.25, 0.02, true, ['#8d7d6a', '#857461', '#93826d', '#7f6f5d']);
g.fillStyle = '#6c5b49';
g.fillRect(-3.25, -2.45, 6.5, 0.12);
g.fillStyle = 'rgba(40,30,22,0.4)';
g.fillRect(-3.25, -2.33, 6.5, 0.02);
g.restore();
// the door frame: posts and a lintel, a worn sill board
g.fillStyle = '#5e4d3c';
g.fillRect(0.9, -2.4, 0.1, 2.42);
g.fillRect(2.6, -2.4, 0.1, 2.42);
g.fillRect(0.9, -2.42, 1.8, 0.12);
g.fillStyle = '#7a6650';
g.fillRect(0.95, -0.04, 1.7, 0.06);
