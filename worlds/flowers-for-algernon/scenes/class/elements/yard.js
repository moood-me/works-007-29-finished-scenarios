// The schoolyard behind the school and the street past it, from above (metres, its middle at distance 18, y toward the
// viewer): packed earth worn bare, a strip of young grass along the fence, the sidewalk and the street beyond.
g.fillStyle = '#7a7166';
g.fillRect(-30, -11.5, 60, 23);
g.fillStyle = 'rgba(95,88,80,0.5)';
for (let i = 0; i < 60; i++) {
  g.beginPath();
  g.ellipse(-28 + e.rnd() * 56, -11 + e.rnd() * 20, 0.4 + e.rnd() * 1.2, 0.2 + e.rnd() * 0.5, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#6d7a4c';
g.fillRect(-30, -6.4, 60, 1.6);
g.fillStyle = '#a19a8e';
g.fillRect(-30, -8.4, 60, 2.0);
g.fillStyle = '#56544f';
g.fillRect(-30, -11.5, 60, 3.1);
