// A clump of old park trees — oaks and elms run together — round the house and beyond it (metres: x across, y up).
g.fillStyle = '#4c4236';
for (const x of [-7, -1.5, 5]) g.fillRect(x - 0.3, -5, 0.6, 5);
for (let i = 0; i < 160; i++) {
  const x = -12 + e.rnd() * 24;
  const top = 13 + 6 * Math.cos(((x + 1) / 13) * 1.3);
  const y = -2.5 - e.rnd() * (top - 3);
  g.fillStyle = ['#435a38', '#4d673f', '#3a4f31', '#56703f'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.arc(x, y, 1.0 + e.rnd() * 1.4, 0, Math.PI * 2);
  g.fill();
}
