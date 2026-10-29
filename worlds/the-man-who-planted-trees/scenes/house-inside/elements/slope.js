// Across the stream, far off: the empty slope rising from the valley to the long bare ridge — what the window shows
// (2.7: the slope under the moon he will plant; 3.4: the ridge, and beyond it the bare slope he will go to). Dry dun
// grass, darker gullies, the ridge's line against the sky. Its point `ridge`
const P = (x) => -(4 + 0.022 * (x + 320) + 1.6 * Math.sin(x * 0.021) + 0.8 * Math.sin(x * 0.067));
g.fillStyle = '#9c8c72';
g.beginPath();
g.moveTo(-320, 1);
for (let x = -320; x <= 320; x += 4) g.lineTo(x, P(x));
g.lineTo(320, 1);
g.closePath();
g.fill();
// the far slope's shading: bands and gullies running down it
g.fillStyle = 'rgba(110, 96, 76, 0.45)';
for (let i = 0; i < 26; i++) {
  const x = -300 + i * 24 + e.rnd() * 10, top = P(x) + 0.6;
  g.beginPath();
  g.moveTo(x, top);
  g.lineTo(x + 3 + e.rnd() * 3, top);
  g.lineTo(x - 6 - e.rnd() * 6, 0.5);
  g.lineTo(x - 10 - e.rnd() * 6, 0.5);
  g.closePath();
  g.fill();
}
// the valley's floor, where the stream runs, a darker line near the foot
g.fillStyle = '#7a6c58';
g.fillRect(-320, -1.2, 640, 2.2);
e.at(10, P(10), 'ridge');
