// The lamp on its hook in the corridor — it is never put out: an iron hook out of the wall, a small lantern hanging
// from it, its glass lit (glow "flame")
g.strokeStyle = '#2a2420';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0, -0.5);
g.lineTo(0, -0.42);
g.quadraticCurveTo(0, -0.36, 0.04, -0.38);
g.stroke();
g.fillStyle = '#2a2420';
g.fillRect(-0.06, -0.38, 0.12, 0.03);
g.fillStyle = '#ffd48a';
g.fillRect(-0.05, -0.35, 0.1, 0.15);
g.strokeStyle = '#2a2420';
g.lineWidth = 0.012;
g.strokeRect(-0.05, -0.35, 0.1, 0.15);
g.beginPath();
g.moveTo(0, -0.35);
g.lineTo(0, -0.2);
g.stroke();
g.fillStyle = '#2a2420';
g.fillRect(-0.065, -0.2, 0.13, 0.03);
e.light(0, -0.27, 0.16, '#ffc070', 1, 'flame');
