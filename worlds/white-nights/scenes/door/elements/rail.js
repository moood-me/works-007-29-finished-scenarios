// The landing's railing along the well (x 0 at the viewer's end … 5.5 at the back; y −1 at the handrail's top … 0 on
// the slab): a polished dark handrail on cast-iron balusters, every fourth one a lyre of two scrolls, a bottom bar
g.fillStyle = '#3c3836';
g.fillRect(-0.05, -0.1, 5.6, 0.035);
g.beginPath();
let i = 0;
for (let x = 0.06; x < 5.5; x += 0.13, i++) {
  if (i % 4 === 2) {
    g.moveTo(x - 0.06, -0.1);
    g.bezierCurveTo(x - 0.1, -0.45, x - 0.02, -0.6, x, -0.5);
    g.moveTo(x + 0.06, -0.1);
    g.bezierCurveTo(x + 0.1, -0.45, x + 0.02, -0.6, x, -0.5);
    g.moveTo(x, -0.5);
    g.lineTo(x, -0.93);
  } else {
    g.moveTo(x, -0.1);
    g.lineTo(x, -0.93);
  }
}
g.strokeStyle = '#3c3836';
g.lineWidth = 0.016;
g.stroke();
// the handrail, its top lit
e.lib.box(g, -0.05, -1.0, 5.6, 0.07, '#5e3a2a', 0.01);
g.fillStyle = 'rgba(214,170,130,0.45)';
g.fillRect(-0.05, -0.995, 5.6, 0.018);
