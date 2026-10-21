// The far mountains, four kilometres off: two soft ranges, the nearer a little darker; the haze fades them into the dusk
const ridge = (base, amp, seed, step) => {
  g.beginPath();
  g.moveTo(-9000, 10);
  for (let x = -9000; x <= 9000; x += step) {
    const n = e.anim.noise(x / 2600, seed) * 0.6 + e.anim.noise(x / 900, seed + 1) * 0.3 + e.anim.noise(x / 300, seed + 2) * 0.1;
    g.lineTo(x, -(base + amp * (0.5 + 0.5 * n)));
  }
  g.lineTo(9000, 10);
  g.closePath();
  g.fill();
};
g.fillStyle = "#7a7096";
ridge(200, 220, 11, 120);
g.fillStyle = "#665c84";
ridge(60, 150, 21, 100);
