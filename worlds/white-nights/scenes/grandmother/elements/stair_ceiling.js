// The stair's ceiling over the landing and the flight (x −1…1, y −2.3…2.3): bare boards
g.fillStyle = '#bba68a';
g.fillRect(-1, -2.3, 2, 4.6);
g.beginPath();
for (let x = -1; x <= 1; x += 0.2) { g.moveTo(x, -2.3); g.lineTo(x, 2.3); }
g.strokeStyle = 'rgba(74,63,58,0.3)';
g.lineWidth = 0.008;
g.stroke();
