// The chamber's left wall (5.7 m along the room, from 0.9 m to 6.6 m away, +x running away from the viewer):
// tapestries of the hunt over the dado, and the door to the corridor (x 0.25…1.25, 2.1 m high) under its arch, cut
// through — the corridor behind it and the door's leaf, ajar, are elements of their own.
e.lib.wall(g, -2.85, 2.85, 3.1);
e.lib.tapestry(g, e, -2.7, -2.85, 0.05, -0.98, 2);
e.lib.tapestry(g, e, 1.45, -2.85, 2.75, -0.98, 3);
g.fillStyle = '#857a6c';
e.lib.arch(g, 0.12, 1.38, -2.25, 0.02, 0.32);
g.fill();
g.globalCompositeOperation = 'destination-out';
e.lib.arch(g, 0.25, 1.25, -2.12, 0.02, 0.28);
g.fill();
g.globalCompositeOperation = 'source-over';
