// The low far hills along the southern horizon, over the pastures (here 30 km off, their foot on the tableland): one
// pale blue line, faintly snowed. Metres; the foot at y 0.
const top = x => 260 + 120 * Math.sin(x * 0.00045 + 1.1) + 60 * Math.sin(x * 0.0013) + 25 * Math.sin(x * 0.0049 + 0.6);
g.fillStyle = '#a9b6c6';
g.beginPath();
g.moveTo(-30000, 60);
for (let x = -30000; x <= 30000; x += 150) g.lineTo(x, -top(x));
g.lineTo(30000, 60);
g.closePath();
g.fill();
g.fillStyle = '#d9e1ea';
g.beginPath();
g.moveTo(-30000, -top(-30000));
for (let x = -30000; x <= 30000; x += 150) g.lineTo(x, -top(x));
for (let x = 30000; x >= -30000; x -= 150) g.lineTo(x, -top(x) * (0.82 + 0.06 * Math.sin(x * 0.002)));
g.closePath();
g.fill();
