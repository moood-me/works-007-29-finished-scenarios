// The door to the stairs, painted from its free edge (x −0.9, toward the viewer) to its hinges (x 0, at the back of the
// doorway), y −1.99 … 0: four panels in a faded brown, a brass latch by the free edge; it opens into the room
const INK = e.lib.INK;
e.lib.box(g, -0.9, -1.99, 0.9, 1.99, '#8c6a50', 0.012);
e.lib.wash(g, -0.9, -1.99, 0.9, 1.99, [140, 106, 80], 23, 0.08, 0.35, 0.1);
for (const [y, h] of [[-1.9, 0.82], [-0.95, 0.82]]) {
  e.lib.box(g, -0.84, y, 0.36, h, '#977459', 0.008);
  e.lib.box(g, -0.42, y, 0.36, h, '#977459', 0.008);
}
g.fillStyle = '#c4a24e';
g.fillRect(-0.84, -1.02, 0.1, 0.04);
g.beginPath();
g.arc(-0.8, -1.0, 0.025, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
e.at(-0.8, -1.0, 'latch');
