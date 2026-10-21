// The right wall, from the back (x −2.4) to the room's front (x 2.4, beside the viewer): the old green walls; his
// worn greatcoat hanging on a peg (x −1.1, 3.5 m in), and on a nail beside it his hat — at home it hangs there
const INK = e.lib.INK;
e.lib.greenWall(g, -2.4, 2.4, 2.45, 3);
// (the peg, the greatcoat hanging from it by its loop: its cape collar over the shoulders, the long skirt in folds)
e.lib.box(g, -1.13, -1.98, 0.06, 0.05, '#5c4a3a', 0.006);
g.fillStyle = '#665d55';
g.beginPath();
g.moveTo(-1.1, -1.94);
g.quadraticCurveTo(-1.32, -1.86, -1.34, -1.7);
g.lineTo(-1.36, -0.78);
g.quadraticCurveTo(-1.1, -0.72, -0.84, -0.78);
g.lineTo(-0.86, -1.7);
g.quadraticCurveTo(-0.88, -1.86, -1.1, -1.94);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = '#5a524b';
g.beginPath();
g.moveTo(-1.1, -1.93);
g.quadraticCurveTo(-1.4, -1.82, -1.42, -1.52);
g.quadraticCurveTo(-1.1, -1.44, -0.78, -1.52);
g.quadraticCurveTo(-0.8, -1.82, -1.1, -1.93);
g.closePath();
g.fill();
g.stroke();
g.beginPath();
for (const [x0, x1] of [[-1.24, -1.27], [-1.12, -1.1], [-0.98, -0.95]]) {
  g.moveTo(x0, -1.46);
  g.quadraticCurveTo((x0 + x1) / 2 - 0.02, -1.1, x1, -0.78);
}
g.strokeStyle = 'rgba(46,40,36,0.55)';
g.lineWidth = 0.007;
g.stroke();
// (the hat on its nail: a worn top hat seen from the side, its crown a little wider at the top, a narrow curled brim)
g.fillStyle = '#5e5249';
g.beginPath();
g.moveTo(-0.66, -1.66);
g.lineTo(-0.64, -1.86);
g.lineTo(-0.42, -1.86);
g.lineTo(-0.44, -1.66);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.007;
g.stroke();
g.beginPath();
g.moveTo(-0.71, -1.67);
g.quadraticCurveTo(-0.55, -1.63, -0.39, -1.67);
g.quadraticCurveTo(-0.55, -1.655, -0.71, -1.67);
g.fill();
g.stroke();
g.fillStyle = '#3e3732';
g.fillRect(-0.655, -1.71, 0.205, 0.035);
