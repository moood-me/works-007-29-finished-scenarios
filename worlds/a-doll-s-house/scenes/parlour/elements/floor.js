// The parlour's floor from above (6 m by 3.9 m, its middle the room's, y toward the viewer): oak boards running back,
// their ends staggered, waxed dark; the rug lies on it (rug).
g.fillStyle = '#4a3324';
g.fillRect(-3.05, -1.95, 6.1, 3.9);
const tones = ['#6e4c32', '#674630', '#74523a', '#62432d'];
const W = 0.16;
for (let x = -3.05; x < 3.05; x += W) {
  let y = -1.95 - e.rnd() * 1.2;
  while (y < 1.95) {
    const len = 0.9 + e.rnd() * 1.3;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.006, y + 0.006, W - 0.012, len - 0.012);
    y += len;
  }
}
