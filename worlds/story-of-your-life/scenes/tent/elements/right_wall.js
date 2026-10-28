// The tent's right wall, from its foot (x along it toward the viewer — the back wall at x −3.5): canvas, the frame's
// posts, and the doorway (x −2.3…−1.1, 2.05 m high), its flap rolled up over it and tied.
g.save();
g.beginPath();
g.rect(-3.5, -2.32, 7.0, 2.34);
g.rect(-2.3, -2.05, 1.2, 2.07);
g.clip('evenodd');
e.lib.canvas(g, e, -3.5, -2.32, 3.5, 0.02, 1.6);
g.fillStyle = '#9a9890';
for (const x of [-3.5, -2.36, -1.1, 1.2, 3.43]) g.fillRect(x, -2.32, 0.07, 2.34);
g.restore();
// the rolled flap over the doorway and its ties
g.fillStyle = '#6f6c4b';
g.beginPath();
g.roundRect(-2.4, -2.27, 1.4, 0.2, 0.1);
g.fill();
g.strokeStyle = '#4c4a33';
g.lineWidth = 0.02;
for (const x of [-2.15, -1.25]) {
  g.beginPath();
  g.moveTo(x, -2.3);
  g.lineTo(x, -2.04);
  g.stroke();
}
