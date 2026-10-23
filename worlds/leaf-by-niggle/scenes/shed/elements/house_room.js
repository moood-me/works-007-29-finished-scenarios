// The Parishes' bedroom seen through its window (x across, 0 at the floor): a dim papered wall, a bed's iron foot with a
// patchwork quilt, a bucket set under the drip from the ceiling, a small lamp on a chair.
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
g.fillStyle = '#7f8a8c';
g.fillRect(0.5, -0.3, 0.25, 0.3);
g.fillStyle = '#5a4836';
g.fillRect(0.95, -0.5, 0.4, 0.05);
g.fillStyle = '#ffd08a';
g.beginPath();
g.ellipse(1.15, -0.62, 0.05, 0.07, 0, 0, Math.PI * 2);
g.fill();
e.light(1.15, -0.62, 0.12, '#ffc070', 0.8, 'lamp');
