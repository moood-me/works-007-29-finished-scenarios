// A gilt ballroom chair against a side wall, seen side-on (several, `copies`; flipped on the right wall): its seat
// toward the room (+x), the back against the wall; celadon silk on the seat and the back's oval.
const GILT = '#c2a057';
g.fillStyle = GILT;
g.fillRect(-0.2, -0.48, 0.42, 0.05);
g.fillRect(-0.21, -0.98, 0.04, 0.98);
g.fillRect(0.17, -0.45, 0.035, 0.45);
g.fillStyle = '#b4c2a8';
g.fillRect(-0.17, -0.54, 0.36, 0.07);
g.fillStyle = GILT;
g.beginPath();
g.ellipse(-0.17, -0.76, 0.05, 0.19, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#b4c2a8';
g.beginPath();
g.ellipse(-0.16, -0.76, 0.03, 0.15, 0, 0, Math.PI * 2);
g.fill();
