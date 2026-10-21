// The sheep pen's front: a waist-high dry-stone wall, uneven along its top, a gap for a gate at its right end
const STONE = ["#a89a82", "#9d8f78", "#b2a48a", "#93866f"];
const wall = (x0, x1) => {
  g.fillStyle = "#7c705e";
  g.beginPath();
  g.moveTo(x0, 0);
  for (let x = x0; x <= x1 + 0.001; x += 0.25) g.lineTo(x, -0.5 - 0.08 * e.rnd());
  g.lineTo(x1, 0);
  g.closePath();
  g.fill();
  for (let y = 0; y > -0.48; y -= 0.16) {
    for (let x = x0 + e.rnd() * 0.1; x < x1 - 0.1; x += 0.22 + e.rnd() * 0.2) {
      g.fillStyle = STONE[Math.floor(e.rnd() * STONE.length)];
      g.beginPath();
      g.ellipse(x + 0.1, y - 0.08, 0.11 + e.rnd() * 0.05, 0.065, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
};
wall(-3, 1.6);
wall(2.4, 3);
