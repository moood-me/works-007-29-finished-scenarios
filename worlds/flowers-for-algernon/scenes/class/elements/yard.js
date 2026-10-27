// The land behind the school, laid over the relief (metres, its middle at distance 27, y toward the viewer): the schoolyard of
// packed earth worn bare up to the railing (distance 12.5), the sidewalk, the street, and across it the lawns before
// the houses, young grass.
g.fillStyle = '#7a7166';
g.fillRect(-40, 14.5, 80, 6.5);
g.fillStyle = 'rgba(95,88,80,0.5)';
for (let i = 0; i < 40; i++) {
  g.beginPath();
  g.ellipse(-38 + e.rnd() * 76, 15 + e.rnd() * 5.5, 0.4 + e.rnd() * 1.2, 0.2 + e.rnd() * 0.5, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#a19a8e';
g.fillRect(-40, 12.5, 80, 2.0);
g.fillStyle = '#56544f';
g.fillRect(-40, 5.0, 80, 7.5);
g.fillStyle = '#a19a8e';
g.fillRect(-40, 3.0, 80, 2.0);
g.fillStyle = '#6f7d4e';
g.fillRect(-40, -21, 80, 24);
g.fillStyle = 'rgba(130,145,90,0.4)';
for (let i = 0; i < 30; i++) g.fillRect(-40 + e.rnd() * 80, -20 + e.rnd() * 22, 2 + e.rnd() * 4, 0.3);
