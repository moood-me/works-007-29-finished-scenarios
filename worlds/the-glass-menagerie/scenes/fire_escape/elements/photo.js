// The father's photograph on the living room's far wall, seen through the window from the landing: a young man in a
// doughboy's cap, smiling — the same picture the flat's own scene hangs over the daybed. Its point `face`.
g.fillStyle = '#5e4728';
g.fillRect(-0.3, -0.76, 0.6, 0.76);
g.fillStyle = '#8b6d3e';
g.fillRect(-0.27, -0.73, 0.54, 0.7);
g.fillStyle = '#e3d6bd';
g.fillRect(-0.24, -0.7, 0.48, 0.64);
g.fillStyle = '#b39a76';
g.fillRect(-0.2, -0.66, 0.4, 0.56);
// the uniform's shoulders
g.fillStyle = '#6f5c42';
g.beginPath();
g.moveTo(-0.2, -0.1);
g.bezierCurveTo(-0.19, -0.22, -0.12, -0.26, -0.05, -0.27);
g.lineTo(0.05, -0.27);
g.bezierCurveTo(0.12, -0.26, 0.19, -0.22, 0.2, -0.1);
g.closePath();
g.fill();
g.fillStyle = '#5e4c35';
g.fillRect(-0.035, -0.28, 0.07, 0.06);
// the face
g.fillStyle = '#dcc39c';
g.beginPath();
g.ellipse(0, -0.39, 0.068, 0.088, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d1b68e';
g.fillRect(-0.03, -0.31, 0.06, 0.04);
// the cap, worn at a cheerful slant
g.fillStyle = '#4f3f2c';
g.save();
g.translate(0, -0.47);
g.rotate(-0.12);
g.beginPath();
g.ellipse(0, 0, 0.09, 0.035, 0, Math.PI, Math.PI * 2);
g.fill();
g.fillRect(-0.085, -0.005, 0.17, 0.016);
g.fillStyle = '#3d3022';
g.beginPath();
g.ellipse(0.02, 0.016, 0.07, 0.014, 0, 0, Math.PI);
g.fill();
g.restore();
// the eyes, the brows, the grin
g.fillStyle = '#3a2e22';
g.beginPath();
g.ellipse(-0.026, -0.405, 0.008, 0.006, 0, 0, Math.PI * 2);
g.ellipse(0.026, -0.405, 0.008, 0.006, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#3a2e22';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.04, -0.423);
g.lineTo(-0.013, -0.427);
g.moveTo(0.013, -0.427);
g.lineTo(0.04, -0.423);
g.stroke();
g.lineWidth = 0.007;
g.beginPath();
g.moveTo(-0.032, -0.36);
g.quadraticCurveTo(0, -0.335, 0.032, -0.36);
g.stroke();
g.fillStyle = '#f2e8d4';
g.beginPath();
g.moveTo(-0.026, -0.357);
g.quadraticCurveTo(0, -0.342, 0.026, -0.357);
g.closePath();
g.fill();
e.at(0, -0.39, 'face');
