// The floor from above (metres, its middle at distance 3.5, y toward the viewer): cream and pale red linoleum in a
// checker, worn duller in a path from the door to the stove and the sink.
g.fillStyle = '#e9dfcb';
g.fillRect(-3.8, -1.8, 7.6, 3.6);
const T = 0.3;
for (let y = -1.8; y < 1.8; y += T) {
  for (let x = -3.8; x < 3.8; x += T) {
    if ((Math.round((x + 3.8) / T) + Math.round((y + 1.8) / T)) % 2) continue;
    g.fillStyle = '#c98a76';
    g.fillRect(x, y, T, T);
  }
}
g.fillStyle = 'rgba(150,130,110,0.16)';
g.beginPath();
g.ellipse(1.4, -0.4, 1.4, 0.7, 0.4, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(-0.3, -1.4, 1.2, 0.4, 0, 0, Math.PI * 2);
g.fill();
