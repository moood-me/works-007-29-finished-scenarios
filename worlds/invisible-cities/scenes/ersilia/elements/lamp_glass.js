// The lamp's glass, lit already in the evening: it glows by itself; its flame is the scene's light `lamp`
g.fillStyle = '#ffd99a';
g.beginPath();
g.moveTo(-0.085, -0.3);
g.lineTo(0.085, -0.3);
g.lineTo(0.07, 0);
g.lineTo(-0.07, 0);
g.closePath();
g.fill();
e.light(0, -0.15, 0.28, '#ffcc88', 1.0, 'flame');
