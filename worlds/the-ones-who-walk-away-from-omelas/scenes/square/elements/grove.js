// Trees of the gardens down the city: round dark-green crowns over short trunks, and a dark cypress among them; the
// crowns stir in the wind (layer `crowns`)
const A = e.anim;
g.fillStyle = '#6b5a44';
for (const x of [-4, 0.5, 4.5]) g.fillRect(x - 0.3, -3, 0.6, 3);
e.layer('crowns', { pivot: [0, 0], wind: { strength: 0.12, gust: 0.4 } }, g => {
  for (let i = 0; i < 26; i++) {
    const x = -6 + 12 * A.hash(i, 1), y = -3.2 - 4.5 * A.hash(i, 2), r = 1.4 + 1.6 * A.hash(i, 3);
    g.fillStyle = ['#56713f', '#6b8749', '#4a6338'][i % 3];
    g.beginPath();
    g.ellipse(x, y, r, r * 0.85, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#3c5232';
  g.beginPath();
  g.ellipse(-1.6, -6, 0.9, 6, 0, 0, Math.PI * 2);
  g.fill();
});
