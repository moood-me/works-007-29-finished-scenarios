// The plate of buns Dad sets down outside Jack's shut door (1.4, «Убежал»: `plate_door`): the white plate from the
// step, five buns on it, on the hall floor by the door.
if (!e.state.plate_door) return;
g.fillStyle = '#f2efe8';
g.beginPath();
g.ellipse(0, -0.012, 0.13, 0.02, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#efe4cf';
for (const [x, y] of [[-0.06, -0.035], [0, -0.04], [0.06, -0.035], [-0.03, -0.065], [0.03, -0.065]]) {
  g.beginPath();
  g.ellipse(x, y, 0.034, 0.026, 0, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.05, 'plate');
