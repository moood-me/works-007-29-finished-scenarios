// The door to the yard, standing open into the room (hinged on its right, at x 0; painted shut from x −1 to 0, its
// foot at the hinge): rough boards with a Z brace, a wooden latch, the bottom rubbed pale by boots.
e.lib.boards(g, -1.0, -2.1, 0, 0, 0.165, '#a58b66', 41);
g.fillStyle = '#8a7152';
g.fillRect(-1.0, -1.95, 1.0, 0.12);
g.fillRect(-1.0, -0.35, 1.0, 0.12);
g.save();
g.beginPath();
g.moveTo(-0.92, -0.35);
g.lineTo(-0.82, -0.35);
g.lineTo(-0.08, -1.83);
g.lineTo(-0.18, -1.83);
g.closePath();
g.fillStyle = '#8a7152';
g.fill();
g.restore();
g.fillStyle = '#5b4632';
g.fillRect(-0.92, -1.12, 0.16, 0.05);
g.fillStyle = 'rgba(200,185,160,0.3)';
g.fillRect(-1.0, -0.22, 1.0, 0.22);
