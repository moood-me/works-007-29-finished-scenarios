// The far edge of the meadow: a low line of cottonwoods and pines, blue with the morning air (metres from its foot).
g.fillStyle = '#5f7466';
g.beginPath();
g.moveTo(-30, 0.1);
for (let x = -30; x <= 30; x += 0.8) g.lineTo(x, -4.5 - 3.5 * e.rnd() - 1.5 * Math.sin(x * 0.17));
g.lineTo(30, 0.1);
g.closePath();
g.fill();
