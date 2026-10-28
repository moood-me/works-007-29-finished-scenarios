// A clump of rank autumn grass in Niggle's yard (3 m along, 0.7 high, about its foot): blades going to straw, seed
// heads, a broad dock leaf or two gone rusty; it bends in the wind.
const tones = ['#7a8248', '#8a8c50', '#a39a5e', '#6e7844'];
for (let i = 0; i < 3; i++) {
  const x = -1.2 + e.rnd() * 2.4;
  g.fillStyle = e.rnd() < 0.5 ? '#6f6a3c' : '#8a5e3a';
  g.beginPath();
  g.ellipse(x, -0.12, 0.22, 0.1, (e.rnd() - 0.5) * 0.8, 0, Math.PI * 2);
  g.fill();
}
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.3, gust: 0.6 } }, l => {
  for (let i = 0; i < 110; i++) {
    const x = -1.5 + e.rnd() * 3;
    const h = 0.25 + e.rnd() * 0.45;
    const lean = (e.rnd() - 0.5) * 0.25;
    l.strokeStyle = tones[Math.floor(e.rnd() * tones.length)];
    l.lineWidth = 0.018;
    l.beginPath();
    l.moveTo(x, 0);
    l.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    l.stroke();
    if (e.rnd() < 0.3) {
      l.fillStyle = '#b9a874';
      l.beginPath();
      l.ellipse(x + lean, -h - 0.03, 0.012, 0.04, lean, 0, Math.PI * 2);
      l.fill();
    }
  }
});
