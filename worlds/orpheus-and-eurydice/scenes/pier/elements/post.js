// The mooring post at the pier's end, standing up out of the water past the deck (its top 1.3 m over the lake's bed),
// a turn of old rope round it under the top.
g.fillStyle = '#5c4d3e';
g.beginPath();
g.moveTo(-0.1, 0.1);
g.lineTo(-0.1, -1.24);
g.quadraticCurveTo(0, -1.32, 0.1, -1.24);
g.lineTo(0.1, 0.1);
g.closePath();
g.fill();
g.fillStyle = 'rgba(30,24,20,0.45)';
g.fillRect(0.04, -1.25, 0.06, 1.35);
g.fillStyle = '#3a3129';
g.fillRect(-0.1, -0.14, 0.2, 0.24);
g.fillStyle = '#a8977a';
for (let i = 0; i < 3; i++) g.fillRect(-0.12, -0.98 + i * 0.05, 0.24, 0.035);
g.strokeStyle = '#a8977a';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-0.1, -0.88);
g.quadraticCurveTo(-0.12, -0.7, -0.05, -0.62);
g.stroke();
