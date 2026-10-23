// The ground outside, from above (metres, its middle at distance 60, y toward the viewer — distance d is y 60 − d):
// the back yard's spring grass from the house to the fence (d 5…12), the pavement, the street, the far pavement, and
// the lawns of the houses across it on to the far distance.
g.fillStyle = '#86a067';
g.fillRect(-150, -55, 300, 110);
for (let i = 0; i < 220; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(104,132,78,0.5)' : 'rgba(150,170,104,0.45)';
  g.beginPath();
  g.ellipse(-20 + e.rnd() * 40, 47 + e.rnd() * 8, 0.3 + e.rnd() * 0.8, 0.1 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#b9b2a6';
g.fillRect(-150, 46.2, 300, 1.6);
g.fillStyle = '#6d6b70';
g.fillRect(-150, 39.7, 300, 6.5);
g.fillStyle = '#d8d0b4';
for (let x = -60; x < 60; x += 3) g.fillRect(x, 42.9, 1.4, 0.12);
g.fillStyle = '#b9b2a6';
g.fillRect(-150, 38.2, 300, 1.5);
