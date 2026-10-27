// A bunk's near side (metres, its foot at the middle): a plain frame of planks on four square legs, the blanket's
// edge hanging over the rail, the dark under it where a man keeps his bindle.
g.fillStyle = '#2f2722';
g.fillRect(-0.92, -0.38, 1.84, 0.38);
g.fillStyle = '#5d4b3a';
g.fillRect(-0.85, -0.2, 0.6, 0.2);
g.fillStyle = '#8f7a5c';
g.fillRect(-0.97, -0.5, 1.94, 0.13);
g.fillStyle = '#7d6a4f';
g.fillRect(-0.97, -0.5, 0.07, 0.5);
g.fillRect(0.9, -0.5, 0.07, 0.5);
g.fillStyle = '#7b7a72';
g.beginPath();
g.moveTo(-0.4, -0.52);
g.lineTo(0.97, -0.52);
g.lineTo(0.97, -0.36);
for (let x = 0.97; x > -0.4; x -= 0.12) g.quadraticCurveTo(x - 0.06, -0.33, x - 0.12, -0.37);
g.closePath();
g.fill();
