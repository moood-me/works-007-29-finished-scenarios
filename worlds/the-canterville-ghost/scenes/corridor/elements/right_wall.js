// The corridor's right wall (13.4 m along it, from 14.1 m to 0.7 m away, +x running toward the viewer: x = 7.4 − its
// distance): Virginia's door (x 0.6…1.6, 5.8…6.8 m away) and the twins' (x −3.4…−2.4, 9.8…10.8 m away), each 2.2 m high
// and cut through — their leaves are door_virginia and door_twins —, and three Canterville ancestors in their frames
// between them (4.6, 8.3 and 12.4 m away).
e.lib.wall(g, -6.7, 6.7, 3.6);
e.lib.portrait(g, 2.8, -1.65, 0.72, 0.95, 0);
e.lib.portrait(g, -0.9, -1.6, 0.7, 0.92, 1);
e.lib.portrait(g, -5.0, -1.6, 0.72, 0.95, 2);
e.lib.opening(g, 0.6, 1.6, -2.2, 0, 0.28);
e.lib.opening(g, -3.4, -2.4, -2.2, 0, 0.28);
