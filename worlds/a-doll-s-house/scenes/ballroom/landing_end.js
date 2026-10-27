// The landing's end wall, facing the room through the doorway: the ochre wall, a wall lamp with a frosted globe (its
// glow `lamp`; the light "landing" stands before it), a coat stand with a lady's cloak and a top hat on it.
g.fillStyle = '#c99d63';
g.fillRect(-0.47, -3.0, 0.94, 3.02);
g.fillStyle = '#7d5a35';
g.fillRect(-0.47, -0.9, 0.94, 0.9);
g.fillStyle = '#4a3020';
g.fillRect(-0.47, -0.98, 0.94, 0.08);
g.fillStyle = '#b8924a';
g.fillRect(-0.24, -2.05, 0.04, 0.22);
g.fillStyle = '#ffe9be';
g.beginPath();
g.arc(-0.22, -2.12, 0.09, 0, Math.PI * 2);
g.fill();
e.light(-0.22, -2.12, 0.12, '#ffd28a', 0.8, 'lamp');
// the coat stand
g.fillStyle = '#3a2418';
g.fillRect(0.16, -1.9, 0.035, 1.9);
g.fillRect(0.06, -0.03, 0.24, 0.03);
g.fillStyle = '#5b3a52';
g.beginPath();
g.moveTo(0.12, -1.8);
g.lineTo(0.24, -1.8);
g.lineTo(0.32, -0.75);
g.lineTo(0.04, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#1a1819';
g.fillRect(0.1, -2.08, 0.16, 0.16);
g.fillRect(0.06, -1.93, 0.24, 0.03);
