// The bench by the water on the quay, its back to the river (N. N.'s, where the game's first night finds him): two
// planks of a back on iron legs, the seat's edge toward us. At the frame's edge it is mostly drawn.
const L = e.lib;
const box = [-0.95, -0.95, 0.95, 0.04];
g.fillStyle = "#3e3a36";
for (const x of [-0.8, 0.8]) {
  g.fillRect(x - 0.03, -0.9, 0.06, 0.92);
}
g.fillStyle = "#8f7f68";
g.fillRect(-0.92, -0.88, 1.84, 0.1);
g.fillRect(-0.92, -0.72, 1.84, 0.1);
g.fillStyle = "#7f705b";
g.fillRect(-0.92, -0.47, 1.84, 0.05);
L.unfinish(g, box, -2.7, 3.3);
