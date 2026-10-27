// The back of the shop (metres from its foot): pale warm plaster, a picture rail, and three tall arched alcoves where
// the Artificial Friends stand to be seen — empty this morning but for their soft lamps; low white plinths in them.
g.fillStyle = '#ece3d3';
g.fillRect(-3.6, -3.22, 7.2, 3.24);
g.fillStyle = '#ddd2be';
g.fillRect(-3.6, -0.14, 7.2, 0.16);
g.fillRect(-3.6, -2.62, 7.2, 0.05);
for (const x of [-2.3, 0, 2.3]) {
  g.fillStyle = '#d7cab3';
  g.beginPath();
  g.moveTo(x - 0.55, -0.02);
  g.lineTo(x - 0.55, -1.95);
  g.arc(x, -1.95, 0.55, Math.PI, 0);
  g.lineTo(x + 0.55, -0.02);
  g.closePath();
  g.fill();
  g.fillStyle = '#f3ede2';
  g.fillRect(x - 0.4, -0.3, 0.8, 0.3);
  g.fillStyle = '#e4dccd';
  g.fillRect(x - 0.4, -0.3, 0.8, 0.04);
  e.light(x, -2.2, 0.18, '#ffe2b8', 0.5, `alcove${x < 0 ? 0 : x > 0 ? 2 : 1}`);
}
