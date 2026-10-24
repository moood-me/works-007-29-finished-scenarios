// An arm of the chair, seen from the side: a curved rail on a post, the seat's side rail below it.
const wood = '#6e4c33';
g.fillStyle = wood;
g.beginPath();
g.moveTo(-0.26, -0.66);
g.quadraticCurveTo(0, -0.7, 0.26, -0.67);
g.lineTo(0.26, -0.63);
g.quadraticCurveTo(0, -0.66, -0.26, -0.62);
g.closePath();
g.fill();
g.fillRect(-0.02, -0.65, 0.035, 0.22);
g.fillStyle = '#86603f';
g.fillRect(-0.26, -0.45, 0.52, 0.04);
