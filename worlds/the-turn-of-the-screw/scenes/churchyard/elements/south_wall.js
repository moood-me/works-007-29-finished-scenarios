// The nave's south wall, toward the churchyard: old coursed rubble, quoins at its corners, two buttresses, three
// pointed windows of two lights; a plain eaves course under the roof. The porch stands before its west part (metres:
// x along the wall from its middle, y up from its foot). The south door inside the porch: its dressed arch.
const L = e.lib;
L.rubble(g, e.rnd, -8, 8, -5.2);
L.quoins(g, -8, 1, -5.2);
L.quoins(g, 8, -1, -5.2);
// the eaves course
g.fillStyle = '#b9b19c';
g.fillRect(-8, -5.2, 16, 0.22);
g.fillStyle = 'rgba(60,56,46,0.35)';
g.fillRect(-8, -4.98, 16, 0.06);
// the plinth
g.fillStyle = '#b3ab96';
g.fillRect(-8, -0.42, 16, 0.12);
L.window2(g, -1.3, -2.0, 1.15, 2.2);
L.window2(g, 2.6, -2.0, 1.15, 2.2);
L.window2(g, 6.2, -2.0, 1.15, 2.2);
// the buttresses: dressed stone standing out of the wall, stepped back once, their slopes weathered
for (const x of [0.7, 4.4]) {
  g.fillStyle = '#b8b09a';
  g.beginPath();
  g.moveTo(x - 0.32, 0.3);
  g.lineTo(x - 0.32, -2.6);
  g.lineTo(x - 0.26, -2.9);
  g.lineTo(x - 0.26, -3.9);
  g.lineTo(x, -4.25);
  g.lineTo(x + 0.26, -3.9);
  g.lineTo(x + 0.26, -2.9);
  g.lineTo(x + 0.32, -2.6);
  g.lineTo(x + 0.32, 0.3);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(70,66,54,0.3)';
  g.fillRect(x + 0.2, -2.6, 0.12, 2.9);
  g.fillStyle = '#cbc3ad';
  g.fillRect(x - 0.32, -2.66, 0.64, 0.08);
  g.strokeStyle = 'rgba(84,78,64,0.3)';
  g.lineWidth = 0.02;
  g.beginPath();
  for (let y = -0.35; y > -3.9; y -= 0.35) {
    g.moveTo(x - 0.32, y);
    g.lineTo(x + 0.32, y);
  }
  g.stroke();
}
// the south door's arch, seen through the porch: dressed stone round the doorway
g.fillStyle = '#c4bca6';
g.beginPath();
g.moveTo(-5.2, 0.3);
g.lineTo(-5.2, -1.75);
g.quadraticCurveTo(-5.2, -2.55, -4.5, -2.75);
g.quadraticCurveTo(-3.8, -2.55, -3.8, -1.75);
g.lineTo(-3.8, 0.3);
g.closePath();
g.fill();
