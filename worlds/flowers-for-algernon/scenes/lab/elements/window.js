// The tall window: a white steel frame of three lights across and two high, the upper row a hopper tipped a little
// open; the glass itself clear (the April day beyond). Its sill is a white board, proud of the wall.
g.fillStyle = '#f3f3ee';
g.fillRect(-0.9, -1.65, 1.8, 0.05);
g.fillRect(-0.9, -0.05, 1.8, 0.05);
g.fillRect(-0.9, -1.65, 0.05, 1.65);
g.fillRect(0.85, -1.65, 0.05, 1.65);
for (const x of [-0.31, 0.29]) g.fillRect(x, -1.65, 0.035, 1.65);
g.fillRect(-0.9, -1.12, 1.8, 0.045);
// the hopper's own frames, tipped in: a thin darker line under each
g.fillStyle = '#c9cdc6';
for (const x of [-0.85, -0.275, 0.325]) g.fillRect(x, -1.09, 0.525, 0.012);
// the sill
g.fillStyle = '#eeeee6';
g.fillRect(-1.0, 0.0, 2.0, 0.05);
g.fillStyle = '#b8bcb2';
g.fillRect(-1.0, 0.05, 2.0, 0.015);
e.at(0, -0.8, 'window');
