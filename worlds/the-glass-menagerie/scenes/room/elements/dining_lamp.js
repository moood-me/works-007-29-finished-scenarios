// The lamp hanging over the dining table: a cord from the ceiling and an amber glass bowl; its bulb is the scene's
// light "dining".
g.strokeStyle = '#2b2420';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -1.1);
g.lineTo(0, -0.16);
g.stroke();
g.fillStyle = '#c99a52';
g.beginPath();
g.moveTo(-0.26, -0.12);
g.quadraticCurveTo(0, 0.06, 0.26, -0.12);
g.lineTo(0.22, -0.16);
g.lineTo(-0.22, -0.16);
g.closePath();
g.fill();
g.fillStyle = '#e8c27e';
g.fillRect(-0.24, -0.135, 0.48, 0.02);
e.light(0, -0.08, 0.2, '#ffcb85', 1, 'bulb');
