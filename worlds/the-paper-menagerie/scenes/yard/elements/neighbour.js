// Next door, beyond our side fence (15 m off): a blue-grey clapboard house, its white trim and shut windows, a grey
// roof, and a lilac bush coming into flower by its corner.
g.fillStyle = '#aebbc4';
g.fillRect(-5, -3.2, 10, 3.2);
g.fillStyle = 'rgba(0,0,0,0.06)';
for (let y = -3.0; y < 0; y += 0.22) g.fillRect(-5, y, 10, 0.03);
g.fillStyle = '#6a6c78';
g.beginPath();
g.moveTo(-5.4, -3.2);
g.lineTo(-3.6, -5.8);
g.lineTo(3.6, -5.8);
g.lineTo(5.4, -3.2);
g.closePath();
g.fill();
for (const x of [-3.2, -0.6, 2.6]) {
  g.fillStyle = '#f0eee6';
  g.fillRect(x - 0.6, -2.5, 1.2, 1.4);
  g.fillStyle = '#7d8aa0';
  g.fillRect(x - 0.5, -2.4, 1.0, 1.2);
  g.fillStyle = '#f0eee6';
  g.fillRect(x - 0.02, -2.4, 0.04, 1.2);
}
g.fillStyle = '#d8d4c8';
g.fillRect(-5, -0.4, 10, 0.4);
// the lilac
for (let k = 0; k < 40; k++) {
  g.fillStyle = k % 3 ? '#6f8d58' : '#a98cc0';
  g.beginPath();
  g.ellipse(4.6 + (e.rnd() - 0.5) * 2.2, -1.2 - e.rnd() * 1.4, 0.35, 0.25, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
