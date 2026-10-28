// The corridor's floor beyond the doorway, from above: worn flagstones
const A = e.anim;
g.fillStyle = '#4a3e33';
g.fillRect(-1.7, -0.7, 3.4, 1.4);
for (let i = 0; i < 12; i++) {
  const x = -1.7 + (i % 6) * 0.58, y = -0.7 + Math.floor(i / 6) * 0.7;
  g.fillStyle = ['#6a5c4e', '#625548', '#71624f'][Math.floor(A.hash(i, 1) * 3)];
  g.fillRect(x + 0.02, y + 0.02, 0.54, 0.66);
}
