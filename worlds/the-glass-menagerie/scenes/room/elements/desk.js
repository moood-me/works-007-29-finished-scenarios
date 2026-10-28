// The small table by the door where Laura is meant to practise: an old black typewriter, the keyboard chart propped
// beside it, a few sheets — and a little lamp with a green glass shade (its bulb the scene's light "desk").
g.fillStyle = '#4a3125';
g.fillRect(-0.45, -0.76, 0.9, 0.05);
for (const x of [-0.42, 0.38]) g.fillRect(x, -0.72, 0.04, 0.72);
g.fillRect(-0.4, -0.7, 0.8, 0.08);
// the typewriter
g.fillStyle = '#1e1c1e';
g.beginPath();
g.moveTo(-0.2, -0.76);
g.lineTo(0.12, -0.76);
g.lineTo(0.09, -0.9);
g.lineTo(-0.17, -0.9);
g.closePath();
g.fill();
g.fillRect(-0.22, -0.95, 0.36, 0.05);
g.fillStyle = '#3b383a';
g.beginPath();
g.ellipse(-0.04, -0.97, 0.19, 0.022, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e8e2d4';
g.fillRect(-0.12, -1.08, 0.17, 0.12);
g.fillStyle = '#cfc6b6';
for (let r = 0; r < 3; r++) for (let k = 0; k < 7; k++) {
  g.beginPath();
  g.arc(-0.16 + k * 0.035 + r * 0.008, -0.79 - r * 0.028, 0.008, 0, Math.PI * 2);
  g.fill();
}
// the chart and the sheets
g.fillStyle = '#e1d8c4';
g.fillRect(0.15, -0.98, 0.14, 0.2);
g.fillStyle = 'rgba(70,60,50,0.5)';
for (let y = -0.95; y < -0.8; y += 0.025) g.fillRect(0.17, y, 0.1, 0.006);
g.fillStyle = '#ece6d8';
g.fillRect(-0.4, -0.77, 0.18, 0.012);
// the little lamp: a brass foot and arm, a green glass shade
g.fillStyle = '#8a6b3c';
g.fillRect(0.3, -0.785, 0.1, 0.025);
g.fillRect(0.345, -1.08, 0.012, 0.3);
g.fillStyle = '#2f6a4c';
g.beginPath();
g.moveTo(0.25, -1.06);
g.quadraticCurveTo(0.35, -1.16, 0.45, -1.06);
g.lineTo(0.43, -1.04);
g.lineTo(0.27, -1.04);
g.closePath();
g.fill();
e.light(0.35, -1.03, 0.1, '#ffd590', 1, 'bulb');
