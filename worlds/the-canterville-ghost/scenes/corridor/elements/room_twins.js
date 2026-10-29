// What is seen of the twins' room through its door: its far wall (1.8 m wide, 12.4 m away, facing the corridor) —
// two narrow beds end to end, pillows heaped, a cricket bat and a pea-shooter on the wall, a flag of the Union.
g.fillStyle = '#7a7266';
g.fillRect(-0.9, -3.0, 1.8, 3.02);
g.fillStyle = e.lib.OAK;
g.fillRect(-0.9, -1.0, 1.8, 1.0);
g.fillStyle = '#3a2618';
g.fillRect(-0.85, -0.6, 0.8, 0.6);
g.fillStyle = '#e4dccb';
g.fillRect(-0.85, -0.72, 0.8, 0.14);
g.beginPath();
g.ellipse(-0.6, -0.78, 0.16, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c8a86a';
g.fillRect(0.2, -1.9, 0.07, 0.6);
g.fillStyle = '#5a4a3a';
g.fillRect(0.4, -1.75, 0.35, 0.02);
// the flag
g.fillStyle = '#e8e2d6';
g.fillRect(-0.6, -2.4, 0.5, 0.32);
g.fillStyle = '#a8322e';
for (let i = 0; i < 7; i++) g.fillRect(-0.6, -2.4 + i * 0.046, 0.5, 0.023);
g.fillStyle = '#2c3560';
g.fillRect(-0.6, -2.4, 0.22, 0.17);
