// The villa's lit windows over its facade: the hall behind the open door and three windows where the lamps are already
// on — warm, the evening still bright about them.
const lit = [
  [-2.7, -1.15, 1.85],
  [2.7, -1.15, 1.85],
  [-2.7, -4.45, 1.75],
];
const w = 1.05;
for (const [x, y0, h] of lit) {
  g.fillStyle = '#f7c77a';
  g.fillRect(x - w / 2, y0 - h, w, h);
  g.strokeStyle = '#efe8da';
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(x, y0 - h);
  g.lineTo(x, y0);
  for (let r = 1; r < 3; r++) {
    g.moveTo(x - w / 2, y0 - h + (h * r) / 3);
    g.lineTo(x + w / 2, y0 - h + (h * r) / 3);
  }
  g.stroke();
  e.light(x, y0 - h / 2, 0.7, '#ffc477', 0.5);
}
g.fillStyle = '#e9a85c';
g.beginPath();
g.moveTo(-0.48, -0.75);
g.lineTo(-0.48, -2.6);
g.arc(0, -2.6, 0.48, Math.PI, 0);
g.lineTo(0.48, -0.75);
g.closePath();
g.fill();
e.light(0, -1.8, 0.8, '#ffbf70', 0.6, 'hall');
