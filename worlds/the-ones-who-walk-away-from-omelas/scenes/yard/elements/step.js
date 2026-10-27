// The doorstep from above: one worn slab of pale stone, hollowed where feet go in and out
g.fillStyle = '#cfc4ae';
g.fillRect(-0.75, -0.22, 1.5, 0.44);
const hollow = g.createRadialGradient(0, 0, 0.05, 0, 0, 0.5);
hollow.addColorStop(0, 'rgba(160, 145, 120, 0.5)');
hollow.addColorStop(1, 'rgba(160, 145, 120, 0)');
g.fillStyle = hollow;
g.fillRect(-0.75, -0.22, 1.5, 0.44);
g.strokeStyle = '#b3a78f';
g.lineWidth = 0.015;
g.strokeRect(-0.74, -0.21, 1.48, 0.42);
