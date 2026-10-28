// The floor from above (metres, its middle at distance 3.5, y toward the viewer): linoleum in large pale grey-green
// squares with a darker border, waxed, worn a little paler where feet go — by the maze table and the door.
g.fillStyle = '#a9b0a5';
g.fillRect(-3.0, -1.95, 6.0, 3.9);
const S = 0.5;
for (let x = -3.0; x < 3.0; x += S) {
  for (let y = -1.95; y < 1.95; y += S) {
    const k = (Math.round((x + 3) / S) + Math.round((y + 2) / S)) % 2;
    g.fillStyle = k ? '#b9bfb3' : '#b1b8ac';
    g.fillRect(x + 0.004, y + 0.004, S - 0.008, S - 0.008);
  }
}
g.fillStyle = 'rgba(214,218,206,0.25)';
g.beginPath();
g.ellipse(-0.1, -0.1, 1.4, 0.5, 0, 0, Math.PI * 2);
g.ellipse(2.4, -0.3, 0.5, 0.8, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#7f887c';
g.lineWidth = 0.08;
g.strokeRect(-2.96, -1.91, 5.92, 3.82);
