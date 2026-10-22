// The shed's lean-to roof seen from above (metres, x along it, y toward its low front edge at y 1.2): corrugated iron
// gone rusty under the snow, the ribs showing at its front edge.
g.fillStyle = '#e8ecf0';
g.fillRect(-1.7, -1.2, 3.4, 2.4);
for (let x = -1.7; x < 1.7; x += 0.12) {
  g.fillStyle = e.rnd() < 0.5 ? '#8a5b42' : '#7a5240';
  g.fillRect(x, 0.95, 0.06, 0.25);
}
g.fillStyle = '#f2f4f6';
g.fillRect(-1.7, 0.9, 3.4, 0.07);
