// On the stove's top, against the stack: a round clay pot with a lid, a copper pan on its side, a jug — the Mistress's
// kitchen things (standing 1.6 m up).
const L = e.lib;
// the clay pot
g.fillStyle = '#a5532e';
g.beginPath();
g.ellipse(-0.35, -0.16, 0.16, 0.16, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c06a3c';
g.beginPath();
g.ellipse(-0.39, -0.2, 0.08, 0.09, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8a4426';
g.fillRect(-0.47, -0.33, 0.24, 0.04);
g.beginPath();
g.ellipse(-0.35, -0.34, 0.07, 0.03, 0, 0, Math.PI * 2);
g.fill();
// the copper pan, lying, its round bottom toward the room
g.fillStyle = '#b8743a';
g.beginPath();
g.ellipse(0.12, -0.13, 0.13, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d99a5a';
g.beginPath();
g.ellipse(0.09, -0.16, 0.06, 0.06, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6b4a2c';
g.fillRect(0.24, -0.16, 0.22, 0.035);
// the jug
g.fillStyle = '#d8c7a2';
g.beginPath();
g.moveTo(0.52, 0);
g.quadraticCurveTo(0.46, -0.16, 0.54, -0.24);
g.lineTo(0.6, -0.24);
g.quadraticCurveTo(0.68, -0.16, 0.62, 0);
g.closePath();
g.fill();
g.fillStyle = '#3f62a8';
g.fillRect(0.5, -0.12, 0.14, 0.02);
L.dabs(g, 131, -0.5, -0.33, 1.2, 0.33, ['#7a3a20'], 6, 0.02, 0.8, 0.3);
