// The porch floor from above (metres, its middle at distance 7.75, y toward the viewer): grey-painted boards running
// out from the house, worn paler where the steps come up.
g.fillStyle = '#9a9a96';
g.fillRect(-1.5, -0.75, 3.0, 1.5);
for (let x = -1.5; x < 1.5; x += 0.1) {
  g.fillStyle = 'rgba(60,60,62,0.35)';
  g.fillRect(x, -0.75, 0.008, 1.5);
}
g.fillStyle = 'rgba(210,206,196,0.35)';
g.beginPath();
g.ellipse(0, 0.5, 0.55, 0.35, 0, 0, Math.PI * 2);
g.fill();
