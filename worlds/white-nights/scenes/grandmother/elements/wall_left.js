// The left wall, from the viewer's side (x −3, at the room's front) to the back (x 3), its foot on the floor: old
// wallpaper; the window that lets the day in (its opening cut at x −1.6…−0.6, 0.9…1.95 m up — out of the picture,
// beside the viewer); the doorway to the stairs at x 0.6…1.5 (3.6…4.5 m into the room), cut through, in a plain cream
// frame with a worn sill (the leaf is `door`); its point `door`
e.lib.wallpaper(g, -3, 3, 2.8, 2);
e.lib.cut(g, -1.6, -1.95, 1, 1.05);
e.lib.box(g, 0.52, -2.07, 1.06, 2.07, '#e6dccb', 0.012);
e.lib.hatch(g, 1.5, -1.99, 0.08, 1.99, 0.025, 0.2, 0.004);
e.lib.cut(g, 0.6, -1.99, 0.9, 1.99);
e.at(1.05, -1.0, 'door');
