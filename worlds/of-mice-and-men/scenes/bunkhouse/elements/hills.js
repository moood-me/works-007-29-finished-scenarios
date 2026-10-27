// The Gabilan foothills across the valley, a low dark line against the last of the light (metres, its foot at the
// middle).
g.fillStyle = '#3b3f5c';
g.beginPath();
g.moveTo(-1400, 0);
for (let x = -1400; x <= 1400; x += 50) {
  const y = -45 - 30 * Math.sin(x / 260) - 18 * Math.sin(x / 97 + 1.3) - 8 * Math.sin(x / 41);
  g.lineTo(x, y);
}
g.lineTo(1400, 0);
g.closePath();
g.fill();
