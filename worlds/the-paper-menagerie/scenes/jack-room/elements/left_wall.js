// The left wall (its face toward the room; x runs from the front, −1.05, to the back, +1.05): Jack's wallpaper, over
// the bed a felt pennant of his school's team, by the front a hook with his school bag. Emptied (`packed`): the
// pennant's pale patch, the hook bare.
e.lib.wallpaper(g, -1.07, 1.07);
g.fillStyle = '#7a5a40';
g.fillRect(-0.72, -1.45, 0.05, 0.03);
if (e.state.packed) {
  e.lib.patch(g, -0.05, -1.78, 0.55, 0.2);
} else {
  g.fillStyle = '#2f5f9a';
  g.beginPath();
  g.moveTo(-0.05, -1.78);
  g.lineTo(0.5, -1.68);
  g.lineTo(-0.05, -1.58);
  g.closePath();
  g.fill();
  g.fillStyle = '#f2d36a';
  g.fillRect(-0.05, -1.78, 0.04, 0.2);
  g.fillRect(0.06, -1.7, 0.2, 0.025);
  // the school bag on its hook: a red canvas satchel, its flap and buckle
  g.fillStyle = '#a8443a';
  g.beginPath();
  g.moveTo(-0.84, -1.38);
  g.lineTo(-0.56, -1.38);
  g.lineTo(-0.54, -1.02);
  g.lineTo(-0.86, -1.02);
  g.closePath();
  g.fill();
  g.fillStyle = '#8f3830';
  g.fillRect(-0.84, -1.38, 0.28, 0.14);
  g.fillStyle = '#d8c070';
  g.fillRect(-0.72, -1.26, 0.04, 0.03);
}
