// The stair's ceiling from above (x −1.9…1.9, y −3 at the back … 3): grey whitewash, the cornice's lines along the
// walls, the soot of years over the well
g.fillStyle = '#e4e0d6';
g.fillRect(-1.9, -3.5, 3.8, 7);
e.lib.wash(g, -1.9, -3.5, 3.8, 7, [228, 224, 214], 4, 0.5, 0.9, 0);
const soot = g.createLinearGradient(-1.9, 0, 0, 0);
soot.addColorStop(0, 'rgba(120,108,96,0.35)');
soot.addColorStop(1, 'rgba(120,108,96,0)');
g.fillStyle = soot;
g.fillRect(-1.9, -3.5, 1.9, 7);
g.beginPath();
for (const d of [0.08, 0.16]) {
  g.moveTo(-1.9 + d, 3);
  g.lineTo(-1.9 + d, -3.5 + d);
  g.lineTo(1.9 - d, -3.5 + d);
  g.lineTo(1.9 - d, 3);
}
g.strokeStyle = 'rgba(74,63,58,0.35)';
g.lineWidth = 0.01;
g.stroke();
