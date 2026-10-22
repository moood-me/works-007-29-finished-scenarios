// The ceiling seen from below (the card laid face down, its foot at the back wall, y −3.9 at the open front): cream
// plaster, a moulded border, and the plaster rose over the middle of the room (y −2.05).
g.fillStyle = '#e6dcc6';
g.fillRect(-3.05, -3.92, 6.1, 3.97);
g.strokeStyle = '#d2c5a8';
g.lineWidth = 0.05;
g.strokeRect(-2.75, -3.65, 5.5, 3.4);
g.lineWidth = 0.02;
g.strokeRect(-2.6, -3.5, 5.2, 3.1);
g.fillStyle = '#d8ccb0';
g.beginPath();
g.arc(0, -2.05, 0.42, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e9e0cc';
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2;
  g.beginPath();
  g.ellipse(Math.cos(a) * 0.26, -2.05 + Math.sin(a) * 0.26, 0.1, 0.045, a, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#cfc1a3';
g.beginPath();
g.arc(0, -2.05, 0.1, 0, Math.PI * 2);
g.fill();
