// The travelling bag in the corner, opened and empty: a worn brown leather gladstone gaping, its dark inside showing,
// its strap trailing on the floor.
g.fillStyle = '#6a4630';
g.beginPath();
g.moveTo(-0.32, -0.02);
g.lineTo(-0.36, -0.3);
g.quadraticCurveTo(-0.3, -0.38, -0.2, -0.36);
g.lineTo(0.22, -0.36);
g.quadraticCurveTo(0.32, -0.38, 0.36, -0.3);
g.lineTo(0.32, -0.02);
g.closePath();
g.fill();
// the open mouth and its dark inside
g.fillStyle = '#2c211b';
g.beginPath();
g.ellipse(0, -0.37, 0.27, 0.06, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#8a6448';
g.lineWidth = 0.022;
g.beginPath();
g.ellipse(0, -0.37, 0.28, 0.065, 0, 0, Math.PI * 2);
g.stroke();
// its handles, fallen to the sides
g.strokeStyle = '#4c3222';
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.15, -0.36);
g.quadraticCurveTo(-0.32, -0.5, -0.4, -0.3);
g.moveTo(0.15, -0.36);
g.quadraticCurveTo(0.32, -0.5, 0.4, -0.3);
g.stroke();
// the strap trailing
g.strokeStyle = '#5a3a28';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(0.3, -0.15);
g.quadraticCurveTo(0.5, -0.05, 0.62, -0.01);
g.stroke();
g.fillStyle = '#b89a5a';
g.fillRect(-0.04, -0.2, 0.08, 0.05);
