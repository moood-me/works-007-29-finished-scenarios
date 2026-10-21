// The window onto the courtyard, in the left wall over its opening (x −0.45…0.45, 0.8…2.0 m up; x runs into the
// room's depth): a plain frame of old grey-white paint, two casement leaves of three panes each, shut — it stays shut
// all the game — a latch between them; the glass a faint grey film, the rain and the yard seen through it
const INK = e.lib.INK, paint = '#d2cbb7';
g.fillStyle = paint;
g.beginPath();
g.rect(-0.55, -2.1, 1.1, 1.32);
g.rect(-0.45, -2.0, 0.9, 1.2);
g.fill('evenodd');
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
// (the leaves: their frames and glazing bars, the panes' film)
for (const x of [-0.45, 0]) {
  g.fillStyle = paint;
  g.beginPath();
  g.rect(x, -2.0, 0.45, 1.2);
  g.rect(x + 0.04, -1.96, 0.37, 1.12);
  g.fill('evenodd');
  g.fillRect(x + 0.04, -1.6, 0.37, 0.025);
  g.fillRect(x + 0.04, -1.23, 0.37, 0.025);
  g.fillStyle = 'rgba(214,220,216,0.12)';
  g.fillRect(x + 0.04, -1.96, 0.37, 1.12);
  g.strokeStyle = INK;
  g.lineWidth = 0.006;
  g.strokeRect(x, -2.0, 0.45, 1.2);
  g.strokeRect(x + 0.04, -1.96, 0.37, 1.12);
}
// (the latch)
e.lib.box(g, -0.015, -1.45, 0.03, 0.1, '#5a5048', 0.005);
// (where the paint has flaked off the frame: the grey wood)
g.fillStyle = 'rgba(140,128,112,0.6)';
for (const [x, y, w] of [[-0.52, -1.3, 0.05], [0.47, -1.75, 0.04], [-0.2, -2.07, 0.12], [0.2, -0.85, 0.08]]) g.fillRect(x, y, w, 0.025);
