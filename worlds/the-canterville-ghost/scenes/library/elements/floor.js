// The library's floor from above (8.1 m by 7.1 m, y toward the viewer): wide old oak boards running back, their ends
// staggered, dark with three centuries of wax.
g.fillStyle = '#2c1d13';
g.fillRect(-4.05, -3.55, 8.1, 7.1);
const tones = ['#4a3020', '#443028', '#503524', '#3e2a1c'];
const W = 0.22;
for (let x = -4.05; x < 4.05; x += W) {
  let y = -3.55 - e.rnd() * 1.8;
  while (y < 3.55) {
    const len = 1.2 + e.rnd() * 1.8;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.007, y + 0.007, W - 0.014, len - 0.014);
    y += len;
  }
}
