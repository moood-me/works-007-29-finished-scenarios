// Three stone steps up to the door, worn and wet.
g.fillStyle = '#6d7074';
g.fillRect(-1.25, -0.2, 2.5, 0.3);
g.fillStyle = '#7a7d80';
g.fillRect(-1.05, -0.4, 2.1, 0.22);
g.fillStyle = '#85878a';
g.fillRect(-0.9, -0.6, 1.8, 0.22);
g.fillStyle = '#9a9b9c';
for (const [w, y] of [[1.25, -0.2], [1.05, -0.4], [0.9, -0.6]]) g.fillRect(-w, y, 2 * w, 0.04);
