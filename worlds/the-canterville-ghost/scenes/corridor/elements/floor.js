// The floor from above (10 m across, 13.4 m along, y toward the viewer): wide old oak boards running along the
// corridor, their ends staggered, dark with three centuries of wax — the same boards on into the bedrooms and the side
// passage, seen through their doors.
g.fillStyle = '#2c1d13';
g.fillRect(-5, -6.7, 10, 13.4);
const tones = ['#4a3020', '#443028', '#503524', '#3e2a1c'];
const W = 0.22;
for (let x = -5; x < 5; x += W) {
  let y = -6.7 - e.rnd() * 1.8;
  while (y < 6.7) {
    const len = 1.2 + e.rnd() * 1.8;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.007, y + 0.007, W - 0.014, len - 0.014);
    y += len;
  }
}
