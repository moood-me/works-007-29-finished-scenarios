// An end of the bench, seen from up the street (x 0 at its back by the parapet … 0.46 at its front toward the street;
// y up negative from the flags): the cast-iron end frame — the back post rising to 0.9 m and leaning a little back, the
// front leg, a scrolled arm between them — with the ends of the seat's slats and of the back's rails in it
const iron = '#3f4644', wood = '#8a6f58';
g.strokeStyle = iron;
g.lineCap = 'round';
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(0.06, 0);
g.lineTo(0.03, -0.9);
g.moveTo(0.42, 0);
g.lineTo(0.4, -0.45);
g.moveTo(0.05, -0.62);
g.quadraticCurveTo(0.3, -0.66, 0.4, -0.6);
g.quadraticCurveTo(0.45, -0.55, 0.4, -0.5);
g.stroke();
g.fillStyle = wood;
g.fillRect(0.01, -0.48, 0.44, 0.05);
for (const y of [-0.6, -0.72, -0.84]) g.fillRect(-0.01, y, 0.06, 0.07);
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.01;
g.strokeRect(0.01, -0.48, 0.44, 0.05);
