// The ground outside, from above (metres, its middle at distance 22, y toward the viewer): the back yard's spring
// grass from the house to the fence (y 16.5…10), the pavement and the street beyond it, the far verge.
g.fillStyle = '#7f9a62';
g.fillRect(-30, -16.5, 60, 33);
for (let i = 0; i < 260; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(104,132,78,0.5)' : 'rgba(150,170,104,0.45)';
  g.beginPath();
  g.ellipse(-30 + e.rnd() * 60, -5 + e.rnd() * 21.5, 0.3 + e.rnd() * 0.8, 0.1 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
  g.fill();
}
// the pavement before the fence, the street, the far pavement and verge
g.fillStyle = '#b9b2a6';
g.fillRect(-30, -9.6, 60, 1.6);
g.fillStyle = '#6d6b70';
g.fillRect(-30, -8.0, 60, 6.5);
g.fillStyle = '#d8d0b4';
for (let x = -30; x < 30; x += 3) g.fillRect(x, -4.85, 1.4, 0.12);
g.fillStyle = '#b9b2a6';
g.fillRect(-30, -1.5, 60, 1.5);
g.fillStyle = '#86a067';
g.fillRect(-30, -16.5, 60, 1.6);
