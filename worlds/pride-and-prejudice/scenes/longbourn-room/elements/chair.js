// Jane's chair, seen from the front behind her: a light mahogany frame, a caned seat at 0.46 m, a back of three
// slender bars under a curved top rail (x across, y up negative)
const L = e.kit.brush, px = L.px(e);
const wood = new Path2D();
for (const x of [-0.22, 0.22]) {
  wood.moveTo(x - 0.018, -0.95);
  wood.lineTo(x - 0.014, 0);
  wood.lineTo(x + 0.014, 0);
  wood.lineTo(x + 0.018, -0.95);
  wood.closePath();
}
wood.moveTo(-0.25, -0.98);
wood.quadraticCurveTo(0, -1.02, 0.25, -0.98);
wood.lineTo(0.25, -0.9);
wood.quadraticCurveTo(0, -0.94, -0.25, -0.9);
wood.closePath();
for (const x of [-0.08, 0, 0.08]) wood.rect(x - 0.01, -0.9, 0.02, 0.42);
g.fillStyle = '#8a5a3c';
g.fill(wood);
const seat = new Path2D();
seat.rect(-0.25, -0.5, 0.5, 0.06);
g.fillStyle = '#d8c497';
g.fill(seat);
L.pen(g, wood, 1.1 * px, 0.8);
L.pen(g, seat, 1.1 * px, 0.8);
