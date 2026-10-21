// The lantern room's frame over the glass: the low stone parapet, the iron mullions, the dark domed roof with its
// vent and finial.
g.fillStyle = '#cfccc4';
g.fillRect(-1.5, -0.5, 3, 0.5);
g.fillStyle = '#2b2e33';
g.fillRect(-1.45, -0.56, 2.9, 0.08);
for (const x of [-1.3, -0.65, 0, 0.65, 1.3]) g.fillRect(x - 0.04, -2.45, 0.08, 1.95);
g.fillRect(-1.4, -1.5, 2.8, 0.05);
g.fillRect(-1.45, -2.5, 2.9, 0.1);
g.fillStyle = '#3a3f46';
g.beginPath();
g.moveTo(-1.55, -2.45);
g.quadraticCurveTo(-1.4, -3.55, 0, -3.75);
g.quadraticCurveTo(1.4, -3.55, 1.55, -2.45);
g.closePath();
g.fill();
g.fillRect(-0.18, -4.0, 0.36, 0.3);
g.beginPath();
g.arc(0, -4.15, 0.13, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.02, -4.45, 0.04, 0.3);
