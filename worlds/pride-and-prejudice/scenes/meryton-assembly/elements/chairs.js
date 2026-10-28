// A gilt ballroom chair seen from before it (x across, y up negative): a light frame painted cream and gilt, a sage
// stuffed seat at 0.46 m, an oval back padded in the same sage. Copies: Elizabeth's and Charlotte's behind them, the
// rest along the left wall
const L = e.kit.brush,
  px = L.px(e),
  r = L.rand(263);
const frame = new Path2D();
for (const x of [-0.21, 0.21]) {
  frame.moveTo(x - 0.016, -0.46);
  frame.lineTo(x - 0.012, 0);
  frame.lineTo(x + 0.012, 0);
  frame.lineTo(x + 0.016, -0.46);
  frame.closePath();
  frame.rect(x - 0.016, -0.95, 0.03, 0.5);
}
g.fillStyle = "#e8dcbc";
g.fill(frame);
const back = new Path2D();
back.ellipse(0, -0.73, 0.2, 0.2, 0, 0, Math.PI * 2);
L.wash(g, back, "#98a886", [-0.2, -0.93, 0.2, -0.53], r, 2);
const rim = new Path2D();
rim.ellipse(0, -0.73, 0.22, 0.22, 0, 0, Math.PI * 2);
rim.moveTo(0.2, -0.73);
rim.ellipse(0, -0.73, 0.2, 0.2, 0, 0, Math.PI * 2);
g.fillStyle = "#c9a75e";
g.fill(rim, "evenodd");
const seat = new Path2D();
seat.moveTo(-0.25, -0.5);
seat.quadraticCurveTo(0, -0.54, 0.25, -0.5);
seat.lineTo(0.24, -0.42);
seat.quadraticCurveTo(0, -0.4, -0.24, -0.42);
seat.closePath();
L.wash(g, seat, "#98a886", [-0.25, -0.54, 0.25, -0.4], r, 2);
L.pen(g, frame, 1.0 * px, 0.7);
L.pen(g, rim, 1.0 * px, 0.7);
L.pen(g, seat, 1.0 * px, 0.7);
