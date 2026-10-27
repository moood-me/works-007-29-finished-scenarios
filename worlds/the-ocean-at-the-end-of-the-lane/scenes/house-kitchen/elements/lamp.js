// The ceiling lamp over the middle of the room: a white flex from the plaster rose, an opal glass shade like an
// upturned bowl; its bulb is the point "lamp#bulb".
g.strokeStyle = '#efeadc';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0, -0.6);
g.lineTo(0, -0.12);
g.stroke();
g.fillStyle = '#c9a24c';
g.fillRect(-0.025, -0.14, 0.05, 0.05);
g.fillStyle = '#f6eedc';
g.beginPath();
g.moveTo(-0.04, -0.1);
g.bezierCurveTo(-0.12, -0.09, -0.19, -0.04, -0.2, 0.03);
g.lineTo(0.2, 0.03);
g.bezierCurveTo(0.19, -0.04, 0.12, -0.09, 0.04, -0.1);
g.closePath();
g.fill();
g.fillStyle = '#fff6dc';
g.beginPath();
g.ellipse(0, 0.03, 0.2, 0.025, 0, 0, Math.PI * 2);
g.fill();
e.light(0, 0.03, 0.18, '#ffd89a', 1, 'bulb');
