// The floor from above (metres, its middle at distance 2.7, y toward the viewer): cream and pale red linoleum in a
// checker, worn duller in a path from the door to the stove and the sink.
g.fillStyle = '#e9dfcb';
g.fillRect(-2.9, -1.8, 5.8, 3.6);
const T = 0.3;
for (let y = -1.8; y < 1.8; y += T) {
  for (let x = -2.9; x < 2.9; x += T) {
    if ((Math.round((x + 2.9) / T) + Math.round((y + 1.8) / T)) % 2) continue;
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
