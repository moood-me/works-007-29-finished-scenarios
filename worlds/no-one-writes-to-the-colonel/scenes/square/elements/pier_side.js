// The landing stage seen from the side (metres from the water; its deck at −0.9; facing left, x running toward the
// viewer from its far end at −4): tarred piles standing in the water, braces crossed between them, the deck's edge
// beam, a tyre hung as a fender.
for (let x = -3.9; x <= 4.0; x += 1.3) {
  g.fillStyle = '#2e2924';
  g.fillRect(x - 0.08, -0.9, 0.16, 0.95);
  g.fillStyle = 'rgba(120,130,96,0.5)';
  g.fillRect(x - 0.08, -0.25, 0.16, 0.25);
}
g.strokeStyle = '#3a322a';
g.lineWidth = 0.06;
for (let x = -3.9; x < 3.9; x += 1.3) {
  g.beginPath();
  g.moveTo(x, -0.8);
  g.lineTo(x + 1.3, -0.15);
  g.stroke();
}
g.fillStyle = '#5e5246';
g.fillRect(-4.0, -1.0, 8.0, 0.16);
g.fillStyle = 'rgba(30,26,22,0.45)';
g.fillRect(-4.0, -0.86, 8.0, 0.03);
g.strokeStyle = '#1e1c1a';
g.lineWidth = 0.09;
g.beginPath();
g.ellipse(-3.2, -0.62, 0.22, 0.24, 0, 0, Math.PI * 2);
g.stroke();
