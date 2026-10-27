// The station's lamp post: an iron post on a stone foot, an arm at the top to the right with the lamp hanging from
// it (its lit glass is lamp_glass). The threads are tied to it at 1.7, 2.6 and 3.5 m.
g.fillStyle = '#8b8172';
g.fillRect(-0.16, -0.25, 0.32, 0.25);
g.fillStyle = '#2f2b29';
g.beginPath();
g.moveTo(-0.07, -0.25);
g.lineTo(-0.045, -4.2);
g.lineTo(0.045, -4.2);
g.lineTo(0.07, -0.25);
g.closePath();
g.fill();
g.fillRect(-0.03, -4.22, 0.62, 0.05);
g.strokeStyle = '#2f2b29';
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.04, -3.7);
g.quadraticCurveTo(0.3, -3.95, 0.58, -4.17);
g.moveTo(0.55, -4.17);
g.lineTo(0.55, -4.0);
g.stroke();
g.beginPath();
g.moveTo(0.42, -3.92);
g.lineTo(0.55, -4.02);
g.lineTo(0.68, -3.92);
g.closePath();
g.fill();
g.fillRect(0.45, -3.62, 0.2, 0.04);
