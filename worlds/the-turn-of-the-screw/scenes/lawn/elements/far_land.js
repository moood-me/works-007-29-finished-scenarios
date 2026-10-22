// The low country far beyond the park: a long line of woods and a gentle rise, blue in the evening air (metres: x
// across, y up).
g.fillStyle = '#6d7f63';
g.beginPath();
g.moveTo(-2500, 8);
for (let x = -2500; x <= 2500; x += 50) g.lineTo(x, -14 - 10 * Math.sin(x / 420) - 6 * Math.sin(x / 130 + 1) - 4 * e.rnd());
g.lineTo(2500, 8);
g.closePath();
g.fill();
