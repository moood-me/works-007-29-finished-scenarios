// The sink unit's front under the window (x -1.09...1.09, 0.9 m high): pale blue cupboard doors with chrome handles,
// a white worktop edge, a dark plinth; a tea towel over the middle door's handle.
g.fillStyle = '#3e3a36';
g.fillRect(-1.09, -0.1, 2.18, 0.1);
g.fillStyle = '#a9bccb';
g.fillRect(-1.09, -0.86, 2.18, 0.76);
g.strokeStyle = '#8095a8';
g.lineWidth = 0.012;
for (let k = 0; k < 4; k++) {
  const x = -1.07 + k * 0.54;
  g.strokeRect(x + 0.02, -0.82, 0.5, 0.7);
  g.fillStyle = '#d8d8d4';
  g.fillRect(x + (k % 2 ? 0.06 : 0.42), -0.6, 0.02, 0.12);
}
g.fillStyle = '#f1efe6';
g.fillRect(-1.09, -0.9, 2.18, 0.04);
g.fillStyle = '#e9e1cc';
g.fillRect(-0.12, -0.62, 0.2, 0.34);
g.fillStyle = '#b84a3c';
g.fillRect(-0.12, -0.52, 0.2, 0.025);
g.fillRect(-0.12, -0.38, 0.2, 0.025);
