// The lantern's glass lit from within: it glows by itself; its flame is the scene's lamp (`lantern_glass#flame`)
g.fillStyle = '#ffd896';
g.beginPath();
g.moveTo(-0.095, -2.19);
g.lineTo(0.095, -2.19);
g.lineTo(0.075, -1.9);
g.lineTo(-0.075, -1.9);
g.closePath();
g.fill();
e.light(0, -2.05, 0.3, '#ffc77a', 1.0, 'flame');
