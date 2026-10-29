// The desk lamp: a brass stand on a round foot, a dome of white opal glass over the bulb; its light `bulb` (the
// scene's desk_lamp, by `lamp`).
g.fillStyle = '#9c7e3e';
g.beginPath();
g.ellipse(0, -0.02, 0.1, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.014, -0.36, 0.028, 0.34);
g.fillStyle = '#b8964e';
g.fillRect(-0.03, -0.37, 0.06, 0.03);
g.fillStyle = '#ede6d4';
g.beginPath();
g.moveTo(-0.17, -0.36);
g.quadraticCurveTo(-0.15, -0.53, 0, -0.54);
g.quadraticCurveTo(0.15, -0.53, 0.17, -0.36);
g.closePath();
g.fill();
g.fillStyle = '#fff4d8';
g.fillRect(-0.13, -0.37, 0.26, 0.015);
e.light(0, -0.4, 0.22, '#ffe0a8', 0.9, 'bulb');
