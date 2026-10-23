// The tent's right wall, from its foot (x along it toward the viewer — the back wall at x −3.7): canvas, the frame's
// posts, and the doorway (x −2.5…−1.3, 2.05 m high), its flap rolled up over it and tied.
g.save();
g.beginPath();
g.rect(-3.7, -2.32, 7.4, 2.34);
g.rect(-2.5, -2.05, 1.2, 2.07);
g.clip('evenodd');
e.lib.canvas(g, e, -3.7, -2.32, 3.7, 0.02, 1.6);
g.fillStyle = '#9a9890';
for (const x of [-3.7, -2.56, -1.3, 1.2, 3.63]) g.fillRect(x, -2.32, 0.07, 2.34);
g.restore();
// the rolled flap over the doorway and its ties
g.fillStyle = '#6f6c4b';
g.beginPath();
g.roundRect(-2.6, -2.27, 1.4, 0.2, 0.1);
g.fill();
g.strokeStyle = '#4c4a33';
g.lineWidth = 0.02;
for (const x of [-2.35, -1.45]) {
  g.beginPath();
  g.moveTo(x, -2.3);
  g.lineTo(x, -2.04);
  g.stroke();
}
