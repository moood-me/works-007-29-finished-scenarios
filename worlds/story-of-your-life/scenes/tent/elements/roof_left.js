// One slope of the tent's roof, from the eaves (y 0) up to the ridge (y −5.06; x along the tent −3.7…3.7): canvas, the
// frame's rafters across it.
e.lib.canvas(g, e, -3.7, -5.08, 3.7, 0.02, 1.25);
g.fillStyle = '#9a9890';
for (const x of [-3.7, -1.2, 1.3, 3.63]) g.fillRect(x, -5.08, 0.07, 5.1);
g.fillRect(-3.7, -5.08, 7.4, 0.07);
