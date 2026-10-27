// What is seen through the door: the corridor's far wall in its dusk, oak panels, the edge of a window's daylight.
g.fillStyle = '#2a1e16';
g.fillRect(-1.0, -2.6, 2.0, 2.62);
g.strokeStyle = '#1c140e';
g.lineWidth = 0.03;
for (let x = -0.9; x < 0.6; x += 0.45) g.strokeRect(x, -2.3, 0.38, 1.4);
const lit = g.createLinearGradient(-1, 0, 1, 0);
lit.addColorStop(0, 'rgba(210,170,110,0)');
lit.addColorStop(1, 'rgba(210,170,110,0.22)');
g.fillStyle = lit;
g.fillRect(-1.0, -2.6, 2.0, 2.62);
