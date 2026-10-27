// The yard from above (metres, its middle 40 m ahead, y toward the viewer): beaten dust, paler where the wagons go,
// the ruts of their wheels, tufts of dry grass along the edges.
g.fillStyle = '#7d6d55';
g.fillRect(-100, -30, 200, 60);
g.fillStyle = 'rgba(170,150,115,0.35)';
g.beginPath();
g.moveTo(-100, 4);
g.bezierCurveTo(-30, -2, 10, 10, 100, -8);
g.lineTo(100, 2);
g.bezierCurveTo(10, 20, -30, 8, -100, 14);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(60,48,34,0.45)';
g.lineWidth = 0.18;
for (const dy of [0, 1.6]) {
  g.beginPath();
  g.moveTo(-100, 7 + dy);
  g.bezierCurveTo(-30, 1 + dy, 10, 13 + dy, 100, -5 + dy);
  g.stroke();
}
for (let i = 0; i < 260; i++) {
  const x = -100 + e.rnd() * 200, y = -30 + e.rnd() * 60;
  g.fillStyle = e.rnd() < 0.5 ? '#6f6a45' : '#8a7c50';
  g.beginPath();
  g.ellipse(x, y, 0.3 + e.rnd() * 0.5, 0.2 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
  g.fill();
}
