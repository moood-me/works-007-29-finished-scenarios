// The street outside the door from above (metres; its middle at distance 13, y toward the viewer): wet sandy earth,
// the ruts of carts, puddles holding the grey sky, the stones at the door's foot.
g.fillStyle = '#7a6a54';
g.fillRect(-15, -6.7, 30, 13.4);
for (let i = 0; i < 160; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(96,82,64,0.5)' : 'rgba(140,124,100,0.4)';
  g.beginPath();
  g.ellipse(-15 + e.rnd() * 30, -6.7 + e.rnd() * 13.4, 0.3 + e.rnd() * 1.2, 0.2 + e.rnd() * 0.5, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(70,58,44,0.6)';
g.lineWidth = 0.12;
for (const y of [-1.2, 0.2]) {
  g.beginPath();
  g.moveTo(-15, y);
  g.bezierCurveTo(-5, y - 0.3, 5, y + 0.3, 15, y);
  g.stroke();
}
for (let i = 0; i < 14; i++) {
  g.fillStyle = 'rgba(172,180,182,0.85)';
  g.beginPath();
  g.ellipse(-12 + e.rnd() * 24, -5 + e.rnd() * 10, 0.4 + e.rnd() * 1.2, 0.15 + e.rnd() * 0.4, e.rnd() * 0.4, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#8a8478';
g.fillRect(-15, 5.9, 30, 0.8);
