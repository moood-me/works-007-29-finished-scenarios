// Robineau's desk near the viewer, its front to the room (he sits behind it, facing us): an oak top 0.78 m up, a
// pedestal of drawers at each end, a closed panel between them.
g.fillStyle = '#6a4a30';
g.fillRect(-0.85, -0.8, 1.7, 0.05);
g.fillStyle = '#4e3624';
g.fillRect(-0.8, -0.75, 1.6, 0.75);
g.fillStyle = '#7a573a';
for (const x of [-0.78, 0.36]) {
  g.fillRect(x, -0.75, 0.42, 0.73);
  g.fillStyle = '#86623f';
  for (let k = 0; k < 3; k++) g.fillRect(x + 0.03, -0.7 + k * 0.23, 0.36, 0.2);
  g.fillStyle = '#b89a5a';
  for (let k = 0; k < 3; k++) g.fillRect(x + 0.17, -0.61 + k * 0.23, 0.08, 0.02);
  g.fillStyle = '#7a573a';
}
g.fillStyle = '#5a3f2a';
g.fillRect(-0.3, -0.7, 0.6, 0.6);
g.fillStyle = '#3a2a1e';
g.fillRect(-0.8, -0.04, 1.6, 0.04);
