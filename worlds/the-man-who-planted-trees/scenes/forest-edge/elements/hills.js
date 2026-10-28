// The valley's far side a kilometre and a half off: long green-grey hills, woods on them in darker patches — the
// plateau greening far beyond the old man's slopes
g.fillStyle = "#7d8a6c";
g.beginPath();
g.moveTo(-4000, 5);
for (let x = -4000; x <= 4000; x += 40) {
  const n = e.anim.noise(x / 700, 5) * 0.7 + e.anim.noise(x / 180, 6) * 0.3;
  g.lineTo(x, -(18 + 52 * Math.max(0, n)));
}
g.lineTo(4000, 5);
g.closePath();
g.fill();
g.clip();
g.fillStyle = "#677557";
for (let i = 0; i < 40; i++) {
  const x = -3800 + e.rnd() * 7600, w = 60 + e.rnd() * 160, y = -(4 + e.rnd() * 18);
  g.beginPath();
  g.ellipse(x, y, w, 6 + e.rnd() * 8, 0, 0, Math.PI * 2);
  g.fill();
}
