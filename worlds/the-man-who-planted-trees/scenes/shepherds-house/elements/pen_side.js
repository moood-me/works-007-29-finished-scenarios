// The pen's side wall, running back from the gate
const STONE = ["#a89a82", "#9d8f78", "#b2a48a", "#93866f"];
g.fillStyle = "#7c705e";
g.beginPath();
g.moveTo(-1.7, 0);
for (let x = -1.7; x <= 1.701; x += 0.25) g.lineTo(x, -0.72 - 0.1 * e.rnd());
g.lineTo(1.7, 0);
g.closePath();
g.fill();
for (let y = 0; y > -0.7; y -= 0.17) {
  for (let x = -1.7 + e.rnd() * 0.1; x < 1.6; x += 0.22 + e.rnd() * 0.2) {
    g.fillStyle = STONE[Math.floor(e.rnd() * STONE.length)];
    g.beginPath();
    g.ellipse(x + 0.1, y - 0.08, 0.11 + e.rnd() * 0.05, 0.065, 0, 0, Math.PI * 2);
    g.fill();
  }
}
