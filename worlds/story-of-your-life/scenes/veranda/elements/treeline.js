// Beyond the back fence, from their feet (metres; x across, y up negative): the neighbours' trees as dark rounded
// crowns, a roof between them with one lit window under its eave.
g.fillStyle = '#58554f';
g.beginPath();
g.moveTo(-1.5, -4.6);
g.lineTo(2.2, -7.2);
g.lineTo(5.9, -4.6);
g.closePath();
g.fill();
g.fillStyle = '#8c8a80';
g.fillRect(-1.0, -4.65, 6.4, 4.65);
g.fillStyle = '#f2c98a';
g.fillRect(0.4, -3.4, 0.7, 0.8);
e.light(0.75, -3.0, 0.35, '#ffcf8a', 0.5, 'window');
for (let i = 0; i < 70; i++) {
  const x = -20 + e.rnd() * 40, r = 1.2 + e.rnd() * 1.8;
  if (x > -1.8 && x < 6.2 && e.rnd() < 0.85) continue;
  const top = -(4.5 + e.rnd() * 4.5);
  g.fillStyle = e.rnd() < 0.5 ? '#2f4536' : '#3a5440';
  g.beginPath();
  g.ellipse(x, top + r, r, r * 1.1, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - r * 0.7, top + r, r * 1.4, -top - r + 0.1);
}
