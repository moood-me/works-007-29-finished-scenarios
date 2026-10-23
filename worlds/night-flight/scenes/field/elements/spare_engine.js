// A spare engine on its stand inside the hangar, its cowling off: the dark block, the row of cylinders, the iron
// stand under it.
g.fillStyle = '#3e4246';
g.fillRect(-0.9, -0.7, 0.08, 0.7);
g.fillRect(0.82, -0.7, 0.08, 0.7);
g.fillRect(-0.9, -0.75, 1.8, 0.08);
g.fillStyle = '#5b6064';
g.fillRect(-0.8, -1.45, 1.6, 0.7);
g.fillStyle = '#74797d';
for (let i = 0; i < 6; i++) g.fillRect(-0.72 + i * 0.25, -1.8, 0.18, 0.38);
g.fillStyle = '#9a9ea0';
g.beginPath();
g.arc(-0.95, -1.1, 0.14, 0, Math.PI * 2);
g.fill();
