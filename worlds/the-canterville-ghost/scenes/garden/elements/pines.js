// The pine woods far off beyond the garden (70 m away, 300 m wide): a ragged band of dark crowns against the paler sky
// low down — tall bare stems and flat, uneven tops, one wood behind another.
for (const [tone, base, h] of [['#1c2636', 7, 10], ['#151d2a', 4, 8]]) {
  g.fillStyle = tone;
  g.fillRect(-150, -base - 1, 300, base + 1.5);
  for (let x = -150; x <= 150; x += 1.6 + e.rnd() * 2.4) {
    const top = base + h * (0.5 + e.rnd() * 0.5);
    g.fillRect(x - 0.15, -top, 0.3, top);
    // the crown: a few flat irregular clumps at the stem's top
    for (let k = 0; k < 4; k++) {
      g.beginPath();
      g.ellipse(x + (e.rnd() - 0.5) * 2.4, -top + k * 0.9 + e.rnd() * 0.6, 1.2 + e.rnd() * 1.4, 0.6 + e.rnd() * 0.5, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
}
