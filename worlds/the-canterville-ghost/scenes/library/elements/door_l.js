// The near leaf of the library's doors, painted from its hinge (x 0) to its free edge (0.6 m): oak, two raised panels,
// a brass handle near the free edge. It opens out into the passage (door_l_f 90 shut, 0 open).
g.fillStyle = '#563826';
g.fillRect(0, -2.4, 0.6, 2.4);
g.strokeStyle = '#3a2618';
g.lineWidth = 0.025;
g.strokeRect(0.08, -2.25, 0.44, 1.0);
g.strokeRect(0.08, -1.1, 0.44, 0.95);
g.fillStyle = '#b8923e';
g.beginPath();
g.arc(0.52, -1.05, 0.03, 0, Math.PI * 2);
g.fill();
