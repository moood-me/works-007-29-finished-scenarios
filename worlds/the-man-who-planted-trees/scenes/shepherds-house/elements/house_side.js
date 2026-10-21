// The gable end of the house: the same dry-laid stone up to the roof's point (3.9 m), a small square vent under the ridge
g.fillStyle = "#958470";
g.beginPath();
g.moveTo(-2.25, 0);
g.lineTo(-2.25, -2.5);
g.lineTo(0, -3.9);
g.lineTo(2.25, -2.5);
g.lineTo(2.25, 0);
g.closePath();
g.fill();
const STONE = ["#bfae90", "#b5a385", "#c6b697", "#ad9b7e", "#bba98a"];
let y = 0;
while (y > -3.9) {
  const h = 0.2 + e.rnd() * 0.1, top = y - h, half = top > -2.5 ? 2.25 : 2.25 * (3.9 + top) / 1.4;
  let x = -2.25 - e.rnd() * 0.3;
  while (x < 2.25) {
    const w = 0.32 + e.rnd() * 0.4, x0 = Math.max(x + 0.025, -half), x1 = Math.min(x + w - 0.025, half);
    if (x1 - x0 > 0.08) {
      g.fillStyle = STONE[Math.floor(e.rnd() * STONE.length)];
      g.beginPath();
      g.roundRect(x0, top + 0.025, x1 - x0, h - 0.045, 0.04);
      g.fill();
    }
    x += w;
  }
  y = top;
}
g.fillStyle = "#3a2e26";
g.fillRect(-0.15, -3.2, 0.3, 0.3);
g.fillStyle = "#8a7a64";
g.fillRect(-2.25, -0.14, 4.5, 0.14);
