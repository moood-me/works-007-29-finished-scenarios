// A stall's partition seen from the aisle (metres, its foot at the middle; the left wall at x −1.42, the aisle at
// x 1.42): heavy boards laid flat up to 1.3 m, the top rail, the upper boards chewed along their edge.
g.fillStyle = '#7d6950';
g.fillRect(-1.42, -1.32, 2.84, 1.34);
g.fillStyle = 'rgba(40,30,22,0.6)';
for (let y = -1.1; y < 0; y += 0.22) g.fillRect(-1.42, y, 2.84, 0.014);
g.fillStyle = 'rgba(70,56,42,0.5)';
g.fillRect(-1.42, -0.3, 2.84, 0.32);
g.fillStyle = '#6a5843';
g.fillRect(-1.42, -1.6, 2.84, 0.12);
g.fillRect(-1.42, -1.6, 0.1, 0.3);
g.fillStyle = '#8c7759';
for (let x = -1.3; x < 1.35; x += 0.2) g.fillRect(x, -1.5, 0.08, 0.2);
