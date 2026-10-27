// The street lamp at the corner past the railing, just lit: a dark post, a curved arm, a shade over a bulb (its
// light, `lamp`, lights the yard). Metres from its foot.
g.fillStyle = '#2b2f2d';
g.beginPath();
g.moveTo(-0.1, 0);
g.lineTo(-0.05, -4.6);
g.lineTo(0.05, -4.6);
g.lineTo(0.1, 0);
g.fill();
g.lineWidth = 0.06;
g.strokeStyle = '#2b2f2d';
g.beginPath();
g.moveTo(0, -4.6);
g.quadraticCurveTo(0, -5.1, -0.6, -5.05);
g.stroke();
g.beginPath();
g.moveTo(-0.85, -4.85);
g.quadraticCurveTo(-0.6, -5.15, -0.35, -4.85);
g.closePath();
g.fill();
g.fillStyle = '#ffe2a8';
g.beginPath();
g.ellipse(-0.6, -4.84, 0.1, 0.05, 0, 0, Math.PI * 2);
g.fill();
e.light(-0.6, -4.8, 0.3, '#ffc878', 1.0, 'lamp');
