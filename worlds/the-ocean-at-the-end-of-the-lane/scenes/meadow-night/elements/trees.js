// The far edge of the meadow all round: a low line of hedges and round-topped trees (70 m off), blue-green as the
// night has them; on the left (x −50…−10) only the hedge, the land beyond it opening toward the village.
g.fillStyle = '#5c7462';
g.beginPath();
g.moveTo(-120, 0.5);
for (let x = -120; x <= 120; x += 1.5) g.lineTo(x, (x > -50 && x < -10 ? -1.6 : -2.4) - 0.6 * Math.sin(x * 0.6) - 0.5 * e.rnd());
g.lineTo(120, 0.5);
g.closePath();
g.fill();
for (let k = 0; k < 26; k++) {
  const x = -115 + 230 * e.rnd(), h = 4 + 6 * e.rnd(), r = 2 + 2.4 * e.rnd();
  if (x > -54 && x < -6) continue;
  g.fillStyle = k % 3 ? '#557060' : '#4d675a';
  g.fillRect(x - 0.15, -h + r, 0.3, h - r);
  g.beginPath();
  g.ellipse(x, -h + r * 0.4, r, r * 0.8, 0, 0, Math.PI * 2);
  g.fill();
}
