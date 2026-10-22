// The left wall (its +x runs back from the open front: x −1.95 at the front, 1.95 at the back wall): the door to the
// nursery near the front (x −1.1), two small oval portraits in gilt between it and the stove (the stove stands before
// the wall's back part).
e.lib.wall(g, e, -1.95, 1.95);
e.lib.door(g, -1.1, 0.9, 2.25, 1);
e.at(-1.1, -1.2, 'nursery');
for (const [x, y] of [[-0.1, -1.95], [0.25, -1.7]]) {
  g.fillStyle = '#b08d48';
  g.beginPath();
  g.ellipse(x, y, 0.12, 0.16, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#5d5448';
  g.beginPath();
  g.ellipse(x, y, 0.095, 0.135, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#c9b49a';
  g.beginPath();
  g.ellipse(x, y - 0.03, 0.035, 0.045, 0, 0, Math.PI * 2);
  g.fill();
}
