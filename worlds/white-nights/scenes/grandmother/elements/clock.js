// The wall clock over the table — a cheap painted «ходики»: a small wooden case with a white dial and a painted rose
// on its top, two pine-cone weights hanging on chains, and the pendulum (a layer, swung by animate about the pivot
// under the case)
const INK = e.lib.INK;
e.lib.box(g, -0.15, -2.33, 0.3, 0.5, '#7a5a40', 0.01);
g.fillStyle = '#7a5a40';
g.beginPath();
g.moveTo(-0.17, -2.33);
g.quadraticCurveTo(0, -2.47, 0.17, -2.33);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
g.fillStyle = '#c4534d';
g.beginPath();
g.arc(0, -2.37, 0.025, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.arc(0, -2.08, 0.105, 0, Math.PI * 2);
g.fillStyle = '#f2ecdd';
g.fill();
g.stroke();
g.beginPath();
for (let k = 0; k < 12; k++) {
  const a = k / 12 * Math.PI * 2;
  g.moveTo(0.085 * Math.cos(a), -2.08 + 0.085 * Math.sin(a));
  g.lineTo(0.097 * Math.cos(a), -2.08 + 0.097 * Math.sin(a));
}
g.moveTo(0, -2.08);
g.lineTo(0.045, -2.12);
g.moveTo(0, -2.08);
g.lineTo(-0.01, -2.155);
g.lineWidth = 0.007;
g.stroke();
// (the chains and the weights)
g.beginPath();
for (const x of [-0.07, 0.07]) {
  g.moveTo(x, -1.83);
  g.lineTo(x, x < 0 ? -1.3 : -1.12);
}
g.strokeStyle = '#6a6460';
g.lineWidth = 0.006;
g.stroke();
g.fillStyle = '#6b6560';
for (const [x, y] of [[-0.07, -1.3], [0.07, -1.12]]) {
  g.beginPath();
  g.ellipse(x, y + 0.08, 0.024, 0.08, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = INK;
  g.stroke();
}
e.layer('pendulum', { pivot: [0, -1.84], box: [-0.12, -1.86, 0.12, -1.25] }, (g) => {
  g.strokeStyle = '#8a7f6e';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(0, -1.84);
  g.lineTo(0, -1.36);
  g.stroke();
  g.beginPath();
  g.arc(0, -1.33, 0.04, 0, Math.PI * 2);
  g.fillStyle = '#cfa94e';
  g.fill();
  g.strokeStyle = e.lib.INK;
  g.lineWidth = 0.006;
  g.stroke();
});
e.at(0, -2.08, 'face');
