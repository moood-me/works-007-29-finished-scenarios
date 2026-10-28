// The roof's right slope seen from below (metres from its foot along the right wall's top, 4.25 m ahead; x runs toward the viewer
// from the viewer, y up the slope to the ridge): the undersides of the shakes, dark with the years, the rafters over
// them every 0.6 m, a few pinholes of sky.
e.lib.planks(g, -4.8, -5.7, 4.8, 0.02, 0.6, '#5d4d3c', 57);
g.fillStyle = '#3f3226';
for (let x = -4.7; x < 4.8; x += 0.6) g.fillRect(x, -5.7, 0.1, 5.72);
g.fillStyle = '#4a3b2d';
for (const y of [-1.6, -3.4, -5.2]) g.fillRect(-4.8, y, 9.6, 0.12);
