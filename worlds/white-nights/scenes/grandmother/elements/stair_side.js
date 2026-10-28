// The stair's open side, seen from the room (x 1 at its foot, 2.6 m into the room … x −1 at the top under the
// ceiling): its stringer, a newel post at the foot, a handrail going up on thin balusters
const INK = e.lib.INK;
g.fillStyle = '#8f6a4c';
g.beginPath();
g.moveTo(1.0, 0);
g.lineTo(1.0, -0.34);
g.lineTo(-0.757, -2.8);
g.lineTo(-1.0, -2.8);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.012;
g.stroke();
// (the stringer's wood washed, its face hatched in shade)
g.save();
g.clip();
e.lib.wash(g, -1, -2.8, 2, 2.8, [143, 106, 76], 7, 0.05, 0.3, 0.1);
e.lib.hatch(g, -1, -2.8, 2, 2.8, 0.035, 0.2, 0.004);
g.restore();
// (the rail, from the post's top up to the ceiling, and the balusters down to the stringer)
const top = [0.96, -1.05], dir = [-2.0, -2.8], u = (2.8 - 1.05) / 2.8, end = [top[0] + dir[0] * u, -2.8];
g.beginPath();
for (let k = 1; k < 9; k++) {
  const t = k / 9, x = top[0] + (end[0] - top[0]) * t, y = top[1] + (end[1] - top[1]) * t;
  const ys = -0.34 + (x - 1.0) * 1.4;
  g.moveTo(x, y);
  g.lineTo(x, ys);
}
g.strokeStyle = '#7a5a40';
g.lineWidth = 0.022;
g.stroke();
g.beginPath();
g.moveTo(top[0], top[1]);
g.lineTo(end[0], end[1]);
g.strokeStyle = '#6e4f38';
g.lineWidth = 0.045;
g.stroke();
e.lib.box(g, 0.92, -1.08, 0.08, 1.08, '#7a5a40', 0.01);
g.fillStyle = '#7a5a40';
g.beginPath();
g.arc(0.96, -1.11, 0.045, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.stroke();
