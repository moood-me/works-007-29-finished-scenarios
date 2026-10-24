// The table's near long side (x running away from the viewer): the edge of the top, the apron with a drawer, two
// square legs.
const oak = '#8a6a48', dark = '#5e4630';
g.fillStyle = '#b89c74';
g.fillRect(-1.22, -0.78, 2.44, 0.04);
g.fillStyle = oak;
g.fillRect(-1.15, -0.74, 2.3, 0.12);
g.strokeStyle = dark;
g.lineWidth = 0.01;
g.strokeRect(-0.35, -0.72, 0.7, 0.08);
g.fillStyle = '#c9a24c';
g.beginPath();
g.arc(0, -0.68, 0.012, 0, Math.PI * 2);
g.fill();
g.fillStyle = oak;
for (const x of [-1.15, 1.08]) g.fillRect(x, -0.74, 0.07, 0.74);
