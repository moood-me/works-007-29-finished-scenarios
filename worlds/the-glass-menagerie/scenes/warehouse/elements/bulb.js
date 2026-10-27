// The lamp hanging on its flex from the ceiling (metres from the bulb's foot, y up negative): a green enamel shade,
// white inside, the bulb under it — its glow the point `bulb`, the storeroom's lamplight.
g.strokeStyle = '#2f2b28';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -1.5);
g.lineTo(0, -0.2);
g.stroke();
g.fillStyle = '#3b3a35';
g.fillRect(-0.025, -0.24, 0.05, 0.06);
g.fillStyle = '#3f5e4c';
g.beginPath();
g.moveTo(-0.04, -0.2);
g.lineTo(0.04, -0.2);
g.lineTo(0.2, -0.07);
g.lineTo(-0.2, -0.07);
g.closePath();
g.fill();
g.fillStyle = '#e9e4d6';
g.beginPath();
g.ellipse(0, -0.07, 0.2, 0.025, 0, 0, Math.PI);
g.fill();
g.fillStyle = '#fff4d8';
g.beginPath();
g.arc(0, -0.06, 0.035, 0, Math.PI * 2);
g.fill();
e.light(0, -0.05, 0.12, '#ffd9a0', 1, 'bulb');
