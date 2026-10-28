// The door's leaf swung in against the right, seen almost edge-on from the hall: heavy planks, two iron straps,
// snow caught on its lower edge (its free end at the front, x 0.45; its hinge at the back, x −0.45).
g.fillStyle = '#6e4a2c';
g.fillRect(-0.45, -2.18, 0.9, 2.16);
for (let i = 0; i < 6; i++) {
  g.fillStyle = ['#7a5232', '#6a4428', '#80583a'][i % 3];
  g.fillRect(-0.45 + i * 0.15, -2.18, 0.14, 2.16);
}
g.fillStyle = '#2e2622';
for (const y of [-1.9, -0.4]) g.fillRect(-0.45, y, 0.75, 0.06);
e.lib.dabs(g, 341, -0.45, -0.12, 0.9, 0.1, ['#eef2f8', '#dfe6f0'], 20, 0.04, 0.5, 0.9);
