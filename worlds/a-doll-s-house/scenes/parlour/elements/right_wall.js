// The right wall (its +x runs toward the open front: x −1.95 at the back wall, 1.95 at the front): the door to
// Torvald's study (x 1.1, the point `study`), shut; a barometer in a carved case behind the tree.
e.lib.wall(g, e, -1.95, 1.95);
e.lib.door(g, 1.1, 1.0, 2.35, -1);
e.at(1.1, -1.2, 'study');
g.fillStyle = '#5a3f2a';
g.fillRect(-0.62, -2.05, 0.16, 0.62);
g.fillStyle = '#d9cfb8';
g.beginPath();
g.arc(-0.54, -1.82, 0.065, 0, Math.PI * 2);
g.fill();
