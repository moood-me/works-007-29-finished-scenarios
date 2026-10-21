// The gallery round the top of the tower, its near half: a stone slab on corbels, an iron railing on it.
g.fillStyle = '#b9b6ae';
g.fillRect(-3.2, 0, 6.4, 0.28);
g.fillStyle = '#a3a098';
for (let x = -2.6; x <= 2.6; x += 0.65) {
  g.beginPath();
  g.moveTo(x - 0.16, 0.28);
  g.lineTo(x + 0.16, 0.28);
  g.lineTo(x + 0.05, 0.8);
  g.lineTo(x - 0.05, 0.8);
  g.closePath();
  g.fill();
}
g.fillStyle = '#2b2e33';
g.fillRect(-3.15, -1.1, 6.3, 0.07);
g.fillRect(-3.15, -0.55, 6.3, 0.04);
for (let x = -3.1; x <= 3.1; x += 0.31) g.fillRect(x - 0.025, -1.1, 0.05, 1.1);
