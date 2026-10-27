// A kitchen chair from the front, from its foot (x −0.24…0.24, the seat at 0.46 m, its back to 0.95 m): painted
// wood, three spindles in the back, a cushion tied to the seat. Two of them: hers behind the table, one pulled out.
g.fillStyle = '#c29d72';
for (const x of [-0.22, 0.19]) {
  g.fillRect(x, -0.95, 0.035, 0.95);
}
g.fillRect(-0.22, -0.95, 0.445, 0.07);
for (const x of [-0.1, -0.015, 0.07]) g.fillRect(x, -0.88, 0.025, 0.4);
g.fillStyle = '#b48f66';
g.fillRect(-0.24, -0.48, 0.48, 0.05);
g.fillStyle = '#9a5a44';
g.beginPath();
g.roundRect(-0.22, -0.52, 0.44, 0.05, 0.02);
g.fill();
g.fillStyle = '#a8845c';
g.fillRect(-0.21, -0.2, 0.42, 0.025);
