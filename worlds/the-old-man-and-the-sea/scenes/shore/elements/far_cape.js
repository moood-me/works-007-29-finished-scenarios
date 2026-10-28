// A low headland far off over the Gulf to the right, 2 km away: a long dark-green line, a little higher at its end.
// Metres, the waterline at the anchor.
g.fillStyle = '#5d6b5c';
g.beginPath();
g.moveTo(-600, 0);
for (let x = -600; x <= 600; x += 20) g.lineTo(x, -8 - 22 * Math.max(0, (x + 100) / 700) ** 1.5 - 3 * Math.sin(x * 0.02));
g.lineTo(600, 0);
g.closePath();
g.fill();
