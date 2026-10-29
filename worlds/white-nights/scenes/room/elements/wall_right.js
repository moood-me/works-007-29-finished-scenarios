// The right wall, from the back (x −2.4) to the room's front (x 2.4, beside the viewer): the old green walls; his
// worn greatcoat hanging on a peg (x −1.1, 3.5 m in); his hat on its nail beside it is an element of its own (`hat_peg`)
const INK = e.lib.INK;
e.lib.greenWall(g, -2.4, 2.4, 2.45, 3);
// (the peg, the greatcoat hanging from it by its loop: the shoulders sloping from the peg, the cape collar over them,
// the empty sleeves down its sides, the long skirt to below the knee with its folds and a row of buttons)
e.lib.box(g, -1.13, -1.99, 0.06, 0.05, '#5c4a3a', 0.006);
const coat = '#7a7067', cape = '#6c635b';
g.fillStyle = coat;
g.beginPath();
g.moveTo(-1.1, -1.95);
g.lineTo(-1.3, -1.86);
g.lineTo(-1.33, -1.4);
g.lineTo(-1.37, -0.72);
g.lineTo(-0.83, -0.72);
g.lineTo(-0.87, -1.4);
g.lineTo(-0.9, -1.86);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = cape;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(-1.1 + s * 0.2, -1.86);
  g.lineTo(-1.1 + s * 0.235, -1.18);
  g.lineTo(-1.1 + s * 0.175, -1.18);
  g.lineTo(-1.1 + s * 0.165, -1.8);
  g.closePath();
  g.fill();
  g.stroke();
}
g.beginPath();
g.moveTo(-1.1, -1.96);
g.lineTo(-1.32, -1.86);
g.lineTo(-1.34, -1.56);
g.quadraticCurveTo(-1.1, -1.5, -0.86, -1.56);
g.lineTo(-0.88, -1.86);
g.closePath();
g.fill();
g.stroke();
g.beginPath();
for (const [x0, x1] of [[-1.2, -1.24], [-1.02, -0.98]]) {
  g.moveTo(x0, -1.5);
  g.quadraticCurveTo((x0 + x1) / 2, -1.1, x1, -0.73);
}
g.moveTo(-1.1, -1.52);
g.lineTo(-1.1, -0.73);
g.strokeStyle = 'rgba(46,40,36,0.55)';
g.lineWidth = 0.007;
g.stroke();
g.fillStyle = '#3e3732';
for (const y of [-1.42, -1.27, -1.12, -0.97]) {
  g.beginPath();
  g.arc(-1.07, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
