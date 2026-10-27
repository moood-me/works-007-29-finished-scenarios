// The roof's near slope seen from the yard (metres, from above along the slope; its far edge the ridge): grey-brown
// asphalt shingles in courses, a little mossy toward the eaves, a white gutter along its foot.
g.fillStyle = '#76686a';
g.fillRect(-8.3, -1.6, 16.6, 3.2);
for (let y = -1.6, row = 0; y < 1.5; y += 0.2, row++) {
  g.fillStyle = 'rgba(40,30,34,0.35)';
  g.fillRect(-8.3, y, 16.6, 0.025);
  for (let x = -8.3 + (row % 2) * 0.17; x < 8.3; x += 0.34) {
    g.fillStyle = e.rnd() < 0.15 ? 'rgba(150,138,130,0.35)' : 'rgba(60,50,52,0.15)';
    g.fillRect(x, y + 0.025, 0.32, 0.17);
  }
}
for (let i = 0; i < 60; i++) {
  g.fillStyle = 'rgba(120,138,96,0.35)';
  g.beginPath();
  g.ellipse(-8 + e.rnd() * 16, 0.9 + e.rnd() * 0.5, 0.2 + e.rnd() * 0.3, 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#efeee8';
g.fillRect(-8.3, 1.48, 16.6, 0.12);
