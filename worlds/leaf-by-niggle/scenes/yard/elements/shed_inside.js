// What the doorway shows of the shed (x across from the doorway's middle, 0 at the floor): the dim room, the floor
// boards, the foot of the platform's steps and, above them, a part of the great canvas — pale unprimed ground, the
// Tree's grey-green boughs and leaves, grey patches of what is still to come.
g.fillStyle = '#4a4036';
g.fillRect(-1.3, -3.2, 2.55, 3.25);
// the floor
g.fillStyle = '#5e5040';
g.fillRect(-1.3, -0.5, 2.55, 0.55);
g.fillStyle = 'rgba(40,32,26,0.5)';
for (let x = -1.3; x < 1.25; x += 0.17) g.fillRect(x, -0.5, 0.012, 0.5);
// the canvas: its pale ground, a bough with its leaves going off to the left, a grey patch
g.fillStyle = '#d8ccb0';
g.fillRect(-1.3, -3.2, 2.2, 2.35);
g.strokeStyle = '#7b6a52';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0.9, -1.4);
g.bezierCurveTo(0.2, -1.7, -0.5, -2.2, -1.3, -2.3);
g.moveTo(0.2, -1.66);
g.quadraticCurveTo(-0.2, -2.4, -0.4, -3.2);
g.stroke();
for (let i = 0; i < 40; i++) {
  const x = -1.2 + e.rnd() * 2.0;
  const y = -3.1 + e.rnd() * 1.6;
  e.lib.leaf(g, x, y, 0.1 + e.rnd() * 0.06, e.rnd() * 6, e.rnd() < 0.7 ? '#8a9a60' : '#b0a25a', null);
}
g.fillStyle = 'rgba(140,140,132,0.5)';
g.beginPath();
g.ellipse(0.4, -2.6, 0.35, 0.25, 0, 0, Math.PI * 2);
g.fill();
// the platform's steps at the right, in shadow
g.fillStyle = '#3d342b';
g.fillRect(0.3, -0.9, 0.95, 0.42);
g.fillStyle = '#4a3f33';
g.fillRect(0.5, -0.48, 0.75, 0.06);
e.at(-0.3, -2.0, 'canvas');
