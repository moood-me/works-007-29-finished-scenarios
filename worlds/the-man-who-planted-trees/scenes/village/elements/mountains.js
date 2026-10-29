// Far blue mountains beyond the lowlands, nearly three kilometres off on the right, standing on the plain: two soft ranges, the haze pales them
const ridge = (base, amp, seed, step) => {
  g.beginPath();
  g.moveTo(-9000, 10);
  for (let x = -9000; x <= 9000; x += step) {
    const n = e.anim.noise(x / 1400, seed) * 0.6 + e.anim.noise(x / 500, seed + 1) * 0.3 + e.anim.noise(x / 160, seed + 2) * 0.1;
    g.lineTo(x, -(base + amp * (0.5 + 0.5 * n)));
  }
  g.lineTo(9000, 10);
  g.closePath();
  g.fill();
};
g.fillStyle = "#97a2b8";
ridge(170, 230, 17, 70);
g.fillStyle = "#8592aa";
ridge(60, 140, 27, 55);
