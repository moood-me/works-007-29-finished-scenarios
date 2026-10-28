// The chancel's south wall, set back from the nave's and lower: the same rubble, a window of two lights, the priest's
// small door, quoins at its east corner (metres: x along the wall from its middle, y up from its foot).
const L = e.lib;
L.rubble(g, e.rnd, -2.5, 2.5, -4.4);
L.quoins(g, 2.5, -1, -4.4);
g.fillStyle = '#b9b19c';
g.fillRect(-2.5, -4.4, 5, 0.2);
g.fillStyle = '#b3ab96';
g.fillRect(-2.5, -0.42, 5, 0.12);
L.window2(g, 0.8, -1.9, 1.0, 1.9);
g.fillStyle = '#c4bca6';
g.fillRect(-1.75, -1.9, 0.8, 2.2);
g.fillStyle = '#4a3a2c';
g.fillRect(-1.62, -1.78, 0.54, 2.08);
g.strokeStyle = 'rgba(30,22,16,0.5)';
g.lineWidth = 0.02;
g.beginPath();
for (let x = -1.5; x < -1.1; x += 0.13) {
  g.moveTo(x, 0.3);
  g.lineTo(x, -1.78);
}
g.stroke();
