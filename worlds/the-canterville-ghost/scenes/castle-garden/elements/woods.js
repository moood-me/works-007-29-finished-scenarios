// The park's woods far off beyond the garden wall (90 m away, 300 m wide): a low band of rounded crowns in the haze —
// summer greens, or rust and gold in autumn (key `autumn`).
const fall = (e.state.autumn ?? 0) > 0.5;
const bands = fall ? [['#9c7c4c', 10, 5], ['#7e6038', 7, 4]] : [['#6a8456', 10, 5], ['#56704a', 7, 4]];
for (const [tone, top, r] of bands) {
  g.fillStyle = tone;
  g.fillRect(-150, -top + r * 0.5, 300, top - r * 0.5 + 0.5);
  for (let x = -150; x <= 150; x += r * 1.3) {
    g.beginPath();
    g.arc(x + e.rnd() * r * 0.5, -top + r * 0.3 + e.rnd() * 2, r * (0.7 + e.rnd() * 0.4), 0, Math.PI * 2);
    g.fill();
  }
}
