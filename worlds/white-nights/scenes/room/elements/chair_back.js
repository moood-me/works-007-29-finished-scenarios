// The chair's back, behind the seat (the chair turned from the table toward the room, as he turned it to her): two
// posts from the floor up past the seat, a bowed top rail, a middle rail, a plain splat between — dark old wood
const INK = e.lib.INK, wood = '#6e5440';
for (const x of [-0.2, 0.17]) e.lib.box(g, x, -0.94, 0.03, 0.94, wood, 0.006);
g.fillStyle = wood;
g.beginPath();
g.moveTo(-0.21, -0.95);
g.quadraticCurveTo(0, -0.99, 0.21, -0.95);
g.lineTo(0.21, -0.87);
g.quadraticCurveTo(0, -0.91, -0.21, -0.87);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
e.lib.box(g, -0.17, -0.64, 0.34, 0.035, wood, 0.006);
e.lib.box(g, -0.04, -0.87, 0.08, 0.23, '#78604a', 0.006);
