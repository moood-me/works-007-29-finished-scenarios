// Traps's case of samples — Hephaiston, the cloth that does not crease, burn or tear — set down on the gravel by his
// feet: worn brown leather, brass clasps, a handle.
g.fillStyle = '#7a4c2d';
g.beginPath();
g.roundRect(-0.24, -0.34, 0.48, 0.34, 0.03);
g.fill();
g.fillStyle = '#6a4127';
g.fillRect(-0.24, -0.3, 0.48, 0.035);
g.fillStyle = '#c9a54c';
for (const x of [-0.14, 0.14]) g.fillRect(x - 0.02, -0.31, 0.04, 0.05);
g.strokeStyle = '#5a361f';
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(-0.07, -0.34);
g.quadraticCurveTo(0, -0.43, 0.07, -0.34);
g.stroke();
