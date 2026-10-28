// The low country far beyond the park: a long wooded rise, blue-grey in the autumn air (metres: x across, y up).
g.fillStyle = '#7d8270';
g.beginPath();
g.moveTo(-2500, 8);
for (let x = -2500; x <= 2500; x += 50) g.lineTo(x, -16 - 9 * Math.sin(x / 380) - 6 * Math.sin(x / 120 + 2) - 4 * e.rnd());
g.lineTo(2500, 8);
g.closePath();
g.fill();
