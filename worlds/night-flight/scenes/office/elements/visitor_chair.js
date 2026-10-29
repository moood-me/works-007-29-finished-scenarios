// The visitor's chair by the door, seen from before it: bentwood, dark — a round seat 0.46 m up, a hooped back, four
// splayed legs and the ring between them. Its seat is 0.22 m before this card (where one sits).
g.strokeStyle = '#3a271b';
g.lineCap = 'round';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.17, -0.44);
g.lineTo(-0.2, 0);
g.moveTo(0.17, -0.44);
g.lineTo(0.2, 0);
g.moveTo(-0.08, -0.44);
g.lineTo(-0.1, 0);
g.moveTo(0.08, -0.44);
g.lineTo(0.1, 0);
g.stroke();
g.lineWidth = 0.02;
g.beginPath();
g.ellipse(0, -0.16, 0.18, 0.03, 0, 0, Math.PI * 2);
g.stroke();
// the hooped back
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.17, -0.46);
g.bezierCurveTo(-0.2, -0.75, -0.16, -0.93, 0, -0.93);
g.bezierCurveTo(0.16, -0.93, 0.2, -0.75, 0.17, -0.46);
g.stroke();
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.12, -0.5);
g.bezierCurveTo(-0.13, -0.68, -0.1, -0.8, 0, -0.8);
g.bezierCurveTo(0.1, -0.8, 0.13, -0.68, 0.12, -0.5);
g.stroke();
// the seat, its rim seen edge on
g.fillStyle = '#4a3222';
g.beginPath();
g.ellipse(0, -0.45, 0.22, 0.045, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5c4030';
g.fillRect(-0.22, -0.45, 0.44, 0.03);
