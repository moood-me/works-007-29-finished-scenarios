// The stairwell's side wall, along the well (x −3 at the viewer's end … 3 at the back; y −5.7 at the ceiling … 0 at
// the landing below): the same distemper, its dado following the flight down — level along the landing below
// (x < −1), then rising with the steps to the landing above at the back
const INK = e.lib.INK;
e.lib.plaster(g, -4, 3, 5.7, [228, 210, 172], 12);
g.fillStyle = '#b4a386';
g.beginPath();
g.moveTo(-1, -1.05);
g.lineTo(3, -3.45);
g.lineTo(3, -2.4);
g.lineTo(-1, 0);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-3, -1.05);
g.lineTo(-1, -1.05);
g.lineTo(3, -3.45);
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
