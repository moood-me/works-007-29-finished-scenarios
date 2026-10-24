// The chair's seat, seen from above: worn elm, a flat cushion of the same faded patchwork.
g.fillStyle = '#86603f';
g.fillRect(-0.3, -0.26, 0.6, 0.52);
const patches = ['#c49a45', '#5d6f8c', '#8a4a36', '#7d9268'];
for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) {
  g.fillStyle = patches[r * 2 + c];
  g.fillRect(-0.24 + c * 0.24, -0.22 + r * 0.22, 0.24, 0.22);
}
