// The park beyond the pond, 70 m off (seen through the window and past the carriage through the door): old trees in
// heavy dark clumps, a cedar spreading, lighter limes between, a line of hedge at their feet.
const greens = ['#3e5a34', '#4a6a3a', '#35502e', '#56763f', '#2f4a2a'];
for (let i = 0; i < 70; i++) {
  const x = -60 + e.rnd() * 120;
  const h = 7 + e.rnd() * 9;
  const w = 4 + e.rnd() * 6;
  g.fillStyle = '#3a2e22';
  g.fillRect(x - 0.3, -h * 0.4, 0.6, h * 0.4);
  g.fillStyle = greens[Math.floor(e.rnd() * greens.length)];
  for (let k = 0; k < 5; k++) {
    g.beginPath();
    g.ellipse(x + (e.rnd() - 0.5) * w * 0.7, -h * (0.5 + e.rnd() * 0.35), w * (0.35 + e.rnd() * 0.2), h * 0.25, 0, 0, Math.PI * 2);
    g.fill();
  }
}
g.fillStyle = '#2e4628';
g.fillRect(-60, -1.4, 120, 1.9);
