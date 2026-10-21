// The left wall, from the room's front (x −2.4, beside the viewer) to the back (x 2.4): the old green walls; the one
// window, onto the courtyard, its opening cut at x 0.8…1.7 (3.2…4.1 m into the room), 0.8…2.0 m up (its frame, the
// sill, the yard beyond are elements of their own); a stain of damp spreading under it
e.lib.greenWall(g, -2.4, 2.4, 2.45, 2);
const damp = g.createRadialGradient(1.25, -0.5, 0.05, 1.25, -0.5, 0.6);
damp.addColorStop(0, 'rgba(88,96,74,0.32)');
damp.addColorStop(1, 'rgba(88,96,74,0)');
g.fillStyle = damp;
g.fillRect(0.6, -1.1, 1.3, 1.0);
e.lib.cut(g, 0.8, -2.0, 0.9, 1.2);
