// The house and the garden wall on the right, seen along the terrace: painted from the balustrade's corner (x 0)
// toward the viewer (x 5.6). Near the water the garden wall (2.6 m) with its arched gate to the road along the
// shore; then the house's wall, lime-washed, its tall double door behind the Khan's back (x 2.4…3.6) standing a little
// open — the warm light in the gap is the door_glow's — a window above, the eaves and the tiles' edge at 5.2 m.
const lime = '#bdb099';
const lime2 = '#b2a58e';
const stoneBase = '#8e8574';
// the garden wall, its coping, the gate
g.fillStyle = lime2;
g.fillRect(0, -2.6, 2.05, 2.6);
g.fillStyle = '#a0937d';
g.fillRect(-0.05, -2.72, 2.12, 0.14);
g.fillStyle = '#1d1b22';
g.beginPath();
g.moveTo(0.55, 0);
g.lineTo(0.55, -1.55);
g.arc(1.05, -1.55, 0.5, Math.PI, 0);
g.lineTo(1.55, 0);
g.closePath();
g.fill();
g.strokeStyle = '#9a8d78';
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(0.5, 0);
g.lineTo(0.5, -1.55);
g.arc(1.05, -1.55, 0.55, Math.PI, 0);
g.lineTo(1.6, 0);
g.stroke();
// the house
g.fillStyle = lime;
g.fillRect(2.05, -5.2, 3.6, 5.2);
g.fillStyle = stoneBase;
g.fillRect(2.05, -0.35, 3.6, 0.35);
// the eaves: a dark beam, the tiles' edge over it
g.fillStyle = '#4a3f38';
g.fillRect(1.9, -5.35, 3.8, 0.2);
g.fillStyle = '#6b4f45';
for (let x = 1.9; x < 5.7; x += 0.22) {
  g.beginPath();
  g.arc(x + 0.11, -5.35, 0.11, Math.PI, 0);
  g.fill();
}
// the door's frame and its two leaves (the gap between them is the door_glow's)
g.fillStyle = '#8a7c66';
g.fillRect(2.3, -2.85, 1.4, 2.85);
g.fillStyle = '#4b3b30';
g.fillRect(2.4, -2.7, 0.55, 2.7);
g.fillRect(3.1, -2.7, 0.5, 2.7);
g.strokeStyle = '#3a2d25';
g.lineWidth = 0.03;
for (const [x, w] of [[2.4, 0.55], [3.1, 0.5]]) {
  g.strokeRect(x + 0.08, -2.55, w - 0.16, 1.05);
  g.strokeRect(x + 0.08, -1.35, w - 0.16, 1.15);
}
// a window above, shuttered
g.fillStyle = '#8a7c66';
g.fillRect(2.6, -4.6, 0.85, 1.15);
g.fillStyle = '#3e3a40';
g.fillRect(2.68, -4.52, 0.69, 0.99);
g.fillStyle = '#5a4a3c';
g.fillRect(2.68, -4.52, 0.2, 0.99);
g.fillRect(3.17, -4.52, 0.2, 0.99);
e.at(3.0, -1.4, 'door');
e.at(1.05, -1.2, 'gate');
