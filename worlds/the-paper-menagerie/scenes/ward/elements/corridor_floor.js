// The corridor's floor from above (metres; its middle at distance 7.5, y toward the eye): the same grey-green
// linoleum as the ward's in half-metre squares, polished, a paler worn track down the middle.
g.fillStyle = '#b6bfae';
g.fillRect(-1.45, -10.6, 2.9, 21.2);
for (let i = 0; i < 1600; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,132,118,0.35)' : 'rgba(225,230,214,0.4)';
  g.fillRect(-1.45 + e.rnd() * 2.9, -10.6 + e.rnd() * 21.2, 0.012, 0.012);
}
g.fillStyle = 'rgba(110,122,108,0.4)';
for (let x = -1.45; x <= 1.45; x += 0.5) g.fillRect(x, -10.6, 0.008, 21.2);
for (let y = -10.6; y <= 10.6; y += 0.5) g.fillRect(-1.45, y, 2.9, 0.008);
g.fillStyle = 'rgba(232,236,222,0.2)';
g.fillRect(-0.5, -10.6, 1.0, 21.2);
