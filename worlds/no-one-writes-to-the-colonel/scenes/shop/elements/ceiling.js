// The ceiling seen from below (the card laid face down, its foot at the back wall, y −4.9 the end nearest the
// viewer): planks gone dark with the years, on three square beams running across; the bulb's flex along a beam.
g.fillStyle = '#5e4a38';
g.fillRect(-3.6, -5.0, 7.2, 5.1);
for (let x = -3.6; x < 3.6; x += 0.18) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(80,62,46,0.6)' : 'rgba(110,88,66,0.4)';
  g.fillRect(x, -5.0, 0.17, 5.1);
  g.fillStyle = 'rgba(30,22,16,0.5)';
  g.fillRect(x + 0.17, -5.0, 0.01, 5.1);
}
for (let i = 0; i < 18; i++) {
  g.fillStyle = 'rgba(120,110,90,0.25)';
  g.beginPath();
  g.ellipse(-3.4 + e.rnd() * 6.8, -4.8 + e.rnd() * 4.6, 0.1 + e.rnd() * 0.4, 0.05 + e.rnd() * 0.2, 0, 0, Math.PI * 2);
  g.fill();
}
for (const y of [-1.8, -3.6]) {
  g.fillStyle = '#3e2e22';
  g.fillRect(-3.6, y - 0.09, 7.2, 0.18);
  g.fillStyle = 'rgba(140,110,80,0.25)';
  g.fillRect(-3.6, y - 0.09, 7.2, 0.03);
}
