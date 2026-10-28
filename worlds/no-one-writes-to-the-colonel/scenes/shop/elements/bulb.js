// The bare bulb over the machines on its twisted flex from the ceiling (metres from the bulb; the flex 1.0 up), lit
// against the rainy day; a tin shade.
g.strokeStyle = '#2a2420';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0, -1.05);
g.lineTo(0, -0.12);
g.stroke();
g.fillStyle = '#4a5450';
g.beginPath();
g.moveTo(-0.03, -0.14);
g.lineTo(0.03, -0.14);
g.lineTo(0.16, -0.04);
g.lineTo(-0.16, -0.04);
g.closePath();
g.fill();
g.fillStyle = '#fff2d0';
g.beginPath();
g.ellipse(0, 0.0, 0.035, 0.045, 0, 0, Math.PI * 2);
g.fill();
e.light(0, 0.0, 0.08, '#ffd79a', 1.0, 'glow');
