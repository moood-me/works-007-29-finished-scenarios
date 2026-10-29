// The library's left wall (9.1 m along the room, from 0.95 m to 10.05 m away, +x running away from the viewer): the
// oak, bays of books, and the double doors onto the passage (6.8–8.0 m away, 2.4 m high), cut through, under a
// moulded oak architrave.
e.lib.oak(g, -5.55, 3.55);
e.lib.bookcase(g, e, -5.5, -3.6, 3.05);
e.lib.bookcase(g, e, -3.4, -1.25, 3.05);
e.lib.bookcase(g, e, -1.05, 0.05, 3.05);
e.lib.bookcase(g, e, 1.75, 3.45, 3.05);
// the architrave round the doorway, its pediment
g.fillStyle = e.lib.OAK_LIGHT;
g.fillRect(0.14, -2.62, 1.52, 2.62);
g.fillStyle = e.lib.OAK_DARK;
g.fillRect(0.08, -2.78, 1.64, 0.16);
g.fillRect(0.22, -2.52, 1.36, 0.04);
// the opening
g.globalCompositeOperation = 'destination-out';
g.fillRect(0.3, -2.4, 1.2, 2.4);
g.globalCompositeOperation = 'source-over';
