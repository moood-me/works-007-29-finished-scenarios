// The park far beyond the avenue (90 m off, 240 m wide): a low band of woods in the autumn haze, rust and gold
// crowns, the churchyard's old yew a dark lump among them.
for (const [tone, top, r] of [['#a07c48', 9, 5], ['#86603a', 6, 4]]) {
  g.fillStyle = tone;
  g.fillRect(-120, -top + r * 0.5, 240, top - r * 0.5 + 0.5);
  for (let x = -120; x <= 120; x += r * 1.3) {
    g.beginPath();
    g.arc(x + e.rnd() * r * 0.5, -top + r * 0.3 + e.rnd() * 2, r * (0.7 + e.rnd() * 0.4), 0, Math.PI * 2);
    g.fill();
  }
}
g.fillStyle = '#2f3a2c';
g.beginPath();
g.ellipse(26, -6, 5, 6.5, 0, 0, Math.PI * 2);
g.fill();
