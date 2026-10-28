// The bed's long side toward the room (metres from the floor, across from its middle; the iron ends are bed_end):
// the iron side rail, the mattress's striped ticking, the sheet and a worn brown blanket hanging over its edge.
g.fillStyle = '#2e2a28';
g.fillRect(-0.95, -0.4, 1.9, 0.04);
g.fillStyle = '#d9d2c2';
g.fillRect(-0.94, -0.52, 1.88, 0.13);
g.fillStyle = 'rgba(80,96,130,0.5)';
for (let x = -0.92; x < 0.94; x += 0.05) g.fillRect(x, -0.52, 0.015, 0.13);
// the blanket over the edge, gathered, its hem uneven
g.fillStyle = '#7a5a44';
g.beginPath();
g.moveTo(-0.2, -0.52);
g.lineTo(0.9, -0.52);
g.lineTo(0.88, -0.3);
for (let x = 0.88; x > -0.2; x -= 0.1) g.quadraticCurveTo(x - 0.05, -0.24 - e.rnd() * 0.04, x - 0.1, -0.29 - e.rnd() * 0.03);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(50,36,26,0.4)';
g.lineWidth = 0.012;
for (let x = -0.1; x < 0.85; x += 0.17) {
  g.beginPath();
  g.moveTo(x, -0.5);
  g.quadraticCurveTo(x + 0.03, -0.4, x - 0.01, -0.28);
  g.stroke();
}
g.fillStyle = '#9a7a5c';
g.fillRect(-0.2, -0.53, 1.1, 0.025);
