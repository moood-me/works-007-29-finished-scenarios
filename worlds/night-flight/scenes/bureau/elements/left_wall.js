// The left wall, seen from the room (its +x runs away from the viewer): the same distemper and green dado; the door
// onto the field standing open (x −0.15…0.95: the night outside seen through it); coat hooks beyond it with a grey
// overcoat and a hat; a framed photograph of a biplane by the far corner.
g.fillStyle = '#bfb9a1';
g.beginPath();
g.rect(-3.5, -3.55, 7, 3.6);
g.rect(-0.15, -2.2, 1.1, 2.25);
g.fill('evenodd');
g.fillStyle = '#495a49';
g.beginPath();
g.rect(-3.5, -1.1, 7, 1.1);
g.rect(-0.15, -1.2, 1.1, 1.25);
g.fill('evenodd');
g.fillStyle = '#374436';
g.fillRect(-3.5, -1.14, 3.35, 0.06);
g.fillRect(0.95, -1.14, 2.55, 0.06);
g.fillStyle = '#2e2620';
g.fillRect(-3.5, -0.14, 3.35, 0.14);
g.fillRect(0.95, -0.14, 2.55, 0.14);
// the door's frame: dark wood round the opening, a worn threshold
g.fillStyle = '#3a2a1e';
g.fillRect(-0.27, -2.3, 0.12, 2.3);
g.fillRect(0.95, -2.3, 0.12, 2.3);
g.fillRect(-0.27, -2.32, 1.34, 0.12);
g.fillStyle = '#5c4632';
g.fillRect(-0.15, -0.03, 1.1, 0.06);
// coat hooks beyond the door, an overcoat hanging and a bowler on the next hook (drawn 3.85 m further along)
g.save();
g.translate(3.85, 0);
g.fillStyle = '#3a2a1e';
g.fillRect(-2.6, -1.95, 1.2, 0.08);
g.fillStyle = '#5d6066';
g.beginPath();
g.moveTo(-2.35, -1.9);
g.lineTo(-2.0, -1.9);
g.lineTo(-1.9, -0.75);
g.lineTo(-2.45, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#4c4f55';
g.fillRect(-2.2, -1.9, 0.05, 1.15);
g.fillStyle = '#26241f';
g.beginPath();
g.ellipse(-1.65, -1.98, 0.17, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.arc(-1.65, -1.99, 0.11, Math.PI, 0);
g.fill();
g.restore();
// the photograph by the far corner: a dark frame, a pale print of a biplane over clouds (0.9 m further along)
g.save();
g.translate(0.9, 0);
g.fillStyle = '#2e241c';
g.fillRect(1.6, -2.45, 0.8, 0.6);
g.fillStyle = '#d9d2c0';
g.fillRect(1.66, -2.39, 0.68, 0.48);
g.fillStyle = '#6f6a60';
g.fillRect(1.8, -2.17, 0.4, 0.03);
g.fillRect(1.85, -2.25, 0.3, 0.02);
g.fillRect(1.95, -2.2, 0.03, 0.1);
g.restore();
