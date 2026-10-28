// The landing stage running out from the foot of the steps into the water: grey boards across it, two long beams
// along its sides. From above, its far end y −16.5.
g.fillStyle = '#6a6159';
g.fillRect(-0.9, -16.5, 1.8, 33);
g.strokeStyle = 'rgba(40, 36, 32, 0.6)';
g.lineWidth = 0.02;
for (let y = -16.5; y < 16.5; y += 0.24) {
  g.beginPath();
  g.moveTo(-0.9, y);
  g.lineTo(0.9, y);
  g.stroke();
}
g.fillStyle = '#4e4741';
g.fillRect(-0.9, -16.5, 0.08, 33);
g.fillRect(0.82, -16.5, 0.08, 33);
