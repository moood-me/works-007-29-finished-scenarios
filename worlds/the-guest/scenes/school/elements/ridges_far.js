// The farthest mountains, beyond the ridges (11 km off here): a pale snowy line along the horizon. Metres; the foot at
// y 0.
const top = x => 480 + 220 * Math.sin(x * 0.0006 + 2.4) + 120 * Math.sin(x * 0.0017) + 50 * Math.sin(x * 0.0052 + 0.9);
g.fillStyle = '#b4c2d4';
g.beginPath();
g.moveTo(-12000, 60);
for (let x = -12000; x <= 12000; x += 60) g.lineTo(x, -top(x));
g.lineTo(12000, 60);
g.closePath();
g.fill();
g.fillStyle = '#e3eaf2';
g.beginPath();
g.moveTo(-12000, -top(-12000));
for (let x = -12000; x <= 12000; x += 60) g.lineTo(x, -top(x));
for (let x = 12000; x >= -12000; x -= 60) g.lineTo(x, -top(x) * (0.72 + 0.08 * Math.sin(x * 0.004)));
g.closePath();
g.fill();
