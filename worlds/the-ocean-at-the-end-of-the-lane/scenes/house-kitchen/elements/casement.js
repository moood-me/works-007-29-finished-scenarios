// The window's frame in the outer face of the wall: white-painted wood, a fixed pane either side and the small top
// light over the middle open a crack (no glass drawn: at dusk the garden still outshines the room).
const frame = new Path2D();
frame.rect(-0.75, -2.0, 1.5, 1.0);
const b = 0.035;
for (const [x, y, w, h] of [[-0.7, -1.72, 0.43, 0.68], [-0.23, -1.72, 0.46, 0.68], [0.27, -1.72, 0.43, 0.68], [-0.7, -1.96, 0.43, 0.2], [-0.23, -1.96, 0.46, 0.2], [0.27, -1.96, 0.43, 0.2]]) {
  frame.rect(x + b / 2, y, w - b, h);
}
g.fillStyle = '#e8e6de';
g.fill(frame, 'evenodd');
