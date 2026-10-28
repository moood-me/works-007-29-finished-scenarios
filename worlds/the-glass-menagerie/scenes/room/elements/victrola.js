// The victrola in the corner — the father's: a mahogany cabinet on legs, the turntable on it, a brass horn opening
// up and toward the room; a stack of old records leaning against the cabinet.
g.fillStyle = '#4e2c20';
g.fillRect(-0.28, -0.82, 0.56, 0.62);
g.fillStyle = '#3f2218';
g.fillRect(-0.24, -0.76, 0.22, 0.5);
g.fillRect(0.02, -0.76, 0.22, 0.5);
g.fillStyle = '#5c3626';
g.fillRect(-0.3, -0.86, 0.6, 0.05);
for (const x of [-0.26, 0.22]) g.fillRect(x, -0.2, 0.04, 0.2);
// the turntable box and the tone arm
g.fillStyle = '#5a3324';
g.fillRect(-0.22, -0.98, 0.44, 0.12);
g.fillStyle = '#211b1a';
g.beginPath();
g.ellipse(0, -0.99, 0.17, 0.025, 0, 0, Math.PI * 2);
g.fill();
// the horn: a bent brass neck rising from the back, flaring into a bell turned to the room
g.fillStyle = '#a5803f';
g.beginPath();
g.moveTo(0.12, -0.98);
g.quadraticCurveTo(0.18, -1.15, 0.05, -1.25);
g.lineTo(-0.08, -1.35);
g.quadraticCurveTo(-0.3, -1.55, -0.28, -1.68);
g.quadraticCurveTo(-0.05, -1.62, 0.14, -1.3);
g.lineTo(0.15, -1.22);
g.quadraticCurveTo(0.24, -1.12, 0.17, -0.98);
g.closePath();
g.fill();
g.fillStyle = '#7c5a28';
g.beginPath();
g.ellipse(-0.08, -1.53, 0.17, 0.12, -0.75, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3b2a17';
g.beginPath();
g.ellipse(-0.08, -1.53, 0.1, 0.07, -0.75, 0, Math.PI * 2);
g.fill();
// records leaning against it
g.fillStyle = '#1d1a1b';
g.save();
g.translate(0.36, 0);
g.rotate(0.12);
g.fillRect(-0.03, -0.32, 0.03, 0.32);
g.fillRect(0.0, -0.31, 0.025, 0.31);
g.fillStyle = '#9a4b38';
g.fillRect(-0.025, -0.2, 0.05, 0.06);
g.restore();
e.at(-0.08, -1.53, 'horn');
