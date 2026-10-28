// The electric cooker's front (x -0.32...0.32, 0.9 m high): cream enamel, the oven door with its little window and a
// chrome handle, the row of black knobs, a dark plinth.
g.fillStyle = '#ece4cf';
g.fillRect(-0.32, -0.9, 0.64, 0.9);
g.fillStyle = '#2f2c2a';
g.fillRect(-0.32, -0.08, 0.64, 0.08);
g.fillStyle = '#e2d9c2';
g.fillRect(-0.28, -0.7, 0.56, 0.58);
g.fillStyle = '#3a3634';
g.beginPath();
g.roundRect(-0.16, -0.56, 0.32, 0.22, 0.03);
g.fill();
g.fillStyle = '#c9cccc';
g.fillRect(-0.22, -0.66, 0.44, 0.025);
g.fillStyle = '#222';
for (let k = 0; k < 4; k++) {
  g.beginPath();
  g.arc(-0.21 + k * 0.14, -0.81, 0.025, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#c94a3c';
g.beginPath();
g.arc(0.27, -0.81, 0.008, 0, Math.PI * 2);
g.fill();
