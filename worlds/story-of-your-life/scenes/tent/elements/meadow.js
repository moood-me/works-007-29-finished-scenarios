// The meadow round the tent, seen from above (metres, y toward the viewer): summer grass, paler worn tracks.
g.fillStyle = '#86965c';
g.fillRect(-18, -25, 36, 50);
for (let i = 0; i < 160; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,138,72,0.5)' : 'rgba(170,170,104,0.4)';
  g.beginPath();
  g.ellipse(-18 + e.rnd() * 36, -25 + e.rnd() * 50, 0.4 + e.rnd() * 1.6, 0.2 + e.rnd() * 0.8, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(176,160,118,0.55)';
g.fillRect(-18, -2.6, 36, 1.4);
