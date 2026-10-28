// The hall's far wall, seen through the open door: warm ochre plaster, a wall lamp with a pleated shade lit (its
// light "lamp"), a coat stand with the judge's hat and Traps's summer coat, a tall mirror's gilt edge.
const W = 1.9;
g.fillStyle = '#d6b07a';
g.fillRect(-W, -3.3, W * 2, 3.3);
g.fillStyle = '#6a4a34';
g.fillRect(-W, -0.14, W * 2, 0.14);
// the lamp
g.fillStyle = '#8a6a2e';
g.fillRect(0.38, -1.95, 0.04, 0.2);
g.fillStyle = '#f2d39a';
g.beginPath();
g.moveTo(0.28, -2.05);
g.lineTo(0.52, -2.05);
g.lineTo(0.58, -1.85);
g.lineTo(0.22, -1.85);
g.closePath();
g.fill();
e.light(0.4, -1.92, 0.22, '#ffc982', 0.9, 'lamp');
// the coat stand and what hangs on it
g.strokeStyle = '#3a2a20';
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-0.5, 0);
g.lineTo(-0.5, -1.85);
g.moveTo(-0.7, 0);
g.lineTo(-0.5, -0.25);
g.lineTo(-0.3, 0);
g.stroke();
g.fillStyle = '#d9cdb4';
g.beginPath();
g.moveTo(-0.46, -1.7);
g.quadraticCurveTo(-0.3, -1.4, -0.34, -0.7);
g.lineTo(-0.56, -0.72);
g.quadraticCurveTo(-0.6, -1.3, -0.5, -1.7);
g.closePath();
g.fill();
g.fillStyle = '#1e1b1a';
g.beginPath();
g.ellipse(-0.58, -1.86, 0.14, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(-0.58, -1.92, 0.08, 0.07, 0, Math.PI, 0);
g.fill();
// the mirror's edge at the right
g.fillStyle = '#b48c3e';
g.fillRect(1.15, -2.4, 0.5, 1.9);
g.fillStyle = '#a7b0ae';
g.fillRect(1.21, -2.34, 0.44, 1.78);
