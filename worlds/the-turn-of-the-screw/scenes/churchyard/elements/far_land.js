// The low country far off beyond the churchyard: a long blue-grey rise of land, woods along it in soft clumps, the
// morning's mist lying in its folds (metres: x across, y up from its foot).
g.fillStyle = '#8f9a98';
g.beginPath();
g.moveTo(-2500, 10);
for (let x = -2500; x <= 2500; x += 100) g.lineTo(x, -12 - 10 * Math.sin(x / 430) - 6 * Math.sin(x / 170 + 1));
g.lineTo(2500, 10);
g.closePath();
g.fill();
g.fillStyle = '#7f8b8a';
for (let i = 0; i < 70; i++) {
  const x = -2500 + e.rnd() * 5000;
  const top = -12 - 10 * Math.sin(x / 430) - 6 * Math.sin(x / 170 + 1);
  g.beginPath();
  g.ellipse(x, top + 2, 20 + e.rnd() * 50, 5 + e.rnd() * 5, 0, 0, Math.PI * 2);
  g.fill();
}
