// The balcony's floor from above (metres; 2.6 along the wall, 1.1 out): boards gone grey, wet.
g.fillStyle = '#6a5e50';
g.fillRect(-1.3, -0.55, 2.6, 1.1);
g.fillStyle = 'rgba(40,34,28,0.4)';
for (let x = -1.3; x < 1.3; x += 0.18) g.fillRect(x, -0.55, 0.015, 1.1);
