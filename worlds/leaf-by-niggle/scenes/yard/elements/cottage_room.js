// The Parishes' bedroom seen through its window (x across, 0 at the floor): a dim papered wall stained where the rain
// came in, a bed's iron foot with a patchwork quilt.
g.fillStyle = '#8f7a68';
g.fillRect(-1.6, -2.6, 3.2, 2.62);
g.fillStyle = 'rgba(120,96,80,0.35)';
for (let x = -1.5; x < 1.6; x += 0.25) g.fillRect(x, -2.6, 0.012, 2.6);
g.fillStyle = '#3c3632';
g.fillRect(-1.3, -1.0, 0.05, 1.0);
g.fillRect(-0.2, -1.0, 0.05, 1.0);
g.fillRect(-1.3, -1.0, 1.15, 0.05);
g.fillStyle = '#a2675a';
g.fillRect(-1.25, -0.72, 1.05, 0.3);
g.fillStyle = '#c9b27e';
g.fillRect(-1.0, -0.72, 0.3, 0.3);
g.fillStyle = 'rgba(84,66,52,0.45)';
g.beginPath();
g.ellipse(-0.4, -2.45, 0.9, 0.3, 0, 0, Math.PI * 2);
g.fill();
