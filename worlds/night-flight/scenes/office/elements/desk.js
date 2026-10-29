// Rivière's desk, its front to the room: a heavy oak top 0.78 m up, its edge catching the lamp; a closed front
// panel between two pedestals of drawers, brass pulls.
g.fillStyle = '#7a573a';
g.fillRect(-0.8, -0.82, 1.6, 0.05);
g.fillStyle = '#5c4029';
g.fillRect(-0.76, -0.77, 1.52, 0.77);
// the pedestals and their drawers
g.fillStyle = '#6c4b31';
for (const x of [-0.74, 0.32]) {
  g.fillRect(x, -0.75, 0.42, 0.73);
  g.fillStyle = '#7d5a3c';
  for (let k = 0; k < 3; k++) g.fillRect(x + 0.03, -0.72 + k * 0.235, 0.36, 0.21);
  g.fillStyle = '#b89a5a';
  for (let k = 0; k < 3; k++) g.fillRect(x + 0.17, -0.63 + k * 0.235, 0.08, 0.02);
  g.fillStyle = '#6c4b31';
}
// the front panel between them, sunk a little
g.fillStyle = '#4e3624';
g.fillRect(-0.3, -0.72, 0.6, 0.6);
g.fillStyle = 'rgba(255,230,190,0.08)';
g.fillRect(-0.8, -0.82, 1.6, 0.015);
// the plinth
g.fillStyle = '#3a281b';
g.fillRect(-0.76, -0.04, 1.52, 0.04);
