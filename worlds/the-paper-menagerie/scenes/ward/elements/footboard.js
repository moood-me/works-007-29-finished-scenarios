// The bed's foot (facing into the room's middle; x −0.45…0.45 across it): white-enamelled tubes like the head's, a
// little lower, and her chart on its clipboard hung over the top rail.
g.strokeStyle = '#f1f1ec';
g.lineCap = 'round';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.44, 0);
g.lineTo(-0.44, -0.82);
g.quadraticCurveTo(-0.44, -0.9, -0.36, -0.9);
g.lineTo(0.36, -0.9);
g.quadraticCurveTo(0.44, -0.9, 0.44, -0.82);
g.lineTo(0.44, 0);
g.stroke();
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.44, -0.6);
g.lineTo(0.44, -0.6);
g.stroke();
g.fillStyle = '#9a7a52';
g.fillRect(-0.12, -0.9, 0.24, 0.32);
g.fillStyle = '#f6f4ec';
g.fillRect(-0.105, -0.86, 0.21, 0.27);
g.fillStyle = 'rgba(70,80,110,0.5)';
for (let y = -0.83; y < -0.62; y += 0.025) g.fillRect(-0.09, y, 0.12 + ((y * 97) % 0.06), 0.005);
g.fillStyle = '#7d7f80';
g.fillRect(-0.04, -0.92, 0.08, 0.035);
