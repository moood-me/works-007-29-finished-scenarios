// The lamp over the table: its flex down from the ceiling (the element's anchor is the shade's rim, 1.95 m up), a
// cream enamel shade with a green rim, the bulb under it — the scene's light "lamp" (its glow and its light).
g.strokeStyle = '#5a524a';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0, -0.66);
g.lineTo(0, -0.2);
g.stroke();
g.fillStyle = '#3a3a36';
g.fillRect(-0.02, -0.22, 0.04, 0.05);
g.fillStyle = '#efe4c8';
g.beginPath();
g.moveTo(-0.05, -0.18);
g.quadraticCurveTo(-0.2, -0.12, -0.24, 0);
g.lineTo(0.24, 0);
g.quadraticCurveTo(0.2, -0.12, 0.05, -0.18);
g.closePath();
g.fill();
g.fillStyle = '#5d8a6a';
g.fillRect(-0.245, -0.015, 0.49, 0.02);
g.fillStyle = '#fff4d8';
g.beginPath();
g.ellipse(0, 0.012, 0.05, 0.022, 0, 0, Math.PI * 2);
g.fill();
e.light(0, 0.0, 0.18, '#ffdba6', 1.2, 'bulb');
