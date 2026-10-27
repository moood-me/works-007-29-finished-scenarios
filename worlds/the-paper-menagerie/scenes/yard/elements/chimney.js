// The chimney rising from behind the ridge: old red brick, its courses, a cap of grey concrete.
g.fillStyle = '#9c5a4a';
g.fillRect(-0.3, -2.2, 0.6, 2.2);
g.fillStyle = 'rgba(70,40,34,0.35)';
for (let y = -2.1, r = 0; y < 0; y += 0.09, r++) {
  g.fillRect(-0.3, y, 0.6, 0.012);
  for (let x = -0.3 + (r % 2) * 0.1; x < 0.3; x += 0.2) g.fillRect(x, y, 0.012, 0.09);
}
g.fillStyle = '#8f8c88';
g.fillRect(-0.35, -2.36, 0.7, 0.16);
