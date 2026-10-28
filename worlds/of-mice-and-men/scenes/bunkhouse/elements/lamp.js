// The light over the table: its cord down from the ceiling (the element's anchor is the bulb, 1.9 m up; the ceiling
// at 1.1 m above it), the socket, the bare bulb under the shade — the scene's light "lamp" (its glow and its light).
g.strokeStyle = '#2e2a26';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(0, -1.1);
g.lineTo(0, -0.24);
g.stroke();
g.fillStyle = '#4a4540';
g.fillRect(-0.025, -0.16, 0.05, 0.08);
g.fillStyle = '#fff2d2';
g.beginPath();
g.ellipse(0, -0.04, 0.04, 0.05, 0, 0, Math.PI * 2);
g.fill();
e.light(0, -0.04, 0.22, '#ffd79a', 1.2, 'bulb');
