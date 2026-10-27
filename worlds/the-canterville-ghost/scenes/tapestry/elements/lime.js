// A lime of the avenue in October (about 9 m): a dark trunk, a wide crown of yellow going thin from 2.5 m up, gaps of
// sky through it — the crown a layer of its own, stirring in the wind.
g.fillStyle = '#3a2e24';
g.beginPath();
g.moveTo(-0.28, 0);
g.lineTo(-0.16, -3.6);
g.lineTo(0.16, -3.6);
g.lineTo(0.3, 0);
g.closePath();
g.fill();
g.strokeStyle = '#3a2e24';
g.lineWidth = 0.12;
for (const [x, y] of [[-2.4, -6.5], [2.1, -7], [-0.5, -8.6], [0.9, -5.4]]) {
  g.beginPath();
  g.moveTo(0, -3.4);
  g.quadraticCurveTo(x * 0.3, -4.6, x, y);
  g.stroke();
}
e.layer('crown', { pivot: [0, -3.4], wind: 0.15 }, c => {
  const tones = ['#c8962c', '#d9a838', '#b07a24', '#e2bc52', '#9a7a2c'];
  for (let i = 0; i < 80; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd());
    c.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.beginPath();
    c.arc(Math.cos(a) * d * 3.0, -5.8 + Math.sin(a) * d * 2.9, 0.4 + e.rnd() * 0.55, 0, Math.PI * 2);
    c.fill();
  }
});
