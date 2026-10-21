// The right wall, from the back (x −3) to the room's front (x 3): old wallpaper; the steep stair to the mezzanine
// stands along it (x −1.6…0.4, its own elements); near the back a pair of black paper silhouettes in small frames
e.lib.wallpaper(g, -3, 3, 2.8, 3);
for (const [x, k] of [[-2.55, 0], [-2.2, 1]]) {
  e.lib.box(g, x - 0.12, -1.98, 0.24, 0.3, '#ece4d2', 0.01);
  g.fillStyle = '#2f2a2a';
  g.beginPath();
  g.ellipse(x + (k ? 0.01 : -0.01), -1.85, 0.05, 0.065, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(x, -1.73, 0.085, 0.05, 0, Math.PI, Math.PI * 2);
  g.fill();
}
