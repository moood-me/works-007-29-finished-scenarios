// The left wall, from the viewer's side (x −3, at the room's front) to the back (x 3), its foot on the floor: old
// wallpaper; the window that lets the day in (its opening cut at x −1.6…−0.6, 0.9…1.95 m up — out of the picture,
// beside the viewer); the door to the stairs at x 0.6…1.5 (3.6…4.5 m into the room) — a door of four panels painted a
// faded brown, in a plain frame, a brass latch
e.lib.wallpaper(g, -3, 3, 2.8, 2);
e.lib.cut(g, -1.6, -1.95, 1, 1.05);
const INK = e.lib.INK;
e.lib.box(g, 0.52, -2.07, 1.06, 2.07, '#e6dccb', 0.012);
e.lib.box(g, 0.6, -1.99, 0.9, 1.99, '#8c6a50', 0.012);
for (const [y, h] of [[-1.9, 0.82], [-0.95, 0.82]]) {
  e.lib.box(g, 0.66, y, 0.36, h, '#977459', 0.008);
  e.lib.box(g, 1.08, y, 0.36, h, '#977459', 0.008);
}
g.fillStyle = '#c4a24e';
g.fillRect(0.66, -1.02, 0.1, 0.04);
g.beginPath();
g.arc(0.7, -1.0, 0.025, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
e.at(1.05, -1.0, 'door');
