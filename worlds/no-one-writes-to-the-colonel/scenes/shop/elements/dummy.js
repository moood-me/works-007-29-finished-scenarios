// The tailor's dummy (metres from its foot): a torso of padded canvas on a turned stand with three feet, a jacket of
// white drill half made on it — one sleeve tacked on, the other not yet, white basting stitches, chalk lines, pins in
// a row down the front; a tape measure over its shoulders.
g.fillStyle = '#3a2e24';
g.fillRect(-0.02, -0.95, 0.04, 0.9);
g.beginPath();
g.moveTo(-0.25, 0);
g.lineTo(0, -0.08);
g.lineTo(0.25, 0);
g.lineTo(0, -0.03);
g.closePath();
g.fill();
g.fillStyle = '#4a3a2c';
g.beginPath();
g.ellipse(0, -0.95, 0.05, 0.03, 0, 0, Math.PI * 2);
g.fill();
// the canvas torso, its neck
g.fillStyle = '#b8a888';
g.beginPath();
g.moveTo(-0.06, -1.6);
g.lineTo(-0.06, -1.53);
g.lineTo(0.06, -1.53);
g.lineTo(0.06, -1.6);
g.closePath();
g.fill();
g.fillStyle = '#3a2e24';
g.beginPath();
g.ellipse(0, -1.61, 0.05, 0.02, 0, 0, Math.PI * 2);
g.fill();
// the jacket on it
g.fillStyle = '#e6e1d4';
g.beginPath();
g.moveTo(-0.07, -1.53);
g.quadraticCurveTo(-0.2, -1.5, -0.24, -1.44);
g.lineTo(-0.2, -1.2);
g.quadraticCurveTo(-0.17, -1.05, -0.2, -0.86);
g.lineTo(0.2, -0.86);
g.quadraticCurveTo(0.17, -1.05, 0.2, -1.2);
g.lineTo(0.24, -1.44);
g.quadraticCurveTo(0.2, -1.5, 0.07, -1.53);
g.closePath();
g.fill();
// the one sleeve tacked on
g.beginPath();
g.moveTo(-0.24, -1.44);
g.quadraticCurveTo(-0.3, -1.3, -0.29, -1.0);
g.lineTo(-0.22, -0.99);
g.lineTo(-0.2, -1.2);
g.closePath();
g.fill();
g.fillStyle = 'rgba(150,140,120,0.35)';
g.fillRect(-0.005, -1.5, 0.01, 0.64);
// the lapels
g.strokeStyle = 'rgba(140,130,110,0.6)';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.07, -1.52);
g.lineTo(-0.1, -1.3);
g.lineTo(0, -1.15);
g.moveTo(0.07, -1.52);
g.lineTo(0.1, -1.3);
g.lineTo(0, -1.15);
g.stroke();
// basting and chalk
g.strokeStyle = 'rgba(255,255,255,0.95)';
g.lineWidth = 0.004;
g.setLineDash([0.02, 0.015]);
g.beginPath();
g.moveTo(-0.22, -1.42);
g.lineTo(-0.19, -1.2);
g.moveTo(0.16, -1.2);
g.lineTo(0.16, -0.9);
g.stroke();
g.setLineDash([]);
g.strokeStyle = 'rgba(80,110,160,0.6)';
g.beginPath();
g.moveTo(-0.15, -1.0);
g.lineTo(0.15, -1.02);
g.stroke();
g.fillStyle = '#7a7a7e';
for (let i = 0; i < 6; i++) g.fillRect(0.03, -1.4 + i * 0.07, 0.025, 0.005);
// the tape over the shoulders
g.strokeStyle = '#c8a840';
g.lineWidth = 0.016;
g.beginPath();
g.moveTo(-0.11, -1.0);
g.quadraticCurveTo(-0.1, -1.4, -0.06, -1.53);
g.moveTo(0.11, -1.05);
g.quadraticCurveTo(0.1, -1.4, 0.06, -1.53);
g.stroke();
