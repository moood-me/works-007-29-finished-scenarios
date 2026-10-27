// The lamp hanging over the shop (metres down from its hook in the ceiling): a cord, a wide shallow shade of milky
// glass, the bulb's glow under it — lit, as the shop is still dim inside in the morning.
g.strokeStyle = '#4a443c';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, 0.62);
g.stroke();
g.fillStyle = '#f3ead8';
g.beginPath();
g.moveTo(-0.04, 0.62);
g.lineTo(0.04, 0.62);
g.quadraticCurveTo(0.26, 0.7, 0.27, 0.84);
g.lineTo(-0.27, 0.84);
g.quadraticCurveTo(-0.26, 0.7, -0.04, 0.62);
g.closePath();
g.fill();
g.fillStyle = '#c9a85a';
g.fillRect(-0.05, 0.6, 0.1, 0.05);
e.light(0, 0.86, 0.14, '#ffd8a0', 0.8, 'bulb');
