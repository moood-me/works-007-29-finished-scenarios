// Last night's puddle at the foot of the steps, from above: a shallow ragged sheet of rain water over the trodden
// earth (the sky and the porch mirrored in it), its edge darker mud.
g.fillStyle = '#6e604c';
g.beginPath();
g.ellipse(0, 0, 0.84, 0.44, 0.05, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8d9aa8';
g.beginPath();
g.moveTo(-0.72, 0.02);
g.bezierCurveTo(-0.7, -0.3, -0.2, -0.38, 0.2, -0.34);
g.bezierCurveTo(0.6, -0.3, 0.78, -0.1, 0.72, 0.08);
g.bezierCurveTo(0.66, 0.3, 0.2, 0.38, -0.2, 0.34);
g.bezierCurveTo(-0.55, 0.3, -0.74, 0.2, -0.72, 0.02);
g.closePath();
g.fill();
