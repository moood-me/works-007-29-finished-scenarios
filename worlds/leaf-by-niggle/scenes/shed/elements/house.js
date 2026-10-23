// Parish's cottage, its front to us (x across from its middle, 0 at its foot): whitewash gone grey-ochre, a tiled roof,
// the bedroom window (x −0.75…0.45, 0.95…2.1 up) — a hole: the room behind it — with its frame and sill, a small
// lamp lit on the sill (the scene's light "parish_lamp", on Mrs Parish at the window); the door
// with the bench by it on the porch; a chimney.
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
  g.stroke();
}
g.fillStyle = '#7a6b5c';
g.fillRect(2.0, -5.6, 0.45, 1.2);
// the lamp on the sill: a brass foot, a glass chimney, its flame
g.fillStyle = '#8a6a3a';
g.fillRect(0.2, -1.0, 0.12, 0.05);
g.fillStyle = 'rgba(250,236,200,0.7)';
g.beginPath();
g.ellipse(0.26, -1.1, 0.04, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#ffd08a';
g.beginPath();
g.ellipse(0.26, -1.1, 0.012, 0.025, 0, 0, Math.PI * 2);
g.fill();
e.light(0.26, -1.1, 0.12, '#ffc070', 0.9, 'lamp');
e.at(-0.15, -1.55, 'window');
