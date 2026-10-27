// The wooden landing the viewer stands on, running out into the lake: grey boards across it, a beam along each side.
// From above: 2.2 × 10 m, its far end y −5.
g.fillStyle = '#6e655b';
g.fillRect(-1.1, -5, 2.2, 10);
g.strokeStyle = 'rgba(42, 37, 33, 0.6)';
g.lineWidth = 0.02;
for (let y = -5; y < 5; y += 0.22) {
  g.beginPath();
  g.moveTo(-1.1, y);
  g.lineTo(1.1, y);
  g.stroke();
}
g.fillStyle = '#4f4840';
g.fillRect(-1.1, -5, 0.09, 10);
g.fillRect(1.01, -5, 0.09, 10);
