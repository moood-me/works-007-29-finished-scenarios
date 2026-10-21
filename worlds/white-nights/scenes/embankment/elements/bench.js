// A wooden bench along the parapet, its front to the street: x 0…1.8 along the canal, a seat at 0.45 m, a back of
// three rails, iron legs at either end
const wood = '#8a6f58', iron = '#3f4644', rails = [-0.62, -0.74, -0.86];
g.fillStyle = iron;
for (const x of [0.12, 1.68]) g.fillRect(x - 0.03, -0.9, 0.06, 0.9);
g.fillStyle = wood;
g.fillRect(0, -0.48, 1.8, 0.06);
for (const y of rails) g.fillRect(0.02, y, 1.76, 0.06);
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.012;
g.strokeRect(0, -0.48, 1.8, 0.06);
for (const y of rails) g.strokeRect(0.02, y, 1.76, 0.06);
e.at(0.9, -0.48, 'seat');
