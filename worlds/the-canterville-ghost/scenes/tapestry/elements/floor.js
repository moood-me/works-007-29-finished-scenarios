// The chamber's floor from above (6.5 m by 5.8 m, y toward the viewer): old oak boards running back, dull with dust.
g.fillStyle = '#2c1d13';
g.fillRect(-3.25, -2.9, 6.5, 5.8);
const tones = ['#4d3524', '#46322a', '#523826', '#40301f'];
const W = 0.24;
for (let x = -3.25; x < 3.25; x += W) {
  let y = -2.9 - e.rnd() * 1.8;
  while (y < 2.9) {
    const len = 1.2 + e.rnd() * 1.8;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.007, y + 0.007, W - 0.014, len - 0.014);
    y += len;
  }
}
// a few dry leaves blown in at the door
for (let i = 0; i < 9; i++) {
  g.fillStyle = ['#a8742a', '#8a5a22', '#b88a34'][i % 3];
  g.beginPath();
  g.ellipse(-3.0 + e.rnd() * 0.8, -0.6 + e.rnd() * 1.2, 0.04, 0.02, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
