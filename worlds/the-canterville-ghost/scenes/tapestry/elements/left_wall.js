// The chamber's left wall (4.5 m along the room, from 0.9 m to 5.4 m away, +x running away from the viewer): a
// tapestry of the hunt over the dado, and the door to the corridor (x 0.45…1.45, 2.1 m high) under its arch, cut
// through — the corridor behind it and the door's leaf, ajar, are elements of their own.
e.lib.wall(g, -2.25, 2.25, 3.1);
e.lib.tapestry(g, e, -2.1, -2.85, 0.2, -0.98, 2);
g.fillStyle = '#857a6c';
e.lib.arch(g, 0.32, 1.58, -2.25, 0.02, 0.32);
g.fill();
g.globalCompositeOperation = 'destination-out';
e.lib.arch(g, 0.45, 1.45, -2.12, 0.02, 0.28);
g.fill();
g.globalCompositeOperation = 'source-over';
