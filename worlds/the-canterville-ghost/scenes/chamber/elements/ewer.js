// The old ewer on the floor beside the trencher (0.34 m high): a pewter jug, round-bellied, a narrow neck, a lip
// and a handle — dry for three hundred years.
g.fillStyle = '#7e7e7a';
g.beginPath();
g.moveTo(-0.07, 0);
g.bezierCurveTo(-0.15, -0.06, -0.14, -0.17, -0.06, -0.21);
g.lineTo(-0.045, -0.3);
g.lineTo(-0.07, -0.335);
g.lineTo(0.06, -0.335);
g.lineTo(0.045, -0.3);
g.lineTo(0.06, -0.21);
g.bezierCurveTo(0.14, -0.17, 0.15, -0.06, 0.07, 0);
g.closePath();
g.fill();
// the lip, the handle
g.beginPath();
g.moveTo(-0.07, -0.335);
g.lineTo(-0.11, -0.345);
g.lineTo(-0.065, -0.31);
g.fill();
g.strokeStyle = '#6a6a66';
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(0.05, -0.3);
g.bezierCurveTo(0.16, -0.3, 0.16, -0.16, 0.1, -0.12);
g.stroke();
g.fillStyle = 'rgba(170,170,164,0.5)';
g.beginPath();
g.ellipse(-0.05, -0.12, 0.025, 0.05, 0, 0, Math.PI * 2);
g.fill();
e.at(0, -0.17, 'ewer');
