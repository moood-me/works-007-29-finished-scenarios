// The storeroom's right wall (x 0 at the back … 5.2 m at the viewer): rough stone, a long crack, the damp higher
// here, where the child sits
e.lib.stones(g, [[0, -2.36, 5.22, 0.02]], 31);
const damp = g.createRadialGradient(2.45, 0, 0.1, 2.45, 0, 1.4);
damp.addColorStop(0, 'rgba(48, 40, 32, 0.55)');
damp.addColorStop(1, 'rgba(48, 40, 32, 0)');
g.fillStyle = damp;
g.fillRect(1.05, -1.4, 2.8, 1.42);
g.strokeStyle = '#4c4236';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.9, -2.36);
g.lineTo(1.0, -2.0);
g.lineTo(0.94, -1.7);
g.lineTo(1.08, -1.35);
g.lineTo(1.04, -1.1);
g.stroke();
