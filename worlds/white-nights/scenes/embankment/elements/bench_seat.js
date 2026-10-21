// The bench's seat from above (x −0.21 by the back … 0.21 at its front edge toward the street; y toward the viewer,
// −0.9 its far end … 0.9): four slats of worn wood along it with the gaps between them inked; its point #seat
const wood = '#937760';
g.fillStyle = wood;
for (let k = 0; k < 4; k++) g.fillRect(-0.2 + k * 0.105, -0.9, 0.09, 1.8);
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.01;
for (let k = 0; k < 4; k++) g.strokeRect(-0.2 + k * 0.105, -0.9, 0.09, 1.8);
e.at(0, 0, 'seat');
