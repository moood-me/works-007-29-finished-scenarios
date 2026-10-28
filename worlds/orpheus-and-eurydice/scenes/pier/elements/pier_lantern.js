// Their wedding lantern on the boards between them: a small square lantern of cream paper in a dark wooden frame, a
// ring of wire to carry it by, a candle burning inside (its light the scene's "lantern": it lights their faces).
g.fillStyle = '#3d3128';
g.fillRect(-0.12, -0.04, 0.24, 0.04);
g.fillStyle = '#f6dfb2';
g.fillRect(-0.1, -0.31, 0.2, 0.27);
g.fillStyle = '#3d3128';
for (const x of [-0.11, -0.012, 0.09]) g.fillRect(x, -0.32, 0.022, 0.29);
g.fillRect(-0.12, -0.34, 0.24, 0.035);
g.beginPath();
g.moveTo(-0.07, -0.34);
g.lineTo(0, -0.39);
g.lineTo(0.07, -0.34);
g.closePath();
g.fill();
g.strokeStyle = '#2a221c';
g.lineWidth = 0.01;
g.beginPath();
g.arc(0, -0.41, 0.035, 0, Math.PI * 2);
g.stroke();
e.light(0, -0.17, 0.3, '#ffc27a', 1, 'flame');
