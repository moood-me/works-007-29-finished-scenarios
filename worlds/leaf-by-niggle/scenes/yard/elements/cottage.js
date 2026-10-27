// Parish's cottage after the storm, its front to the yard (x across from its middle, 0 at its foot): whitewash gone
// grey-ochre, a tiled roof torn open over the bedroom (`cottage#hole` — bare laths, tiles hanging askew, their broken
// pieces on the ground before it), the bedroom window (x −0.75…0.45, 0.95…2.1 up) — a hole: the room behind it is
// `cottage_room` — with its frame and sill; the door, the bench by it on the porch, the bucket from under the
// ceiling set out by the door; a chimney, cold.
g.save();
g.beginPath();
g.rect(-4, -3.6, 8, 3.62);
g.rect(-0.75, -2.1, 1.2, 1.15);
g.clip('evenodd');
g.fillStyle = '#d6c7a6';
g.fillRect(-4, -3.6, 8, 3.62);
for (let i = 0; i < 16; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,130,100,0.15)' : 'rgba(240,232,214,0.2)';
  g.beginPath();
  g.ellipse(-4 + e.rnd() * 8, -3.4 + e.rnd() * 3.2, 0.2 + e.rnd() * 0.6, 0.15 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(110,96,74,0.45)';
g.fillRect(-4, -0.3, 8, 0.32);
g.restore();
// the window's frame, its bars, the sill
g.strokeStyle = '#5c5f4c';
g.lineWidth = 0.08;
g.strokeRect(-0.77, -2.12, 1.24, 1.19);
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.15, -2.1);
g.lineTo(-0.15, -0.95);
g.moveTo(-0.75, -1.55);
g.lineTo(0.45, -1.55);
g.stroke();
g.fillStyle = '#8d8270';
g.fillRect(-0.85, -0.95, 1.4, 0.07);
// the door and the porch bench
g.fillStyle = '#5c5f4c';
g.fillRect(1.4, -2.05, 0.9, 2.05);
g.fillStyle = '#4a4c3d';
g.fillRect(1.48, -1.95, 0.74, 1.9);
g.fillStyle = '#2f2a26';
g.beginPath();
g.arc(2.12, -1.0, 0.035, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6e5c48';
g.fillRect(2.5, -0.48, 1.2, 0.06);
g.fillRect(2.58, -0.44, 0.06, 0.44);
g.fillRect(3.56, -0.44, 0.06, 0.44);
// the roof: red-brown tiles in courses, a chimney
g.fillStyle = '#8f4f3a';
g.beginPath();
g.moveTo(-4.3, -3.55);
g.lineTo(0, -6.0);
g.lineTo(4.3, -3.55);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(70,36,26,0.45)';
g.lineWidth = 0.02;
for (let y = -3.75; y > -5.9; y -= 0.22) {
  const half = (6.0 + y) / 2.45 * 4.3;
  g.beginPath();
  g.moveTo(-half, y);
  g.lineTo(half, y);
// the hole: tiles gone over the bedroom, the laths bare across the dark, a few tiles hanging askew at its edge
g.fillStyle = '#2e2622';
g.beginPath();
g.moveTo(-1.7, -3.75);
g.lineTo(-1.45, -4.35);
g.lineTo(-0.85, -4.55);
g.lineTo(-0.3, -4.3);
g.lineTo(-0.15, -3.8);
g.lineTo(-0.9, -3.68);
g.closePath();
g.fill();
g.strokeStyle = '#8a7258';
g.lineWidth = 0.045;
for (const y of [-3.85, -4.07, -4.29, -4.48]) {
  g.beginPath();
  g.moveTo(-1.75, y);
  g.lineTo(-0.1, y);
  g.stroke();
}
g.fillStyle = '#8f4f3a';
for (const [x, y, a] of [[-1.55, -3.8, 0.5], [-0.25, -4.2, -0.4], [-0.95, -4.5, 0.25], [-0.2, -3.85, -0.15]]) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillRect(-0.13, -0.08, 0.26, 0.16);
  g.restore();
}
e.at(-0.95, -4.1, 'hole');
// the broken tiles on the ground before the wall
for (let i = 0; i < 9; i++) {
  g.fillStyle = e.rnd() < 0.6 ? '#8f4f3a' : '#7a4232';
  g.save();
  g.translate(-2.2 + e.rnd() * 2.4, 0.08 + e.rnd() * 0.4);
  g.rotate(e.rnd() * 3);
  g.fillRect(-0.07, -0.025, 0.11 + e.rnd() * 0.06, 0.05);
  g.restore();
}
// the bucket by the door, zinc, full to the brim
g.fillStyle = '#8c9294';
g.beginPath();
g.moveTo(0.9, -0.42);
g.lineTo(1.26, -0.42);
g.lineTo(1.21, 0);
g.lineTo(0.95, 0);
g.closePath();
g.fill();
g.fillStyle = '#5d6a70';
g.beginPath();
g.ellipse(1.08, -0.42, 0.18, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#6a7072';
g.lineWidth = 0.012;
g.beginPath();
g.arc(1.08, -0.42, 0.18, Math.PI, 0);
g.stroke();
e.at(-0.15, -1.55, 'window');
e.at(1.85, -1.1, 'door');
