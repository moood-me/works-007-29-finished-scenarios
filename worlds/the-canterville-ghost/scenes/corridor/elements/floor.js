// The floor from above (6.8 m across, 13.4 m along, y toward the viewer; it reaches 1 m past the left wall and 1.8 m
// past the right, under the bedrooms and the corner — no farther, the windows must show only the night): wide old oak
// boards running along the corridor, their ends staggered, dark with three centuries of wax.
g.fillStyle = '#2c1d13';
g.fillRect(-3.4, -6.7, 6.8, 13.4);
const tones = ['#4a3020', '#443028', '#503524', '#3e2a1c'];
const W = 0.22;
for (let x = -3.4; x < 3.4; x += W) {
  let y = -6.7 - e.rnd() * 1.8;
  while (y < 6.7) {
    const len = 1.2 + e.rnd() * 1.8;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.007, y + 0.007, W - 0.014, len - 0.014);
    y += len;
  }
}
