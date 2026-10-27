// The street lamp on the sidewalk outside: a dark green cast-iron post, tapering, its arm and a lantern of four panes
// lit warm (its light, `lamp`, lights the street and the houses). Metres from its foot.
g.fillStyle = '#29322e';
g.beginPath();
g.moveTo(-0.11, 0);
g.lineTo(-0.05, -3.9);
g.lineTo(0.05, -3.9);
g.lineTo(0.11, 0);
g.fill();
g.fillRect(-0.14, -0.35, 0.28, 0.35);
g.fillRect(-0.09, -4.0, 0.18, 0.1);
g.fillStyle = '#3a453f';
g.fillRect(-0.16, -4.15, 0.32, 0.06);
g.fillStyle = '#ffe1a2';
g.beginPath();
g.moveTo(-0.15, -4.15);
g.lineTo(-0.2, -4.6);
g.lineTo(0.2, -4.6);
g.lineTo(0.15, -4.15);
g.fill();
g.fillStyle = '#29322e';
g.fillRect(-0.012, -4.6, 0.024, 0.45);
g.beginPath();
g.moveTo(-0.26, -4.6);
g.lineTo(0, -4.82);
g.lineTo(0.26, -4.6);
g.fill();
e.light(0, -4.4, 0.35, '#ffc070', 1.0, 'lamp');
