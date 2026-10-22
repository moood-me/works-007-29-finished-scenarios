// The lantern's glass lit from within: it glows by itself; its flame is the scene's lamp (`lantern_glass#flame`)
g.fillStyle = '#ffd896';
g.beginPath();
g.moveTo(-0.105, -2.37);
g.lineTo(0.105, -2.37);
g.lineTo(0.08, -2.05);
g.lineTo(-0.08, -2.05);
g.closePath();
g.fill();
e.light(0, -2.22, 0.32, '#ffc77a', 1.0, 'flame');
