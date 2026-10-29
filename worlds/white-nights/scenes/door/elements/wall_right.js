// The wall with the acquaintances' door (x −2.6 at the back … 2.6 at the viewer's end, d = 3.5 − x; y −3.3 … 0):
// the stair's distemper and dado, the doorway (its opening cut at x −0.65…0.3, 2.15 m high) in a plain moulded
// architrave; its point `doorway`
e.lib.plaster(g, -2.6, 3.6, 3.3, [228, 210, 172], 14);
e.lib.box(g, -0.8, -2.32, 1.25, 2.32, '#d6cfbc', 0.012);
e.lib.box(g, -0.72, -2.24, 1.09, 2.24, '#cbc3ad', 0.008);
e.lib.hatch(g, 0.3, -2.24, 0.07, 2.24, 0.025, 0.2, 0.004);
e.lib.cut(g, -0.65, -2.15, 0.95, 2.15);
e.at(-0.17, -1.6, 'doorway');
