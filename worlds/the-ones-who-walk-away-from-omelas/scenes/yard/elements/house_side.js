// The house's left end, its gable (x 0 at the front corner … 5 m back): limewash in the shade, the roof's edge
// running up to the ridge and down again
e.lib.plaster(g, [[0, -6.4, 5, 0]], 25, '#ece2d0');
g.save();
const gable = new Path2D();
gable.moveTo(-0.1, -4.2);
gable.lineTo(2.5, -6.2);
gable.lineTo(5.1, -4.2);
gable.lineTo(5.1, -6.6);
gable.lineTo(-0.1, -6.6);
gable.closePath();
g.globalCompositeOperation = 'destination-out';
g.fill(gable);
g.restore();
g.strokeStyle = '#a9553a';
g.lineWidth = 0.28;
g.beginPath();
g.moveTo(-0.15, -4.25);
g.lineTo(2.5, -6.3);
g.lineTo(5.15, -4.25);
g.stroke();
// a small round window high under the gable
g.fillStyle = '#d9cdb5';
g.beginPath();
g.arc(2.5, -5.0, 0.26, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#4e4a44';
g.beginPath();
g.arc(2.5, -5.0, 0.19, 0, Math.PI * 2);
g.fill();
