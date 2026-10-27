// The cast-iron radiator under the window, painted cream many times: its ribs, the pipe going down into the floor.
g.fillStyle = '#e4dfcf';
g.fillRect(-0.55, -0.62, 1.1, 0.5);
for (let x = -0.53; x < 0.54; x += 0.06) {
  g.fillStyle = '#d2ccb8';
  g.fillRect(x, -0.6, 0.012, 0.46);
  g.fillStyle = '#f0ece0';
  g.fillRect(x + 0.02, -0.6, 0.012, 0.46);
}
g.fillStyle = '#cfc8b2';
g.fillRect(-0.55, -0.15, 1.1, 0.03);
g.fillRect(-0.53, -0.12, 0.04, 0.12);
g.fillRect(0.49, -0.12, 0.04, 0.12);
g.fillRect(0.58, -0.4, 0.04, 0.4);
