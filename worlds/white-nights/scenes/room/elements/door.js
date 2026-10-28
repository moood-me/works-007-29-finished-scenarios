// The door to the stair, standing ajar into the room — Matryona has just come in by it: its leaf from its hinge (x 0)
// to its free edge (x −0.75), its inner face: four planks of old brown paint, a ledge and a brace across them, an iron
// latch by the free edge
const INK = e.lib.INK;
for (let i = 0; i < 4; i++) {
  const x = -0.75 + i * 0.1875;
  e.lib.box(g, x, -1.95, 0.1875, 1.95, i % 2 ? '#7a6550' : '#806a54', 0.007);
}
for (const y of [-1.7, -0.35]) e.lib.box(g, -0.72, y, 0.69, 0.1, '#735f4b', 0.007);
g.fillStyle = '#735f4b';
g.beginPath();
g.moveTo(-0.7, -0.35);
g.lineTo(-0.6, -0.35);
g.lineTo(-0.05, -1.6);
g.lineTo(-0.15, -1.6);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.007;
g.stroke();
e.lib.box(g, -0.7, -1.05, 0.03, 0.12, '#3a3430', 0.005);
e.lib.box(g, -0.72, -1.0, 0.12, 0.02, '#3a3430', 0.005);
