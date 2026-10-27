// The floor from above (metres, its middle at distance 3.6, y toward the viewer): tiles in a checkerboard of cream
// and oxblood, worn duller in a path along the counter and from the door.
const S = 0.32;
g.fillStyle = '#5c2c27';
g.fillRect(-3.2, -2.6, 6.4, 5.2);
for (let i = 0; i * S < 6.4; i++) {
  for (let j = 0; j * S < 5.2; j++) {
    g.fillStyle = (i + j) % 2 ? '#7a3a33' : '#e2d4b6';
    g.fillRect(-3.2 + i * S + 0.004, -2.6 + j * S + 0.004, S - 0.008, S - 0.008);
  }
}
g.fillStyle = 'rgba(120,100,80,0.14)';
g.beginPath();
g.ellipse(1.6, -0.9, 1.9, 0.45, 0, 0, Math.PI * 2);
g.ellipse(-2.4, 1.2, 0.6, 1.1, 0, 0, Math.PI * 2);
g.fill();
