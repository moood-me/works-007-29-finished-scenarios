// The brick chimney stack coming up through the attic from the kitchen below and on out through the roof: soft red
// brick, the mortar pale, soot at its foot.
g.fillStyle = '#9a5a46';
g.fillRect(-0.28, -2.4, 0.56, 2.42);
for (let y = -2.4, r = 0; y < 0; y += 0.075, r++) {
  g.fillStyle = 'rgba(230,214,190,0.55)';
  g.fillRect(-0.28, y, 0.56, 0.012);
  for (let x = -0.28 + (r % 2) * 0.11; x < 0.28; x += 0.22) g.fillRect(x, y, 0.012, 0.075);
}
g.fillStyle = 'rgba(40,30,28,0.35)';
g.fillRect(-0.28, -0.3, 0.56, 0.32);
