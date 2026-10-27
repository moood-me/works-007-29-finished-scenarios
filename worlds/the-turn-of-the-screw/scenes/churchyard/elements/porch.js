// The porch's front, toward the path: rubble stone under a coped gable, quoins at its corners, its pointed arch open
// on the porch within; over the arch a sundial (metres: x across from its middle, y up from its foot).
const L = e.lib;
L.rubble(g, e.rnd, -1.6, 1.6, -2.6);
g.save();
g.beginPath();
g.moveTo(-1.85, -2.45);
g.lineTo(0, -4.4);
g.lineTo(1.85, -2.45);
g.closePath();
g.clip();
L.rubble(g, e.rnd, -1.6, 1.6, -4.4);
g.restore();
L.quoins(g, -1.6, 1, -2.6);
L.quoins(g, 1.6, -1, -2.6);
g.fillStyle = '#c0b8a2';
g.beginPath();
g.moveTo(-1.85, -2.5);
g.lineTo(0, -4.45);
g.lineTo(1.85, -2.5);
g.lineTo(1.85, -2.74);
g.lineTo(0, -4.7);
g.lineTo(-1.85, -2.74);
g.closePath();
g.fill();
// the arch: dressed stone, a hood over it
const arch = (half, top) => {
  g.beginPath();
  g.moveTo(-half, 0.3);
  g.lineTo(-half, -1.75);
  g.quadraticCurveTo(-half, -top + 0.2, 0, -top);
  g.quadraticCurveTo(half, -top + 0.2, half, -1.75);
  g.lineTo(half, 0.3);
  g.closePath();
};
g.fillStyle = '#8a8274';
arch(0.98, 2.78);
g.fill();
g.fillStyle = '#c6bfaa';
arch(0.88, 2.66);
g.fill();
g.save();
g.globalCompositeOperation = 'destination-out';
arch(0.68, 2.45);
g.fill();
g.restore();
// the sundial: a square of slate, its hours cut in it, the gnomon
g.fillStyle = '#5d5a56';
g.fillRect(-0.28, -3.55, 0.56, 0.5);
g.strokeStyle = 'rgba(214,206,186,0.7)';
g.lineWidth = 0.012;
g.beginPath();
for (let k = 0; k <= 8; k++) {
  const a = Math.PI * (0.1 + (0.8 * k) / 8);
  g.moveTo(0, -3.48);
  g.lineTo(Math.cos(a) * -0.24, -3.48 + Math.sin(a) * 0.4);
}
g.stroke();
g.strokeStyle = '#3e3a36';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(0, -3.48);
g.lineTo(0, -3.15);
g.stroke();
// the threshold
g.fillStyle = '#c4bca6';
g.fillRect(-0.75, -0.06, 1.5, 0.1);
