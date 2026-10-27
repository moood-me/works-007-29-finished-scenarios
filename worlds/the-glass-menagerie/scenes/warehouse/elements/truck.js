// A hand truck leaning against the right-hand shelves in the near corner (metres from its wheels, y up negative):
// its iron frame and two handles, a toe plate, the wheels, three shoeboxes still on it.
g.fillStyle = '#3c3f3c';
g.fillRect(-0.2, -1.32, 0.035, 1.3);
g.fillRect(0.165, -1.32, 0.035, 1.3);
for (const y of [-1.0, -0.65, -0.3]) g.fillRect(-0.2, y, 0.4, 0.03);
g.fillRect(-0.22, -0.04, 0.44, 0.04);
g.strokeStyle = '#3c3f3c';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.18, -1.32);
g.lineTo(-0.24, -1.45);
g.moveTo(0.18, -1.32);
g.lineTo(0.24, -1.45);
g.stroke();
g.fillStyle = '#222';
for (const x of [-0.22, 0.22]) {
  g.beginPath();
  g.arc(x, -0.11, 0.11, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#777';
  g.beginPath();
  g.arc(x, -0.11, 0.03, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#222';
}
e.lib.boxes(g, e, -0.2, 0.2, -0.4, -0.05);
