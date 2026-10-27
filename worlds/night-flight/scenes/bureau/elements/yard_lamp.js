// A lamp on an iron post outside the bureau's door, seen through it: a cold white bulb under a flat shade (`bulb`).
g.fillStyle = '#2c313a';
g.fillRect(-0.05, -4.0, 0.1, 4.0);
g.fillRect(-0.18, -0.15, 0.36, 0.15);
g.beginPath();
g.moveTo(-0.35, -3.8);
g.lineTo(0.35, -3.8);
g.lineTo(0.12, -4.05);
g.lineTo(-0.12, -4.05);
g.closePath();
g.fill();
g.fillStyle = '#f2f5ff';
g.beginPath();
g.arc(0, -3.72, 0.09, 0, Math.PI * 2);
g.fill();
e.light(0, -3.7, 0.5, '#dfe6ff', 1, 'bulb');
