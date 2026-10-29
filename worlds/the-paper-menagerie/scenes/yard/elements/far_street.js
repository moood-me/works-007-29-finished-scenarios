// Far off behind the houses across the street (100 m): the town's trees and roofs, low, soft blue-green in the haze.
for (let i = 0; i < 120; i++) {
  const x = -300 + i * 5 + e.rnd() * 3,
    r = 3 + e.rnd() * 4.5;
  g.fillStyle = i % 3 ? '#9fb59a' : '#8aa48a';
  g.beginPath();
  g.ellipse(x, -r * 0.65, r, r * 0.9, 0, 0, Math.PI * 2);
  g.fill();
  if (i % 6 === 2) {
    g.fillStyle = '#a7a3a8';
    g.beginPath();
    g.moveTo(x - 4, -2.5);
    g.lineTo(x, -6);
    g.lineTo(x + 4, -2.5);
    g.closePath();
    g.fill();
  }
}
g.fillStyle = '#9fb59a';
g.fillRect(-300, -2.5, 600, 2.55);
