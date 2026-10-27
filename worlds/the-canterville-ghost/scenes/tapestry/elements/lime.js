// A lime of the avenue in October (about 11 m): a dark trunk, a high crown of yellow going thin, gaps of sky through
// it — painted as layers so the crown stirs in the wind.
g.fillStyle = '#3a2e24';
g.beginPath();
g.moveTo(-0.3, 0);
g.lineTo(-0.18, -5.2);
g.lineTo(0.18, -5.2);
g.lineTo(0.32, 0);
g.closePath();
g.fill();
g.strokeStyle = '#3a2e24';
g.lineWidth = 0.14;
for (const [x, y] of [[-2.2, -8.5], [1.9, -9], [-0.6, -10.2], [0.8, -7.4]]) {
  g.beginPath();
  g.moveTo(0, -5);
  g.quadraticCurveTo(x * 0.3, -6.5, x, y);
  g.stroke();
}
e.layer('crown', { pivot: [0, -5], wind: 0.15 }, c => {
  const tones = ['#c8962c', '#d9a838', '#b07a24', '#e2bc52', '#9a7a2c'];
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd());
    c.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.beginPath();
    c.arc(Math.cos(a) * d * 3.1, -8 + Math.sin(a) * d * 2.8, 0.45 + e.rnd() * 0.6, 0, Math.PI * 2);
    c.fill();
  }
});
