// The ceiling seen from below (the card laid face down, its foot at the back wall, y −5.85 at the open front): white
// plaster in coffers framed with gilt, and the great plaster rose over the middle of the room (y −2.95) the
// chandelier hangs from.
g.fillStyle = '#efe9db';
g.fillRect(-3.55, -5.92, 7.1, 5.97);
g.strokeStyle = '#dcd1b8';
g.lineWidth = 0.08;
g.strokeRect(-3.2, -5.6, 6.4, 5.3);
g.strokeStyle = '#c2a057';
g.lineWidth = 0.025;
g.strokeRect(-3.05, -5.45, 6.1, 5.0);
g.strokeRect(-2.2, -4.6, 4.4, 3.3);
g.fillStyle = '#e1d7c0';
g.beginPath();
g.arc(0, -2.95, 0.62, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f2ede1';
for (let i = 0; i < 16; i++) {
  const a = (i / 16) * Math.PI * 2;
  g.beginPath();
  g.ellipse(Math.cos(a) * 0.4, -2.95 + Math.sin(a) * 0.4, 0.15, 0.06, a, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#c2a057';
g.beginPath();
g.arc(0, -2.95, 0.14, 0, Math.PI * 2);
g.fill();
