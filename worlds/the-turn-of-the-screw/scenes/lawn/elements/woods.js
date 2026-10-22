// A clump of old park trees — oaks and elms run together — round the house and beyond it (metres: x across, y up): a
// solid mass of the darker green with an uneven top of rounded crowns, small clumps of leaf over it.
const top = x => 13 + 6 * Math.cos(((x + 1) / 13) * 1.3) + 1.5 * Math.sin(x * 0.9);
g.fillStyle = '#4c4236';
for (const x of [-7, -1.5, 5]) g.fillRect(x - 0.3, -5, 0.6, 5);
g.fillStyle = '#3f5534';
g.beginPath();
g.moveTo(-12, -3);
for (let x = -12; x <= 12.01; x += 0.5) g.lineTo(x, -top(x));
g.lineTo(12, -3);
g.closePath();
g.fill();
for (let x = -11.5; x < 12; x += 1.6) {
  g.beginPath();
  g.arc(x, -top(x) + 0.8, 1.2 + e.rnd() * 0.8, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.arc(x + (e.rnd() - 0.5), -3.4 - e.rnd() * 0.5, 0.9 + e.rnd() * 0.6, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 380; i++) {
  const x = -11.5 + e.rnd() * 23;
  const y = -3 - e.rnd() * (top(x) - 3.5);
  const up = -y / top(x);
  const tones = up > 0.6 ? ['#56703f', '#4d673f', '#5f7a45'] : ['#435a38', '#3a4f31', '#4a6339'];
  g.fillStyle = tones[Math.floor(e.rnd() * 3)];
  g.beginPath();
  g.ellipse(x, y, 0.45 + e.rnd() * 0.5, 0.35 + e.rnd() * 0.35, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
