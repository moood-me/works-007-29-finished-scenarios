// The stairwell beyond the door, seen through it: a landing's wall of grey plaster, the dark rail of the stair going
// down, its balusters
const INK = e.lib.INK;
g.fillStyle = '#a6a090';
g.fillRect(-0.7, -2.3, 1.4, 2.3);
const low = g.createLinearGradient(0, -1.2, 0, 0);
low.addColorStop(0, 'rgba(82,76,66,0)');
low.addColorStop(1, 'rgba(82,76,66,0.35)');
g.fillStyle = low;
g.fillRect(-0.7, -1.2, 1.4, 1.2);
g.beginPath();
g.moveTo(-0.7, -1.05);
g.lineTo(0.7, -0.35);
g.lineTo(0.7, -0.3);
g.lineTo(-0.7, -1.0);
g.closePath();
g.fillStyle = '#4e3f34';
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
g.beginPath();
for (let x = -0.6; x < 0.7; x += 0.14) {
  const y = -1.0 + ((x + 0.7) / 1.4) * 0.7;
  g.moveTo(x, y);
  g.lineTo(x, 0);
}
g.strokeStyle = '#4e3f34';
g.lineWidth = 0.02;
g.stroke();
